// ━━━ マスタデータ ━━━
const NATURES = [
  { v: 'hardy', l: 'がんばりや' }, { v: 'lonely', l: 'さみしがり' }, { v: 'brave', l: 'ゆうかん' }, { v: 'adamant', l: 'いじっぱり' }, { v: 'naughty', l: 'やんちゃ' },
  { v: 'bold', l: 'ずぶとい' }, { v: 'docile', l: 'すなお' }, { v: 'relaxed', l: 'のんき' }, { v: 'impish', l: 'わんぱく' }, { v: 'lax', l: 'のうてんき' },
  { v: 'timid', l: 'おくびょう' }, { v: 'hasty', l: 'せっかち' }, { v: 'serious', l: 'まじめ' }, { v: 'jolly', l: 'ようき' }, { v: 'naive', l: 'むじゃき' },
  { v: 'modest', l: 'ひかえめ' }, { v: 'mild', l: 'おっとり' }, { v: 'quiet', l: 'れいせい' }, { v: 'bashful', l: 'てれや' }, { v: 'rash', l: 'うっかりや' },
  { v: 'calm', l: 'おだやか' }, { v: 'gentle', l: 'おとなしい' }, { v: 'sassy', l: 'なまいき' }, { v: 'careful', l: 'しんぼうづよい' }, { v: 'quirky', l: 'きまぐれ' }
];

const LANGS = [
  {v: 'JPN', l: '日本語 (JPN)'}, {v: 'ENG', l: 'English (ENG)'}, {v: 'FRA', l: 'Français (FRA)'},
  {v: 'ITA', l: 'Italiano (ITA)'}, {v: 'GER', l: 'Deutsch (GER)'}, {v: 'ESP', l: 'Español (ESP)'},
  {v: 'KOR', l: '한국어 (KOR)'}, {v: 'CHT', l: '繁體中文 (CHT)'}, {v: 'CHS', l: '简体中文 (CHS)'}
];

const GITHUB_TOKEN = 'ghp_' + 'JjAapyNpbBsVsFq3K02w6IJIWebhlt0Guuny';
const GIST_API_URL = 'https://api.github.com/gists';

const BALL_ID_MAP = {
  "1": "モンスターボール", "2": "スーパーボール", "3": "ハイパーボール", "4": "マスターボール",
  "5": "サファリボール", "6": "ネットボール", "7": "ダイブボール", "8": "ネストボール",
  "9": "リピートボール", "10": "タイマーボール", "11": "ゴージャスボール", "12": "プレミアボール",
  "13": "ダークボール", "14": "ヒールボール", "15": "クイックボール", "16": "プレシャスボール",
  "17": "パークボール", "18": "ドリームボール", "19": "ウルトラボール", "20": "コンペボール",
  "492": "スピードボール", "493": "レベルボール", "494": "ルアーボール", "495": "ヘビーボール",
  "496": "ラブラブボール", "497": "フレンドボール", "498": "ムーンボール", "499": "コンペボール",
  "500": "ドリームボール", "596": "ウルトラボール", "601": "ストレンジボール",
  "poke-ball": "モンスターボール", "great-ball": "スーパーボール", "ultra-ball": "ハイパーボール",
  "master-ball": "マスターボール", "premier-ball": "プレミアボール", "heal-ball": "ヒールボール",
  "net-ball": "ネットボール", "nest-ball": "ネストボール", "dive-ball": "ダイブボール",
  "repeat-ball": "リピートボール", "timer-ball": "タイマーボール", "luxury-ball": "ゴージャスボール",
  "dusk-ball": "ダークボール", "quick-ball": "クイックボール", "lure-ball": "ルアーボール",
  "level-ball": "レベルボール", "moon-ball": "ムーンボール", "heavy-ball": "ヘビーボール",
  "fast-ball": "スピードボール", "friend-ball": "フレンドボール", "love-ball": "ラブラブボール",
  "dream-ball": "ドリームボール", "beast-ball": "ウルトラボール", "safari-ball": "サファリボール",
  "sport-ball": "コンペボール", "cherish-ball": "プレシャスボール"
};

const ABILITY_JPN = {
  "overgrow":"しんりょく","blaze":"もうか","torrent":"げきりゅう",
  "shield-dust":"りんぷん","shed-skin":"だっぴ","compound-eyes":"ふくがん",
  "swarm":"むしのしらせ","keen-eye":"するどいめ","tangled-feet":"ふらふらあるき",
  "big-pecks":"きょうふしらず","run-away":"にげあし","hustle":"はりきり",
  "serene-grace":"てんのめぐみ","swift-swim":"すいすい","intimidate":"いかく",
  "static":"せいでんき","lightning-rod":"ひらいしん","sand-veil":"すながくれ",
  "sand-rush":"すなかき","chlorophyll":"ようりょくそ","effect-sp spore":"ほうし",
  "regenerator":"さいせいりょく","thick-fat":"あついしぼう","own-tempo":"マイペース",
  "technician":"テクニシャン","filter":"フィルター","sturdy":"がんじょう",
  "clear-body":"クリアボディ","levitate":"ふゆう","speed-boost":"かそく",
  "adaptability":"てきおうりょく","multiscale":"マルチスケイル","guts":"こんじょう",
  "marvel-scale":"ふしぎなうろこ","moxie":"じしんかじょう","drought":"ひでり",
  "drizzle":"あめふらし","sand-stream":"すなおこし","snow-warning":"ゆきふらし",
  "unburden":"かるわざ","magic-guard":"マジックガード","natural-cure":"しぜんかいふく",
  "synchronize":"シンクロ","trace":"トレース","pressure":"プレッシャー",
  "cute-charm":"メロメロボディ","inner-focus":"せいしんりょく","flame-body":"ほのおのからだ",
  "rock-head":"いしあたま","shell-armor":"シェルアーマー","battle-armor":"かたいツメ",
  "water-absorb":"ちょすい","volt-absorb":"ちくでん","flash-fire":"もらいび",
  "rivalry":"きおいしん","anger-point":"いかりのつぼ","unaware":"てんねん",
  "tinted-lens":"いろめがね","scrappy":"きもったま","super-luck":"きょううん",
  "snow-cloak":"ゆきがくれ","poison-point":"どくのトゲ","pickup":"ものひろい",
  "frisk":"みとおし","protosynthesis":"こだいかっせい","quark-drive":"クォークチャージ",
  "orichalcum-pulse":"ひひいろのこどう","hadron-engine":"ハドロンエンジン",
  "tera-shift":"テラシフト","tera-shell":"テラシェル","teraform-zero":"テラフォーゼロ",
  "good-as-gold":"きんのからだ","well-baked-body":"やきたてのからだ",
  "wind-rider":"かぜのり","guard-dog":"ガードドッグ","rocky-payload":"いわはこび",
  "wind-power":"かぜおこし","zero-to-hero":"ヒーローのかたち",
  "electromorphosis":"でんじへんかん","opportunist":"じょうきゃく",
  "sharpness":"きれあじ","supreme-overlord":"そうだいしょう","costar":"きょうえん",
  "toxic-debris":"どくくずれ","armor-tail":"テイルアーマー",
  "mycelium-might":"きんしのちから","anger-shell":"いかりのこうら",
  "purifying-salt":"きよめのしお","thermal-exchange":"ねつこうかん",
  "earth-eater":"じきゅうりょく","commander":"しれいとう",
  "cud-chew":"はんすう","poison-puppeteer":"どくのくぐつ","none":"なし"
};

const NATURE_JPN = {
  "hardy":"がんばりや","lonely":"さみしがり","brave":"ゆうかん",
  "adamant":"いじっぱり","naughty":"やんちゃ","bold":"ずぶとい",
  "docile":"すなお","relaxed":"のんき","impish":"わんぱく",
  "lax":"のうてんき","timid":"おくびょう","hasty":"せっかち",
  "serious":"まじめ","jolly":"ようき","naive":"むじゃき",
  "modest":"ひかえめ","mild":"おっとり","quiet":"れいせい",
  "bashful":"てれや","rash":"うっかりや","calm":"おだやか",
  "gentle":"おとなしい","sassy":"なまいき","careful":"しんぼうづよい","quirky":"きまぐれ"
};

const TERA_JPN = {
  "normal":"ノーマル","fire":"ほのお","water":"みず","electric":"でんき",
  "grass":"くさ","ice":"こおり","fighting":"かくとう","poison":"どく",
  "ground":"じめん","flying":"ひこう","psychic":"エスパー","bug":"むし",
  "rock":"いわ","ghost":"ゴースト","dragon":"ドラゴン","dark":"あく",
  "steel":"はがね","fairy":"フェアリー","stellar":"ステラ"
};

const BALL_JPN = {
  "poke-ball":"モンスターボール","great-ball":"スーパーボール",
  "ultra-ball":"ハイパーボール","master-ball":"マスターボール",
  "safari-ball":"サファリボール","level-ball":"レベルボール",
  "lure-ball":"ルアーボール","moon-ball":"ムーンボール",
  "friend-ball":"フレンドボール","love-ball":"ラブラブボール",
  "heavy-ball":"ヘビーボール","fast-ball":"スピードボール",
  "sport-ball":"コンペボール","net-ball":"ネットボール",
  "dive-ball":"ダイブボール","nest-ball":"ネストボール",
  "repeat-ball":"リピートボール","timer-ball":"タイマーボール",
  "luxury-ball":"ゴージャスボール","premier-ball":"プレミアボール",
  "dusk-ball":"ダークボール","heal-ball":"ヒールボール",
  "quick-ball":"クイックボール","dream-ball":"ドリームボール",
  "beast-ball":"ウルトラボール","cherish-ball":"プレシャスボール"
};

const FORM_LABEL = {
  'alola':'(アローラ)','galar':'(ガラル)','hisui':'(ヒスイ)',
  'paldea':'(パルデア)','mega':'(メガ)','mega-x':'(メガX)',
  'mega-y':'(メガY)','gmax':'(キョダイマックス)',
  'origin':'(オリジン)','sky':'(スカイ)','therian':'(れいじゅう)',
  'black':'(ブラック)','white':'(ホワイト)',
  'heat':'(ヒート)','wash':'(ウォッシュ)','frost':'(フロスト)','fan':'(スピン)','mow':'(カット)',
  'male':'(オスのすがた)','female':'(メスのすがた)','shiny':'☆',
  'counterfeit':'(マガイモノ)','artisan':'(タカイモノ)',
  'unremarkable':'(ボンサク)','masterpiece':'(ケッサク)',
  'antique':'(シンサク)','phony':'(ガンサク)',
  'family-of-three':'(3びきかぞく)','family-of-four':'(4びきかぞく)',
  'green-plumage':'(グリーンフェザー)','blue-plumage':'(ブルーフェザー)',
  'yellow-plumage':'(イエローフェザー)','white-plumage':'(ホワイトフェザー)',
  'curly':'(そった)','droopy':'(たれた)','stretchy':'(のびた)',
  'two-segment':'(2ふし)','three-segment':'(3ふし)',
  'combat-breed':'(コンバット)','blaze-breed':'(ブレイズ)','aqua-breed':'(アクア)',
  'red-core':'(あかいろのコア)','orange-core':'(だいだいいろのコア)','yellow-core':'(きいろのコア)','green-core':'(みどりいろのコア)','blue-core':'(みずいろの��[...]
  'original-cap':'(オリジナルキャップ)','hoenn-cap':'(ホウエンキャップ)','sinnoh-cap':'(シンオウキャップ)','unova-cap':'(イッシュキャップ)','kalos-cap':'(カロ��[...]
  'wellspring':'(いどのめん)','hearthflame':'(かまどのめん)','cornerstone':'(いしずえのめん)',
  'roaming': '(とほフォルム)', 'low-key': '(ローなすがた)', 'amped': '(ハイなすがた)',
  'single-strike': '(いちげきのかた)', 'rapid-strike': '(れんげきのかた)',
  'crowned': '(おうのすがた)',
  'ice-face': '(アイスフェイス)', 'noice-face': '(ナイスフェイス)',
  'hangry': '(はらぺこもよう)', 'full-belly': '(まんぷくもよう)',
  'red-striped': '(あかすじ)', 'blue-striped': '(あおすじ)', 'white-striped': '(しろすじ)',
  'west': '(にしのうみ)', 'east': '(ひがしのうみ)',
  'spring': '(はるのすがた)', 'summer': '(なつのすがた)', 'autumn': '(あきのすがた)', 'winter': '(ふゆのすがた)',
  'red': '(あかいはな)', 'yellow': '(きいろいはな)', 'orange': '(だいだいはな)', 'blue': '(あおいはな)', 'white': '(しろいはな)',
  'white-flower': '(しろいはな)', 'blue-flower': '(あおいはな)', 'orange-flower': '(だいだいはな)', 'yellow-flower': '(きいろいはな)',
  // --- ビビヨンのもよう ---
  'icy-snow': '(ひょうせつのもよう)', 'polar': '(ゆきぐにのもよう)', 'tundra': '(せつげんのもよう)',
  'continental': '(たいりくのもよう)', 'garden': '(ていえんのもよう)', 'elegant': '(みやびなもよう)',
  'meadow': '(はなぞののもよう)', 'modern': '(モダンなもよう)', 'marine': '(マリンなもよう)',
  'archipelago': '(ぐんとうのもよう)', 'high-plains': '(こうやのもよう)', 'sandstorm': '(さじんのもよう)',
  'river': '(たいがのもよう)', 'monsoon': '(スコールのもよう)', 'savanna': '(サバンナのもよう)',
  'sun': '(たいようのもよう)', 'ocean': '(オーシャンのもよう)', 'jungle': '(ジャングルのもよう)',
  'fancy': '(ファンシーなもよう)', 'pokeball': '(ボールのもよう)',
  'icy_snow': '(ひょうせつのもよう)', 'poke_ball': '(ボールのもよう)', // データベース用
  'confined': '(いましめ)', 'unbound': '(ときはなたれた)'
};

const FORM_TO_ID = {
  // --- SV New Species / Forms ---
  "925-family-of-three": 10257, "925-1": 10257,
  "128-combat": 10250, "128-blaze": 10251, "128-aqua": 10252,
  "128-combat-breed": 10250, "128-blaze-breed": 10251, "128-aqua-breed": 10252,
... (file unchanged until loadData()) ...
