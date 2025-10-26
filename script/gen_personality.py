from pathlib import Path

personality = [
  ("EFSA", "キャプテン"),
  ("EFSM", "インフルエンサー"),
  ("EFPA", "ムードメーカー"),
  ("EFPM", "ドリーマー"),
  ("ETSA", "リーダー"),
  ("ETSM", "チャレンジャー"),
  ("ETPA", "ハンター"),
  ("ETPM", "エンターテイナー"),
  ("IFSA", "サポーター"),
  ("IFSM", "ナレーター"),
  ("IFPA", "ヒーラー"),
  ("IFPM", "ミュージシャン"),
  ("ITSA", "エンジニア"),
  ("ITSM", "プランナー"),
  ("ITPA", "アナリスト"),
  ("ITPM", "イノベーター"),
]

for index, (code, name) in enumerate(personality):
  print(f"{code}: {{sections: [{{ title: 'どんな人？', content: <> {name}の説明文</> }}, {{ title: '長所・短所とアドバイス', content: <> {name}の長所と短所</> }}, {{ title: '相性と関係性', content: <> {name}の相性の良い性格</> }}], relations: [],}}, ")
