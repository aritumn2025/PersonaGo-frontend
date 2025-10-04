# DiagnoseConfig 設定方法

このドキュメントは、`DiagnoseConfig` を使って診断ロジックを定義するための仕様の概要です。

## 診断方法の概要

1. すべてのラベルについて、`bias` を初期値としてスコアベクトルを作成する
2. 各質問に回答するたびに、その質問に対応する `score` または `scores` をスコアベクトルに加算
   - 複数のラベルに同時に加点することも可能

3. 最終的なスコアベクトルに対して、各ラベルごとに「0以上か、負か」で2分判定
   - 0以上 → positive側
   - 負 → negative側

4. 判定結果をビット列化して `result` 配列のインデックスを決定し、その値を診断結果として返す

## 基本構造

```ts
type DiagnoseConfig<K extends string> = {
  labels: LabelConfig<K>[];
  questions: QuestionConfig<K>[];
  result: PersonalityId[];
};
```

- **labels**: 診断の軸（MBTIなら EI, SN, TF, JP など）
- **questions**: 質問の定義（連続/離散）
- **result**: 全ての組み合わせに対応する診断結果

## labels

各軸は「正/負の二方向」として定義します。

```ts
{
  id: "EI", // 軸の識別子
  text: "外向性 vs 内向性", // 軸の名前
  description: "人と関わることを好むか、一人でいることを好むか",
  positive: { text: "外向性 (E)", description: "..." },
  negative: { text: "内向性 (I)", description: "..." },
  bias: 0, // 初期スコア（0が基本。正値ならpositive寄りスタート）
}
```

- `id` は一意である必要があります。
- `bias` は未回答時の初期スコア。

## questions

質問には **2種類** あります。

### Continuous (連続)

スライダーやリッカート尺度 (1〜5など) に対応。
回答値は `0〜count-1` で渡され、線形補間によってスコアが計算されます。

```ts
{
  kind: "continuous",
  text: "大人数でのパーティーに参加するのが好きだ",
  options: {
    count: 5, // 段階数
    left: {
      text: "あてはまらない",
      score: { EI: -1 }, // 複数の軸に同時加点も可能
    },
    right: {
      text: "あてはまる",
      score: { EI: 1 },
    },
  },
}
```

### Discrete (離散)

複数選択肢から選ぶ形式。

```ts
{
  kind: "discrete",
  text: "どちらの説明がより自分に当てはまりますか？",
  options: [
    { text: "現実的で...", scores: { SN: 1 } },
    { text: "未来の可能性...", scores: { SN: -1 } },
  ],
}
```

#### 複数ラベルに影響させることも可能

```ts
{
  kind: "discrete",
  text: "論理的に説明しつつ、計画的に進めることが得意だ",
  options: [
    { text: "はい", scores: { TF: 1, JP: 1 } },
    { text: "いいえ", scores: { TF: -1, JP: -1 } },
  ],
}
```

## result

- 結果は **2^(ラベル数)** 通り必要です。
- 配列順は `labels` の並び順に依存し、各ラベルのスコアが正(>=0)なら `1`、負なら `0` としてビット列を作り、その値で `result` 配列のインデックスを決定します。

例:
labels = `[EI, SN]` の場合

- EI<0, SN<0 → `00` → `result[0]`
- EI>=0, SN<0 → `01` → `result[1]`
- EI<0, SN>=0 → `10` → `result[2]`
- EI>=0, SN>=0 → `11` → `result[3]`

## 設計のポイント

- **biasで初期傾向を調整**：どちらかに寄せたい場合は ±1 を入れる
- **スコアは複数軸に影響可能**：`scores: { TF: 1, JP: 1 }`
- **結果配列は必ず全組み合わせを網羅**：不足するとエラーになります
- **判定は「しきい値0」で2分する**：実装をシンプルに保つことができる
