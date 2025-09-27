/* 外部リンクを定めた定数ファイル */

// 外部リンクのURL
// TODO: URLが決まり次第更新する
const EXTERNAL_LINKS = {
  // 開発関連(開発の様子を公開するかも)
  development: {
    // GitHubリポジトリ(Organization)
    // リポジトリを公開するかは未定(リンクの公開は問題ない)
    github: "https://github.com/aritumn2025/",
  },
  official: {
    // 有明工業高等専門学校公式サイト
    ariake: "https://www.ariake-nct.ac.jp/",
    // 学生会のありたむフェスタ2025公式サイト
    aritumn: "https://sites.google.com/ga.ariake-nct.ac.jp/7th-aritamu-ippan/",
  },
  // 投票フォーム
  vote: "https://docs.google.com/forms/d/e/xxxxxxxxxxxxxxxxxx/viewform",
  // AI似顔絵画像ダウンロードリンク
  pictureDownload: "https://example.com/download-picture",
} as const;

export { EXTERNAL_LINKS };
