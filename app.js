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
  'family-of-three':'(3びきかぞく)','family-of-four':'(4ひきかぞく)',
  'green-plumage':'(グリーンフェザー)','blue-plumage':'(ブルーフェザー)',
  'yellow-plumage':'(イエローフェザー)','white-plumage':'(ホワイトフェザー)',
  'curly':'(そった)','droopy':'(たれた)','stretchy':'(のびた)',
  'two-segment':'(2ふし)','three-segment':'(3ふし)',
  'combat-breed':'(コンバット)','blaze-breed':'(ブレイズ)','aqua-breed':'(アクア)',
  'red-core':'(あかいろのコア)','orange-core':'(だいだいいろのコア)','yellow-core':'(きいろのコア)','green-core':'(みどりいろのコア)','blue-core':'(みずいろのコア)','indigo-core':'(あいいろのコア)','violet-core':'(むらさきのコア)'
};

const FORM_TO_ID = {
  // --- SV New Species / Forms ---
  "925-family-of-three": 10257, "925-1": 10257,
  "128-combat": 10250, "128-blaze": 10251, "128-aqua": 10252,
  "128-combat-breed": 10250, "128-blaze-breed": 10251, "128-aqua-breed": 10252,
  "128-paldea": 10250, "128-paldea-blaze": 10251, "128-paldea-aqua": 10252,
  "194-paldea": 10253,
  "916-female": 10254,
  "982-three-segment": 10255,
  "964-hero": 10256,
  "978-stretchy": 10258,
  "978-droopy": 10259,
  "931-blue-plumage": 10260,
  "931-yellow-plumage": 10261,
  "931-white-plumage": 10262,
  "999-roaming": 10263,
  "1017-wellspring": 10273, "1017-hearthflame": 10274, "1017-cornerstone": 10275,
  "1024-terastal": 10276, "1024-stellar": 10277,
  "901-bloodmoon": 10272,
  "1007-apex-mode": 1007,
  "1008-ultimate-mode": 1008,

  // --- Hisui Forms ---
  "058-hisui": 10229, "059-hisui": 10230, "100-hisui": 10231, "101-hisui": 10232,
  "157-hisui": 10233, "211-hisui": 10234, "215-hisui": 10235, "503-hisui": 10236, "549-hisui": 10237, "570-hisui": 10238, "571-hisui": 10239, "628-hisui": 10240,
  "705-hisui": 10241, "706-hisui": 10242, "713-hisui": 10243, "724-hisui": 10244,
  "483-origin": 10245, "484-origin": 10246, "487-origin": 10007,
  "550-white-striped": 10247, "550-2": 10247,
  "905-therian": 10249, "902-female": 10248,
  "641-therian": 10019, "641-1": 10019,
  "642-therian": 10020, "642-1": 10020,
  "645-therian": 10021, "645-1": 10021,

  // --- Alola / Galar Forms (SV Available Only) ---
  "026-alola": 10100, "027-alola": 10101, "028-alola": 10102,
  // --- ビビヨン (666) 全模様マッピング ---
  "666-icy-snow": "666-icy-snow", "666-icy_snow": "666-icy-snow", "666-0": "666-icy-snow",
  "666-polar": "666-polar", "666-1": "666-polar",
  "666-tundra": "666-tundra", "666-2": "666-tundra",
  "666-continental": "666-continental", "666-3": "666-continental",
  "666-garden": "666-garden", "666-4": "666-garden",
  "666-elegant": "666-elegant", "666-5": "666-elegant",
  "666-meadow": 666,   "666-6": 666,
  "666-modern": "666-modern", "666-7": "666-modern",
  "666-marine": "666-marine", "666-8": "666-marine",
  "666-archipelago": "666-archipelago", "666-9": "666-archipelago",
  "666-high-plains": "666-high-plains", "666-high_plains": "666-high-plains", "666-10": "666-high-plains",
  "666-sandstorm": "666-sandstorm", "666-11": "666-sandstorm",
  "666-river": "666-river", "666-12": "666-river",
  "666-monsoon": "666-monsoon", "666-13": "666-monsoon",
  "666-savanna": "666-savanna", "666-14": "666-savanna",
  "666-sun": "666-sun", "666-15": "666-sun",
  "666-ocean": "666-ocean", "666-16": "666-ocean",
  "666-jungle": "666-jungle", "666-17": "666-jungle",
  "666-fancy": "666-fancy", "666-18": "666-fancy",
  "666-poke-ball": "666-poke-ball", "666-poke_ball": "666-poke-ball", "666-pokeball": "666-poke-ball", "666-19": "666-poke-ball",
  "037-alola": 10103, "038-alola": 10104, "050-alola": 10105, "051-alola": 10106,
  "052-alola": 10107, "053-alola": 10108, "074-alola": 10109, "075-alola": 10110,
  "076-alola": 10111, "088-alola": 10112, "089-alola": 10113, "103-alola": 10114,
  "052-galar": 10161, "079-galar": 10164, "080-galar": 10165, "083-galar": 10166, "110-galar": 10167,
  "144-galar": 10169, "145-galar": 10170, "146-galar": 10171, "199-galar": 10172,
  // --- Legend / Form Specific ---
  "479-heat": 10008, "479-wash": 10009, "479-frost": 10010, "479-fan": 10011, "479-mow": 10012,
  "483-origin": 10245, "484-origin": 10246, "487-origin": 10007,
  "492-sky": 10006,
  "646-black": 10022, "646-white": 10023,
  "647-resolute": 10024,
  "648-pirouette": 10018,
  "720-unbound": 10086,
  "800-dusk": 10155, "800-dawn": 10156, "800-dusk-mane": 10155, "800-dawn-wings": 10156,
  "801-original": 10147, "801-original-color": 10147, "801-original_color": 10147, "801-1": 10147,
  "741-baile": 741, "741-0": 741,
  "741-pom": 10123, "741-pompom": 10123, "741-1": 10123,
  "741-pau": 10124, "741-2": 10124,
  "741-sensu": 10125, "741-3": 10125,
  "745-midday": 745, "745-0": 745,
  "745-midnight": 10126, "745-1": 10126,
  "745-dusk": 10152, "745-2": 10152,
  "744-dusk": 10151, "744-1": 10151,
  "849-low-key": 10184, "849-loukey": 10184, "849-1": 10184, "849-jolly": 849, "849-0": 849,
  "875-noice": 10185, "875-noice-face": 10185, "877-hangry": 10187,
  "892-single-strike": 892, "892-rapid-strike": 10191, "892-0": 892, "892-1": 10191,
  "658-1": 10117, "658-ash": 10117, "658-battle-bond": 10117,
  "898-ice": 10193, "898-shadow": 10194,
  "888-crowned": 10188, "889-crowned": 10189,
  "876-female": 10186, "876-1": 10186,
  "774-c_red": 10136, "774-c_orange": 10137, "774-c_yellow": 10138, "774-c_green": 10139, "774-c_blue": 10140, "774-c_indigo": 10141, "774-c_violet": 10142,

  // --- Common Form Differences ---
  "550-blue-striped": 10016, "550-blue_striped": 10016, "550-blue": 10016, "550-1": 10016, 
  "550-white-striped": 10247, "550-white_striped": 10247, "550-white": 10247, "550-2": 10247,
  "422-east": "422-east", "423-east": "423-east",
  "585-summer": "585-summer", "585-autumn": "585-autumn", "585-winter": "585-winter", "585-1": "585-summer", "585-2": "585-autumn", "585-3": "585-winter",
  "586-summer": "586-summer", "586-autumn": "586-autumn", "586-winter": "586-winter", "586-1": "586-summer", "586-2": "586-autumn", "586-3": "586-winter",
  "669-yellow": "669-yellow", "669-orange": "669-orange", "669-white": "669-white", "669-blue": "669-blue",
  "670-yellow": "670-yellow", "670-orange": "670-orange", "670-white": "670-white", "670-blue": "670-blue",
  "671-yellow": "671-yellow", "671-orange": "671-orange", "671-white": "671-white", "671-blue": "671-blue",

  // --- Pikachu Caps ---
  "025-1": 10094, "025-original-cap": 10094, "025-original": 10094,
  "025-2": 10095, "025-hoenn-cap": 10095, "025-hoenn": 10095,
  "025-3": 10096, "025-sinnoh-cap": 10096, "025-sinnoh": 10096,
  "025-4": 10097, "025-unova-cap": 10097, "025-unova": 10097,
  "025-5": 10098, "025-kalos-cap": 10098, "025-kalos": 10098,
  "025-6": 10099, "025-alola-cap": 10099, "025-alola": 10099,
  "025-7": 10148, "025-partner-cap": 10148, "025-partner": 10148,
  "025-8": 10160, "025-world-cap": 10160, "025-world": 10160
};

// --- 追加: 公式フォールバック種 (Frigibax / Arctibax / Baxcalibur)
const OFFICIAL_FALLBACK_SPECIES = {
  996: {
    id: 996,
    species: 996,
    jpn: 'セビエ',
    eng: 'Frigibax',
    ability_a: 'thermal-exchange',
    ability_h: 'ice-body',
    gender_rate: 4,
    moves: 'tackle,leer,powder-snow,bite,dragon-breath,ice-fang,dragon-tail,crunch,dragon-claw,icicle-crash',
    balls: '1'
  },
  997: {
    id: 997,
    species: 997,
    jpn: 'セゴール',
    eng: 'Arctibax',
    ability_a: 'thermal-exchange',
    ability_h: 'ice-body',
    gender_rate: 4,
    moves: 'tackle,leer,powder-snow,bite,dragon-breath,ice-fang,dragon-tail,crunch,dragon-claw,icicle-crash',
    balls: '1'
  },
  998: {
    id: 998,
    species: 998,
    jpn: 'セグレイブ',
    eng: 'Baxcalibur',
    ability_a: 'thermal-exchange',
    ability_h: 'ice-body',
    gender_rate: 4,
    moves: 'tackle,leer,powder-snow,bite,dragon-breath,ice-fang,dragon-tail,crunch,dragon-claw,icicle-crash,glaive-rush',
    balls: '1'
  }
};

function ensureSpeciesFallbackList(list) {
  Object.values(OFFICIAL_FALLBACK_SPECIES).forEach(p => {
    const exists = list.some(x => parseInt(x.species) === p.species);
    if (!exists) list.push({ ...p });
  });
  return list;
}

function isPikachuCap(p) {
  if (!p || parseInt(p.species) !== 25) return false;
  const type = String(p.form_type || '').toLowerCase();
  const form = parseInt(p.form || 0);
  return type.includes('cap') || type.includes('world') || type.includes('partner') || (form >= 1 && form <= 10);
}

// (remaining file unchanged)
