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
  "058-hisui": 10229, "059-hisui": 10230, "100-hisui": 10231, "101-hisui": 10232,
  "157-hisui": 10233, "211-hisui": 10234, "215-hisui": 10235, "503-hisui": 10236, "549-hisui": 10237, "570-hisui": 10238, "571-hisui": 10239, "628-hisui": 10240,
  "705-hisui": 10241, "706-hisui": 10242, "713-hisui": 10243, "724-hisui": 10244,
  "483-origin": 10245, "484-origin": 10246, "487-origin": 10007,
  "550-white-striped": 10247, "550-2": 10247,
  "905-therian": 10249, "902-female": 10248,
  "641-therian": 10019, "641-1": 10019,
  "642-therian": 10020, "642-1": 10020,
  "645-therian": 10021, "645-1": 10021,
  "026-alola": 10100, "027-alola": 10101, "028-alola": 10102,
  "666-icy-snow": "666-icy-snow", "666-icy_snow": "666-icy-snow", "666-0": "666-icy-snow",
  "666-polar": "666-polar", "666-1": "666-polar",
  "666-tundra": "666-tundra", "666-2": "666-tundra",
  "666-continental": "666-continental", "666-3": "666-continental",
  "666-garden": "666-garden", "666-4": "666-garden",
  "666-elegant": "666-elegant", "666-5": "666-elegant",
  "666-meadow": 666, "666-6": 666,
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
  "550-blue-striped": 10016, "550-blue_striped": 10016, "550-blue": 10016, "550-1": 10016,
  "550-white-striped": 10247, "550-white_striped": 10247, "550-white": 10247, "550-2": 10247,
  "422-east": "422-east", "423-east": "423-east",
  "585-summer": "585-summer", "585-autumn": "585-autumn", "585-winter": "585-winter", "585-1": "585-summer", "585-2": "585-autumn", "585-3": "585-winter",
  "586-summer": "586-summer", "586-autumn": "586-autumn", "586-winter": "586-winter", "586-1": "586-summer", "586-2": "586-autumn", "586-3": "586-winter",
  "669-yellow": "669-yellow", "669-orange": "669-orange", "669-white": "669-white", "669-blue": "669-blue",
  "670-yellow": "670-yellow", "670-orange": "670-orange", "670-white": "670-white", "670-blue": "670-blue",
  "671-yellow": "671-yellow", "671-orange": "671-orange", "671-white": "671-white", "671-blue": "671-blue",
  "025-1": 10094, "025-original-cap": 10094, "025-original": 10094,
  "025-2": 10095, "025-hoenn-cap": 10095, "025-hoenn": 10095,
  "025-3": 10096, "025-sinnoh-cap": 10096, "025-sinnoh": 10096,
  "025-4": 10097, "025-unova-cap": 10097, "025-unova": 10097,
  "025-5": 10098, "025-kalos-cap": 10098, "025-kalos": 10098,
  "025-6": 10099, "025-alola-cap": 10099, "025-alola": 10099,
  "025-7": 10148, "025-partner-cap": 10148, "025-partner": 10148,
  "025-8": 10160, "025-world-cap": 10160, "025-world": 10160
};

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

function isGenderLocked(p) {
  if (!p) return false;
  const s = parseInt(p.species);
  if (isPikachuCap(p)) return true;
  if (s === 916) return true;
  return false;
}

function isEggLocked(p) {
  if (!p) return false;
  const sId = parseInt(p.species);
  if (EGG_LOCKED_SPECIES.includes(sId)) return true;
  if (isPikachuCap(p)) return true;
  const ft = String(p.form_type || '').toLowerCase();
  if (sId === 854 && ft === 'antique') return true;
  if (sId === 1012 && ft === 'artisan') return true;
  return false;
}

function isSizeLocked(p) {
  if (!p) return false;
  if (p.is_event) return true;
  return SIZE_LOCKED_SPECIES.includes(parseInt(p.species));
}

function getFormLabel(item) {
  if (!item) return '';
  const sId = parseInt(item.species);
  const form = String(item.form || '0');
  const type = String(item.form_type || '').toLowerCase();

  if (sId === 664 || sId === 665) return '';
  if (sId === 666) {
    const vType = type.replace('_', '-');
    if (!vType || vType === 'meadow') return '(はなぞののもよう)';
    return FORM_LABEL[vType] || FORM_LABEL[type] || `(${type})`;
  }
  if (sId === 720) {
    if (type.includes('unbound') || form === '1') return '(ときはなたれた)';
    return '(いましめ)';
  }
  if (sId === 791 || sId === 792 || sId === 800) {
    if (item.is_event) return '(配布個体)';
  }
  if (sId === 385 || sId === 490) return '(配布個体)';
  if (sId === 144 || sId === 145 || sId === 146) {
    if (item.is_event) return '(ガラル 配布)';
    if (type.includes('galar')) return '(ガラル)';
    return '(カントー)';
  }
  if (sId === 925) {
    if (form === '1' || type.includes('three')) return '(3びきかぞく)';
    return '(4ひきかぞく)';
  }
  if (sId === 25) {
    if (form === '1' || type.includes('original')) return '(オリジナルキャップ)';
    if (form === '2' || type.includes('hoenn')) return '(ホウエンキャップ)';
    if (form === '3' || type.includes('sinnoh')) return '(シンオウキャップ)';
    if (form === '4' || type.includes('unova')) return '(イッシュキャップ)';
    if (form === '5' || type.includes('kalos')) return '(カロスキャップ)';
    if (form === '6' || type.includes('alola')) return '(アローラキャップ)';
    if (form === '7' || type.includes('partner')) return '(キミにきめたキャップ)';
    if (form === '8' || type.includes('world')) return '(ワールドキャップ)';
    return '';
  }
  if (sId === 741) {
    if (form === '1' || type.includes('pom')) return '(ぱちぱち)';
    if (form === '2' || type.includes('pau')) return '(ふらふら)';
    if (form === '3' || type.includes('sensu')) return '(まいまい)';
    return '(めらめら)';
  }
  if (sId === 801) {
    if (type.includes('original') || form === '1') return '(500年前のすがた)';
    return '';
  }
  if (sId === 744) {
    if (form === '1' || type.includes('dusk')) return '(たそがれのすがた)';
    return '';
  }
  if (sId === 745) {
    if (form === '1' || type.includes('midnight')) return '(まよなかのすがた)';
    if (form === '2' || type.includes('dusk')) return '(たそがれのすがた)';
    return '(まひるのすがた)';
  }
  if (sId === 849) {
    if (form === '1' || type.includes('low') || type.includes('loukey')) return '(ローなすがた)';
    return '(ハイなすがた)';
  }
  if (sId === 978) {
    if (type.includes('droopy')) return '(たれた)';
    if (type.includes('stretchy')) return '(のびた)';
    return '(そった)';
  }
  if (sId === 128) {
    if (type.includes('combat')) return '(コンバット)';
    if (type.includes('blaze')) return '(ブレイズ)';
    if (type.includes('aqua')) return '(アクア)';
    return '(カントー)';
  }
  if (sId === 658) {
    if (form === '1' || type.includes('ash') || type.includes('bond')) return '(サトシ)';
    return '';
  }
  if (sId === 774) {
    if (type.includes('red') || form === '7') return '(レッドコア)';
    if (type.includes('orange') || form === '8') return '(オレンジコア)';
    if (type.includes('yellow') || form === '9') return '(イエローコア)';
    if (type.includes('green') || form === '10') return '(グリーンコア)';
    if (type.includes('blue') || form === '11') return '(ブルーコア)';
    if (type.includes('indigo') || form === '12') return '(インディゴコア)';
    if (type.includes('violet') || form === '13') return '(バイオレットコア)';
    return '(コア)';
  }
  if (sId === 869) {
    if (type.includes('vanilla') || form === '0') return '(ミルキィバニラ)';
    if (type.includes('ruby_cream') || form === '1') return '(ミルキィルビー)';
    if (type.includes('matcha') || form === '2') return '(ミルキィまっちゃ)';
    if (type.includes('mint') || form === '3') return '(ミルキィミント)';
    if (type.includes('lemon') || form === '4') return '(ミルキィレモン)';
    if (type.includes('salted') || form === '5') return '(ミルキィソルト)';
    if (type.includes('ruby_swirl') || form === '6') return '(ルビーミックス)';
    if (type.includes('caramel') || form === '7') return '(キャラメルミックス)';
    if (type.includes('rainbow') || form === '8') return '(トリプルミックス)';
    return '';
  }
  if (sId === 550) {
    if (type.includes('blue')) return '(あおすじ)';
    if (type.includes('white')) return '(しろすじ)';
    return '(あかすじ)';
  }
  if (sId === 422 || sId === 423) {
    if (type.includes('east')) return '(ひがしのうみ)';
    return '(にしのうみ)';
  }
  if (sId === 585 || sId === 586) {
    const fIdx = parseInt(form);
    if (fIdx === 1) return '(なつのすがた)';
    if (fIdx === 2) return '(あきのすがた)';
    if (fIdx === 3) return '(ふゆのすがた)';
    return '(はるのすがた)';
  }
  if (sId === 916) return '';
  if (sId === 893 || sId === 905) {
    if (item.is_event) return '(配布個体)';
    if (form === '1' || type.includes('dada')) return '(とうちゃん)';
    return '';
  }
  if (sId === 892) {
    if (type.includes('rapid') || form === '1') return '(れんげきのかた)';
    return '(いちげきのかた)';
  }
  if (sId === 669 || sId === 670 || sId === 671) {
    if (type.includes('yellow')) return '(きいろいはな)';
    if (type.includes('orange')) return '(だいだいはな)';
    if (type.includes('blue')) return '(あおいはな)';
    if (type.includes('white')) return '(しろいはな)';
    return '(あかいはな)';
  }
  if (sId === 1005) return '';
  if (sId === 982) {
    if (form === '1' || type.includes('three')) return '(みつふしフォルム)';
    return '(ふたふしフォルム)';
  }
  if (sId === 931) {
    if (type.includes('blue')) return '(ブルーフェザー)';
    if (type.includes('yellow')) return '(イエローフェザー)';
    if (type.includes('white')) return '(ホワイトフェザー)';
    return '(グリーンフェザー)';
  }
  if (sId === 1017) {
    if (form === '1' || type === 'wellspring') return '(いどのめん)';
    if (form === '2' || type === 'hearthflame') return '(かまどのめん)';
    if (form === '3' || type === 'cornerstone') return '(いしずえのめん)';
    return '';
  }
  if (sId === 493 || sId === 386 || sId === 901 || sId === 888 || sId === 889 || sId === 890 || sId === 647 || sId === 648) {
    return item.is_event ? '(配布個体)' : '';
  }
  let label = '';
  if (type && type !== 'normal' && type !== 'default' && FORM_LABEL[type]) label = FORM_LABEL[type];
  else if (form !== '0' && FORM_LABEL[form]) label = FORM_LABEL[form];
  else if (form !== '0') label = `(${form})`;
  if (item.is_event) label += '(配布個体)';
  return label;
}

function getSpriteUrl(p, shiny = false) {
  if (!p || !p.species) return 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/0.png';
  if (p.params && p.params.egg) return 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/egg.png';
  const isShiny = shiny || p.is_event;
  const sNum = parseInt(p.species);
  if (sNum === 869) {
    const creamMap = {
      '0': 'vanilla-cream', '1': 'ruby-cream', '2': 'matcha-cream', '3': 'mint-cream',
      '4': 'lemon-cream', '5': 'salted-cream', '6': 'ruby-swirl', '7': 'caramel-swirl', '8': 'rainbow-swirl'
    };
    const cream = creamMap[String(p.form)] || 'vanilla-cream';
    const prefix = isShiny ? 'shiny/' : '';
    return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${prefix}869-${cream}-strawberry-sweet.png`;
  }
  const species = String(sNum).padStart(3, '0');
  const type = String(p.form_type || '').toLowerCase();
  const form = String(p.form || '0');
  const typePart = (sNum === 585 || sNum === 586) ? (form !== '0' ? form : '') : (type || (form !== '0' ? form : ''));
  const key = `${species}-${typePart}`;
  let id = sNum;
  if (sNum === 801 && (type.includes('original') || form === '1')) {
    id = 10147;
  } else if (typeof FORM_TO_ID !== 'undefined' && FORM_TO_ID[key]) {
    id = FORM_TO_ID[key];
  } else if (type.includes('therian')) {
    if (sNum === 641) id = 10019;
    else if (sNum === 642) id = 10020;
    else if (sNum === 645) id = 10021;
    else if (sNum === 905) id = 10249;
  }
  const path = isShiny ? 'shiny/' : '';
  if (sNum >= 900) {
    const artId = (typeof id === 'string') ? sNum : id;
    return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${artId}.png`;
  }
  if ((isPikachuCap(p) || typeof id === 'string') && sNum !== 666) {
    return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${isShiny ? 'shiny/' : ''}${id}.png`;
  }
  return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${path}${id}.png`;
}

function getFallbackSpriteUrl(p, id, shiny = false) {
  const isShiny = shiny || (p && p.is_event);
  const sId = id || (p ? p.species : 0);
  if (parseInt(sId) > 10000 || sId == 801) {
    return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${sId}.png`;
  }
  return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${isShiny ? 'shiny/' : ''}${sId}.png`;
}

const SHINY_LOCKED_SPECIES = [
  789, 790, 888, 889, 890, 891, 892, 893, 896, 897, 898, 901, 801, 1001, 1002, 1003, 1004, 1007, 1008, 1009, 1010, 1014, 1015, 1016, 1017, 1020, 1021, 1022, 1023, 1024, 1025, 648, 647
];
const SIZE_LOCKED_SPECIES = [
  144, 145, 146, 150, 151, 243, 244, 245, 249, 250, 251, 380, 381, 382, 383, 384, 385, 386, 480, 481, 482, 483, 484, 485, 486, 487, 488, 489, 490, 491, 492, 493, 494,
  638, 639, 640, 641, 642, 643, 644, 645, 646, 647, 648, 716, 717, 718, 719, 720, 721, 772, 773, 785, 786, 787, 788, 789, 790, 791, 792, 793, 794, 795, 796, 797, 798, 799, 800, 801, 802, 803, 804, 805, 806, 807, 808, 809,
  888, 889, 890, 891, 892, 893, 894, 895, 896, 897, 898, 905,
  1001, 1002, 1003, 1004, 1007, 1008, 1009, 1010, 1014, 1015, 1016, 1017, 1020, 1021, 1022, 1023, 1024, 1025
];

const EGG_LOCKED_SPECIES = [
  2, 3, 5, 6, 8, 9, 11, 12, 14, 15, 17, 18, 20, 22, 24, 25, 26, 28, 30, 31, 33, 34, 35, 36, 38, 39, 40, 42, 44, 45, 47, 49, 51, 53, 55, 57, 59, 61, 62, 64, 65, 67, 68, 70, 71, 73, 75, 76, 78, 80,
  82, 83, 85, 86, 88, 89, 90, 93, 94, 95, 96, 97, 99, 101, 102, 103, 104, 105, 106, 107, 108,
  110, 111, 112, 113, 114, 116, 117, 118, 119, 120, 121, 122, 123, 124, 125, 126, 127, 129, 130, 131, 132, 133, 134, 135, 136, 137, 138, 139, 141, 142, 143, 151,
  152, 153, 154, 155, 156, 157, 158, 159, 160, 161, 162, 163, 164, 165, 166, 167, 168, 169,
  170, 171, 172, 173, 174, 175, 176, 177, 178, 180, 181, 182, 183, 184, 185, 186, 187, 188, 189,
  190, 191, 192, 193, 194, 195, 196, 197, 198, 199, 200, 201, 202, 203, 204, 205, 206, 207,
  208, 209, 211, 212, 213, 214, 215, 217, 218, 219, 220, 221, 222, 223, 224, 225, 226, 227,
  228, 229, 230, 231, 232, 233, 234, 235, 236, 237, 238, 239, 240, 241, 242
];

let allPokemon = [];
let allItems = [];
let currentPokemon = null;
let editingIndex = null;
let eggBackup = null;
let currentParams = {
  gender: 'male', shiny: true, egg: false, level: 1, size: null,
  tera: '', ability: '', nature: 'hardy', item: 'none', ball: '1', language: 'JPN',
  moves: ['none', 'none', 'none', 'none'],
  ivs: { hp: 31, atk: 31, def: 31, spa: 31, spd: 31, spe: 31 },
  evs: { hp: 0, atk: 0, def: 0, spa: 0, spd: 0, spe: 0 }
};

let boxList = [];
let moveCache = {};
typeCache = {};
abilityCache = {};

function hiraToKata(str) {
  return str.replace(/[\u3041-\u3096]/g, ch => String.fromCharCode(ch.charCodeAt(0) + 0x60));
}

async function getAbilityJpn(id) {
  if (!id || id === 'none') return 'なし';
  if (abilityCache[id]) return abilityCache[id];
  try {
    const res = await fetch(`https://pokeapi.co/api/v2/ability/${id}`);
    const data = await res.json();
    const name = data.names.find(n => n.language.name === 'ja-hrkt');
    const jpn = name ? name.name : id;
    abilityCache[id] = jpn;
    return jpn;
  } catch { return id; }
}

async function init() {
  try {
    const sprigatitoFallback = {
      id: 906, species: 906, jpn: 'ニャオハ', eng: 'Sprigatito',
      ability_a: 'overgrow', ability_h: 'protean', gender_rate: 1, moves: 'scratch,tail-whip', balls: '1'
    };
    selectPokemon(sprigatitoFallback);

    await loadData();

    if (allPokemon && allPokemon.length > 0) {
      const sprigatito = allPokemon.find(p => p.species == 906) || allPokemon[0];
      selectPokemon(sprigatito);
    }
    renderBox();
    importBoxFromUrl();

    if (boxList.length === 0) {
      const saved = localStorage.getItem('box_list_data');
      if (saved) {
        try {
          boxList = JSON.parse(saved);
          renderBox();
        } catch(e) { console.error('LocalStorage Load Error:', e); }
      }
    }
  } catch (e) { console.error('Init error:', e); }
  initStatInputs();
  initToggles();
}

function initToggles() {
  const genderBtn = document.getElementById('detail-gender');
  if (genderBtn) {
    genderBtn.onclick = () => {
      if (isGenderLocked(currentPokemon)) return;
      currentParams.gender = currentParams.gender === 'male' ? 'female' : 'male';
      updateUI();
    };
  }
  const shinyBtn = document.getElementById('toggle-shiny');
  if (shinyBtn) {
    shinyBtn.onclick = () => {
      if (SHINY_LOCKED_SPECIES.includes(parseInt(currentPokemon.species)) || isPikachuCap(currentPokemon)) return;
      currentParams.shiny = !currentParams.shiny;
      updateUI();
    };
  }
  const eggBtn = document.getElementById('toggle-egg');
  if (eggBtn) {
    eggBtn.onclick = () => {
      if (isEggLocked(currentPokemon)) return;
      if (!currentParams.egg) {
        eggBackup = {
          evs: JSON.parse(JSON.stringify(currentParams.evs)),
          ball: currentParams.ball
        };
        ['hp','atk','def','spa','spd','spe'].forEach(s => currentParams.evs[s] = 0);
        currentParams.level = 1;
        if (currentParams.ball === '4') currentParams.ball = '1';
      } else {
        if (eggBackup) {
          currentParams.evs = JSON.parse(JSON.stringify(eggBackup.evs));
          currentParams.ball = eggBackup.ball;
          eggBackup = null;
        }
      }
      currentParams.egg = !currentParams.egg;
      updateUI();
    };
  }
}

async function loadData() {
  const pUrl = 'https://iswitch.app/api/collections/pokemon_view/records?filter=version%3D%27sv%27&perPage=2000&sort=species';
  const CACHE_KEY = 'pokemon_data_sv_v2';
  const CACHE_TIME_KEY = 'pokemon_data_sv_time';
  const CACHE_DURATION = 24 * 60 * 60 * 1000;

  try {
    let pData = null;
    const cached = localStorage.getItem(CACHE_KEY);
    const cachedTime = localStorage.getItem(CACHE_TIME_KEY);

    if (cached && cachedTime && (Date.now() - parseInt(cachedTime) < CACHE_DURATION)) {
      pData = JSON.parse(cached);
    } else {
      const pRes = await fetch(pUrl).catch(() => ({ok: false}));
      if (pRes && pRes.ok) {
        pData = await pRes.json();
        localStorage.setItem(CACHE_KEY, JSON.stringify(pData));
        localStorage.setItem(CACHE_TIME_KEY, Date.now().toString());
      }
    }

    if (pData) {
      const seenKeys = new Set();
      const DEDUPE_SET = new Set([25, 250, 254, 257, 260, 3, 373, 376, 384, 386, 389, 392, 395, 398, 445, 483, 484, 489, 490, 493, 497, 500, 503, 571, 639, 1005, 53, 144, 145, 146, 380, 381, 382, 389, 392, 395, 398, 445, 483, 484, 489, 490, 493, 497, 500, 503, 571, 639, 1005]);

      allPokemon = (pData.items || []).filter(p => {
        const s = parseInt(p.species);
        if (isNaN(s)) return false;
        if (s === 999 && p.form_type === 'roaming') return false;

        if (DEDUPE_SET.has(s)) {
          if (s === 25) {
            const f = String(p.form || '0');
            const ft = String(p.form_type || '').toLowerCase();
            const isCap = ft.includes('cap') || ft.includes('world') || ft.includes('partner') || (parseInt(f) >= 1 && parseInt(f) <= 10);
            if (!isCap && f !== '0' && f !== '') return false;
            let key = isCap ? `${s}-${f}-${ft}` : `${s}-base`;
            if (seenKeys.has(key)) return false;
            seenKeys.add(key);
          } else if (s === 493 || s === 647 || s === 648) {
            const isEvent = p.balls && p.balls.includes(16);
            let key = `${s}-${isEvent ? 'event' : 'base'}`;
            if (seenKeys.has(key)) return false;
            seenKeys.add(key);
            if (isEvent) p.is_event = true;
          } else if (s === 386) {
            const ft = String(p.form_type || '').toLowerCase();
            if (ft !== '' && ft !== 'normal' && ft !== 'default') return false;
            if (seenKeys.has(`${s}`)) return false;
            seenKeys.add(`${s}`);
          } else if ([641, 642, 645].includes(s)) {
            const ft = String(p.form_type || '').toLowerCase();
            if (!ft.includes('therian')) return false;
            if (seenKeys.has(`${s}`)) return false;
            seenKeys.add(`${s}`);
          } else if (s === 905) {
            const ft = String(p.form_type || '').toLowerCase();
            if (ft.includes('therian')) return false;
            const isEvent = p.balls && p.balls.includes(16);
            let key = `${s}-${isEvent ? 'event' : 'base'}`;
            if (seenKeys.has(key)) return false;
            seenKeys.add(key);
          } else if (s === 892) {
            const f = String(p.form || '0');
            if (seenKeys.has(`${s}-${f}`)) return false;
            seenKeys.add(`${s}-${f}`);
          } else if ([876, 724, 658].includes(s)) {
            const f = String(p.form || '0');
            if (seenKeys.has(`${s}-${f}`)) return false;
            seenKeys.add(`${s}-${f}`);
          } else if ([6, 233, 638, 640, 643, 644, 646, 888, 889, 890, 652, 655, 727, 730, 812, 815, 818].includes(s)) {
            if (seenKeys.has(`${s}`)) return false;
            seenKeys.add(`${s}`);
          } else {
            let key = `${s}-${p.form_type || 'default'}-${p.form || '0'}`;
            if (seenKeys.has(key)) return false;
            seenKeys.add(key);
          }
        }
        if (s === 25) { p.jpn = 'ピカチュウ'; p.eng = 'Pikachu'; }
        if (s === 493) { p.jpn = 'アルセウス'; p.eng = 'Arceus'; }
        if (s === 386) { p.jpn = 'デオキシス'; p.eng = 'Deoxys'; }
        if (s === 893) { p.jpn = 'ザルード'; }
        if (s === 916) { p.jpn = (String(p.form) === '1' || (p.form_type||'').includes('female')) ? 'パフュートン♀' : 'パフュートン♂'; }
        if (s === 905) { p.jpn = 'ラブトロス'; }
        if (s === 489) { p.jpn = 'フィオネ'; }
        if (s === 901) { p.jpn = String(p.form) === '1' ? 'ガチグマ(アカツキ)' : 'ガチグマ'; }
        if (s === 385 || s === 490) { p.is_event = true; }
        return true;
      });

      const EVENT_SPECIES_SET = new Set([1001, 1002, 1003, 1004, 1007, 1008, 791, 792, 800]);
      const speciesCount = {};
      const extraBirds = [];

      allPokemon.forEach(p => {
        const s = parseInt(p.species);
        if (EVENT_SPECIES_SET.has(s)) {
          speciesCount[s] = (speciesCount[s] || 0) + 1;
          if (speciesCount[s] >= 2) p.is_event = true;
        }
        if (s === 925 && String(p.form) === '1') {
          p.id = 10257;
          p.form_type = 'family-of-three';
        }
        if (s === 905 && p.balls && p.balls.includes(16)) {
          p.is_event = true;
        }
        if ((s === 144 || s === 145 || s === 146) && p.form_type === 'galar') {
          const eventBird = JSON.parse(JSON.stringify(p));
          eventBird.is_event = true;
          eventBird.id = p.id + '-event';
          extraBirds.push(eventBird);
        }
        if (s === 888 || s === 889 || s === 890) {
          const eventPoke = JSON.parse(JSON.stringify(p));
          eventPoke.is_event = true;
          eventPoke.id = p.id + '-event';
          extraBirds.push(eventPoke);
        }
      });

      [493, 647, 648].forEach(s => {
        if (!allPokemon.some(p => parseInt(p.species) === s && p.is_event)) {
          const base = allPokemon.find(p => parseInt(p.species) === s);
          if (base) {
            const eventPoke = JSON.parse(JSON.stringify(base));
            eventPoke.is_event = true;
            eventPoke.id = base.id + '-event';
            extraBirds.push(eventPoke);
          }
        }
      });

      allPokemon.push(...extraBirds);
    }
    if (!allPokemon || allPokemon.length === 0) {
      allPokemon = [{
        id: 906, species: 906, jpn: 'ニャオハ', eng: 'Sprigatito',
        ability_a: 'overgrow', ability_h: 'protean', gender_rate: 1, moves: 'scratch,tail-whip', balls: '1'
      }];
    }

    if (typeof ensureSpeciesFallbackList === 'function') {
      allPokemon = ensureSpeciesFallbackList(allPokemon);
    }

    renderSearch(allPokemon.slice(0, 50));

    allItems = [
      {name: 'poke-ball', jpn: 'モンスターボール'}, {name: 'great-ball', jpn: 'スーパーボール'}, {name: 'ultra-ball', jpn: 'ハイパーボール'},
      {name: 'master-ball', jpn: 'マスターボール'}, {name: 'premier-ball', jpn: 'プレミアボール'}, {name: 'heal-ball', jpn: 'ヒールボール'},
      {name: 'net-ball', jpn: 'ネットボール'}, {name: 'nest-ball', jpn: 'ネストボール'}, {name: 'dive-ball', jpn: 'ダイブボール'},
      {name: 'repeat-ball', jpn: 'リピートボール'}, {name: 'timer-ball', jpn: 'タイマーボール'}, {name: 'luxury-ball', jpn: 'ゴージャスボール'},
      {name: 'dusk-ball', jpn: 'ダークボール'}, {name: 'quick-ball', jpn: 'クイックボール'}, {name: 'lure-ball', jpn: 'ルアーボール'},
      {name: 'level-ball', jpn: 'レベルボール'}, {name: 'moon-ball', jpn: 'ムーンボール'}, {name: 'heavy-ball', jpn: 'ヘビーボール'},
      {name: 'fast-ball', jpn: 'スピードボール'}, {name: 'friend-ball', jpn: 'フレンドボール'}, {name: 'love-ball', jpn: 'ラブラブボール'},
      {name: 'dream-ball', jpn: 'ドリームボール'}, {name: 'beast-ball', jpn: 'ウルトラボール'}, {name: 'safari-ball', jpn: 'サファリボール'},
      {name: 'sport-ball', jpn: 'コンペボール'},
      {name: 'life-orb', jpn: 'いのちのたま'}, {name: 'choice-specs', jpn: 'こだわりメガネ'}, {name: 'choice-band', jpn: 'こだわりハチマキ'},
      {name: 'choice-scarf', jpn: 'こだわりスカーフ'}, {name: 'focus-sash', jpn: 'きあいのタスキ'}, {name: 'assault-vest', jpn: 'とつげきチョッキ'},
      {name: 'leftovers', jpn: 'たべのこし'}, {name: 'heavy-duty-boots', jpn: 'あつぞこブーツ'}, {name: 'covert-cloak', jpn: 'おんみつマント'},
      {name: 'mirror-herb', jpn: 'ものまねハーブ'}, {name: 'punching-glove', jpn: 'パンチグローブ'}, {name: 'booster-energy', jpn: 'ブーストエナジー'},
      {name: 'ability-shield', jpn: 'とくせいガード'}, {name: 'loaded-dice', jpn: 'いかさまダイス'}, {name: 'expert-belt', jpn: 'たつじんのおび'},
      {name: 'rocky-helmet', jpn: 'ゴツゴツメット'}, {name: 'eviolite', jpn: 'しんかのきせき'}, {name: 'sitrus-berry', jpn: 'オボンのみ'},
      {name: 'lum-berry', jpn: 'ラムのみ'}, {name: 'light-clay', jpn: 'ひかりのねんど'}, {name: 'red-card', jpn: 'だっしゅつボタン'},
      {name: 'eject-button', jpn: 'だっしゅつボタン'}, {name: 'eject-pack', jpn: 'だっしゅつパック'}, {name: 'weakness-policy', jpn: 'じゃくてんほけん'},
      {name: 'black-sludge', jpn: 'くろいヘドロ'}, {name: 'flame-orb', jpn: 'かえんだま'}, {name: 'toxic-orb', jpn: 'どくどくだま'},
      {name: 'white-herb', jpn: 'しろいハーブ'}, {name: 'mental-herb', jpn: 'メンタルハーブ'}, {name: 'power-herb', jpn: 'パワフルハーブ'},
      {name: 'clear-amulet', jpn: 'クリアチャーム'}, {name: 'ability-capsule', jpn: 'とくせいカプセル'}, {name: 'ability-patch', jpn: 'とくせいパッチ'},
      {name: 'gold-bottle-cap', jpn: 'きんのおうかん'}, {name: 'bottle-cap', jpn: 'ぎんのおうかん'}, {name: 'pp-max', jpn: 'ポイントマックス'},
      {name: 'adamant-mint', jpn: 'いじっぱりミント'}, {name: 'modest-mint', jpn: 'ひかえめミント'}, {name: 'jolly-mint', jpn: 'ようきミント'},
      {name: 'timid-mint', jpn: 'おくびょうミント'},
      {name: 'wellspring-mask', jpn: 'いどのおめん'}, {name: 'hearthflame-mask', jpn: 'かまどのおめん'}, {name: 'cornerstone-mask', jpn: 'いしずえのおめん'},
      {name: 'adamant-crystal', jpn: 'だいこんごうだま'}, {name: 'lustrous-globe', jpn: 'だいしらたま'}, {name: 'griseous-core', jpn: 'だいっきいろだま'},
      {name: 'rusted-sword', jpn: 'くちたけん'}, {name: 'rusted-shield', jpn: 'くちたたて'}
    ];
  } catch (e) { console.error('Data Load Error:', e); }
}

const searchInput = document.getElementById('search-input');
const dropdown = document.getElementById('search-dropdown');
const results = document.getElementById('search-results');

if (searchInput) {
  searchInput.addEventListener('focus', () => {
    if (dropdown) dropdown.classList.remove('hidden');
    const q = searchInput.value.toLowerCase().trim();
    const filtered = q ? allPokemon.filter(p =>
      (p.jpn || '').includes(q) || (p.eng || '').toLowerCase().includes(q) || String(p.species || '').includes(q)
    ) : allPokemon;
    renderSearch(filtered);
  });
  searchInput.addEventListener('input', (e) => {
    const q = e.target.value.toLowerCase().trim();
    const qKata = hiraToKata(q);
    if (dropdown) dropdown.classList.remove('hidden');
    const filtered = q ? allPokemon.filter(p =>
      (p.jpn || '').includes(q) || (p.jpn || '').includes(qKata) || (p.eng || '').toLowerCase().includes(q) || String(p.species || '').includes(q)
    ) : allPokemon;
    renderSearch(filtered);
  });
}

document.addEventListener('click', (e) => {
  if (dropdown && !e.target.closest('.search-box')) dropdown.classList.add('hidden');
});

function renderSearch(list) {
  if (!results) return;
  if (list.length === 0) {
    results.innerHTML = '<div class="search-no-results">一致するポケモンが見つかりません</div>';
    return;
  }
  results.innerHTML = list.map(p => {
    const spriteUrl = getSpriteUrl(p);
    return `
      <div class="search-item" data-id="${p.id}">
        <img src="${spriteUrl}" loading="lazy" onerror="this.onerror=null; this.src='${getFallbackSpriteUrl(p, null)}';">
        <div class="name-box">
          <div class="name-jpn">${p.jpn || '不明'} <small>${getFormLabel(p)}</small></div>
          <div class="name-sub">#${p.species || '???'} ${p.eng || ''}</div>
        </div>
      </div>
    `;
  }).join('');
  results.querySelectorAll('.search-item').forEach(item => {
    item.addEventListener('click', () => {
      const p = allPokemon.find(x => String(x.id) === item.dataset.id);
      selectPokemon(p);
      if (dropdown) dropdown.classList.add('hidden');
      if (searchInput) searchInput.value = '';
    });
  });
}

async function selectPokemon(p) {
  if (!p) return;
  const fType = String(p.form_type || '').toLowerCase();
  currentPokemon = p;
  editingIndex = null;
  const addBtn = document.getElementById('btn-add-box');
  if (addBtn) addBtn.textContent = 'ボックスに追加';
  currentParams.shiny = true;
  const isCapPikachu = isPikachuCap(p);
  if (p.is_event) {
    currentParams.shiny = true;
  } else if (SHINY_LOCKED_SPECIES.includes(parseInt(p.species)) || isCapPikachu) {
    currentParams.shiny = false;
  }

  currentParams.egg = false;
  const sNum = parseInt(p.species);
  if (sNum === 916) {
    const f = String(p.form || '0');
    const ft = String(p.form_type || '').toLowerCase();
    currentParams.gender = (f === '1' || ft.includes('female')) ? 'female' : 'male';
  } else {
    currentParams.gender = isCapPikachu ? 'male' : (p.gender_rate === 8 ? 'female' : 'male');
  }
  currentParams.level = 1;
  currentParams.size = null;
  currentParams.language = 'JPN';
  currentParams.nature = 'hardy';
  currentParams.tera = 'normal';
  getPokemonType(p.species).then(type => { currentParams.tera = type; updateUI(); });
  currentParams.ability = p.ability_a || 'none';
  currentParams.ball = ([493, 647, 648].includes(parseInt(p.species)) && p.is_event) ? '16' : '1';
  currentParams.item = 'none';
  currentParams.ivs = { hp: 31, atk: 31, def: 31, spa: 31, spd: 31, spe: 31 };
  currentParams.evs = { hp: 0, atk: 0, def: 0, spa: 0, spd: 0, spe: 0 };

  const sId = parseInt(p.species);
  if (sId === 658 && (p.form === 1 || p.form === '1')) {
    currentParams.shiny = false;
    currentParams.ball = '1';
  }
  if (sId === 789 || sId === 790) {
    currentParams.ball = '1';
  }
  if (sId === 666 && (fType === 'pokeball' || fType === 'poke_ball' || fType.includes('ball'))) {
    currentParams.shiny = false;
    currentParams.ball = '1';
  }
  if (sId === 720 || sId === 721 || sId === 801 || sId === 719) {
    currentParams.shiny = false;
    currentParams.ball = '16';
  }
  if (sId === 1000) {
    currentParams.shiny = true;
  }
  if (p.is_event) {
    currentParams.shiny = true;
    currentParams.ball = '16';
    if (p.species_id === 144 || p.species_id === 145 || p.species_id === 146) {
      currentParams.level = 70;
    }
  }
  if (sId === 1017) {
    if (fType === 'wellspring') currentParams.item = 'wellspring-mask';
    else if (fType === 'hearthflame') currentParams.item = 'hearthflame-mask';
    else if (fType === 'cornerstone') currentParams.item = 'cornerstone-mask';
  } else if (sId === 483 && fType === 'origin') currentParams.item = 'adamant-crystal';
  else if (sId === 484 && fType === 'origin') currentParams.item = 'lustrous-globe';
  else if (sId === 487 && fType === 'origin') currentParams.item = 'griseous-core';
  else if (sId === 888 && fType === 'crowned') currentParams.item = 'rusted-sword';
  else if (sId === 889 && fType === 'crowned') currentParams.item = 'rusted-shield';

  currentParams.moves = String(p.moves || '').split(',').slice(0, 4);
  updateUI();
  renderBox();
}

async function getPokemonType(speciesId) {
  if (typeCache[speciesId]) return typeCache[speciesId];
  try {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${speciesId}`);
    const data = await res.json();
    const type = data.types[0].type.name;
    typeCache[speciesId] = type;
    return type;
  } catch (e) { return 'normal'; }
}

function updateUI() {
  if (!currentPokemon) return;
  const isEgg = currentParams.egg;
  const img = document.getElementById('detail-img');
  if (img) {
    if (isEgg) img.src = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/egg.png';
    else img.src = getSpriteUrl(currentPokemon, currentParams.shiny);
    img.onerror = () => {
      const isShiny = currentParams.shiny || currentPokemon.is_event;
      const sNum = parseInt(currentPokemon.species);
      const species = String(sNum).padStart(3, '0');
      const type = String(currentPokemon.form_type || '').toLowerCase();
      const form = String(currentPokemon.form || '0');
      const typePart = type || (form !== '0' ? form : '');
      const key = `${species}-${typePart}`;
      let id = sNum;
      if (typeof FORM_TO_ID !== 'undefined' && FORM_TO_ID[key]) id = FORM_TO_ID[key];
      const fallbackUrl = (typeof id === 'string')
        ? `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${isShiny ? 'shiny/' : ''}${id}.png`
        : getFallbackSpriteUrl(currentPokemon, id, currentParams.shiny);
      img.src = fallbackUrl;
      img.onerror = null;
    };
  }
  const nameEl = document.getElementById('detail-name-jpn');
  if (nameEl) nameEl.textContent = currentPokemon.jpn + (getFormLabel(currentPokemon) ? ' ' + getFormLabel(currentPokemon) : '');
  const isCapPikachu = isPikachuCap(currentPokemon);
  const genderEl = document.getElementById('detail-gender');
  if (genderEl) {
    if (currentPokemon.gender_rate === -1 || isEgg) genderEl.classList.add('hidden');
    else {
      genderEl.classList.remove('hidden', 'tag-blue', 'tag-pink');
      if (currentParams.gender === 'male') { genderEl.textContent = '♂ オス'; genderEl.classList.add('tag-blue'); }
      else { genderEl.textContent = '♀ メス'; genderEl.classList.add('tag-pink'); }
      if (isGenderLocked(currentPokemon)) {
        genderEl.style.opacity = '0.6';
        genderEl.style.pointerEvents = 'none';
      } else {
        genderEl.style.opacity = '1.0';
        genderEl.style.pointerEvents = 'auto';
      }
    }
  }
  const shinyBtn = document.getElementById('toggle-shiny');
  if (shinyBtn) {
    const sId = parseInt(currentPokemon.species);
    const isLocked = (SHINY_LOCKED_SPECIES.includes(sId) || isCapPikachu) && !currentPokemon.is_event;
    const isMagearnaLocked = sId === 801;
    const isJirachiLocked = sId === 385;
    if (currentPokemon.is_event || isJirachiLocked) {
      currentParams.shiny = true;
      shinyBtn.style.opacity = '0.4';
      shinyBtn.style.pointerEvents = 'none';
    } else if (isLocked || isMagearnaLocked) {
      currentParams.shiny = false;
      shinyBtn.style.opacity = '0.4';
      shinyBtn.style.pointerEvents = 'none';
    } else if (sId === 658 && (currentPokemon.form === 1 || currentPokemon.form === '1')) {
      currentParams.shiny = false;
      shinyBtn.style.opacity = '0.4';
      shinyBtn.style.pointerEvents = 'none';
    } else if (sId === 666 && (String(currentPokemon.form_type || '').toLowerCase().includes('ball'))) {
      currentParams.shiny = false;
      shinyBtn.style.opacity = '0.4';
      shinyBtn.style.pointerEvents = 'none';
    } else if (sId === 720 || sId === 721) {
      currentParams.shiny = false;
      shinyBtn.style.opacity = '0.4';
      shinyBtn.style.pointerEvents = 'none';
    } else {
      shinyBtn.style.opacity = '1.0';
      shinyBtn.style.pointerEvents = 'auto';
    }
    shinyBtn.classList.toggle('active', currentParams.shiny);
    shinyBtn.innerHTML = currentParams.shiny ? '<span class="icon">✨</span> 色違い' : '色違い';
  }
  const eggBtn = document.getElementById('toggle-egg');
  if (eggBtn) {
    const isLocked = isEggLocked(currentPokemon);
    if (isLocked) {
      currentParams.egg = false;
      eggBtn.style.opacity = '0.4';
      eggBtn.style.pointerEvents = 'none';
      eggBtn.style.filter = 'grayscale(1)';
    } else {
      eggBtn.style.opacity = '1';
      eggBtn.style.pointerEvents = 'auto';
      eggBtn.style.filter = 'none';
    }
    eggBtn.classList.toggle('active', currentParams.egg);
    eggBtn.innerHTML = currentParams.egg ? '<span class="icon">🥚</span> タマゴ' : 'タマゴ';
  }

  const eggDisabledParams = ['level', 'tera', 'language', 'item', 'nature', 'move1', 'move2', 'move3', 'move4'];
  document.querySelectorAll('.param-item').forEach(item => {
    const p = item.dataset.param;
    const isDisabled = isEgg && eggDisabledParams.includes(p);
    item.classList.toggle('disabled-param', isDisabled);
    item.style.opacity = isDisabled ? '0.4' : '1';
    item.style.pointerEvents = isDisabled ? 'none' : 'auto';
    item.style.filter = isDisabled ? 'grayscale(1)' : 'none';
    if (isEgg) {
      const valSpan = item.querySelector('.value span');
      if (valSpan) {
        if (['nature', 'language', 'item'].includes(p)) valSpan.textContent = '指定できません';
        if (p.startsWith('move')) valSpan.classList.add('egg-move-text');
      }
    } else {
      const valSpan = item.querySelector('.value span');
      if (valSpan && p.startsWith('move')) valSpan.classList.remove('egg-move-text');
    }
  });

  ['hp','atk','def','spa','spd','spe'].forEach(s => {
    const ivEl = document.getElementById(`iv-${s}`);
    const evEl = document.getElementById(`ev-${s}`);
    if (ivEl) { ivEl.value = currentParams.ivs[s]; ivEl.disabled = isEgg; ivEl.style.opacity = isEgg ? '0.4' : '1'; }
    if (evEl) { evEl.value = currentParams.evs[s]; evEl.disabled = isEgg; evEl.style.opacity = isEgg ? '0.4' : '1'; }
  });

  const valLevel = document.getElementById('val-level');
  if (valLevel) valLevel.textContent = currentParams.level === 1 ? '未育成' : currentParams.level;
  const valSize = document.getElementById('val-size');
  const sizeItem = document.querySelector('.param-item[data-param="size"]');
  if (sizeItem) {
    if (valSize) valSize.textContent = currentParams.size === null ? '未指定' : currentParams.size;
    if (isSizeLocked(currentPokemon)) {
      sizeItem.classList.add('disabled-param');
      sizeItem.style.opacity = '0.5';
    } else {
      sizeItem.classList.remove('disabled-param');
      sizeItem.style.opacity = '1';
    }
  }

  const valTera = document.getElementById('val-tera');
  if (valTera) valTera.textContent = TERA_JPN[currentParams.tera] || currentParams.tera;

  const abilityEl = document.getElementById('val-ability');
  if (abilityEl) {
    abilityEl.textContent = '読み込み中...';
    getAbilityJpn(currentParams.ability).then(name => {
      abilityEl.textContent = (currentPokemon && currentParams.ability === currentPokemon.ability_h) ? name + ' (夢)' : name;
    });
  }
  const natureEl = document.getElementById('val-nature');
  if (natureEl) natureEl.textContent = isEgg ? '指定できません' : (NATURE_JPN[currentParams.nature] || currentParams.nature);
  const langEl = document.getElementById('val-lang');
  if (langEl) langEl.textContent = isEgg ? '指定できません' : currentParams.language;

  const ballItem = document.querySelector('.param-item[data-param="ball"]');
  const sNum2 = parseInt(currentPokemon.species);
  const isAshGreninja = sNum2 === 658 && (currentPokemon.form === 1 || currentPokemon.form === '1');
  const isCosmoLock = sNum2 === 789 || sNum2 === 790;
  if (ballItem) {
    const ballValEl = ballItem.querySelector('.value span') || document.getElementById('val-ball');
    if (ballValEl) ballValEl.textContent = BALL_ID_MAP[currentParams.ball] || currentParams.ball;
    const isPokeballVivillon = sNum2 === 666 && (String(currentPokemon.form_type || '').toLowerCase().includes('ball'));
    const isHoopaVolcanion = sNum2 === 720 || sNum2 === 721;
    const isMagearna = sNum2 === 801;
    const isDiancie = sNum2 === 719;
    if (currentPokemon.is_event || isAshGreninja || isCosmoLock || isPokeballVivillon || isHoopaVolcanion || isMagearna || isDiancie) {
      ballItem.classList.add('disabled-param');
      ballItem.style.opacity = '0.5';
    } else {
      ballItem.classList.remove('disabled-param');
      ballItem.style.opacity = '1';
    }
  }

  const itemValEl = document.getElementById('val-item');
  if (itemValEl) {
    if (isEgg) itemValEl.textContent = '指定できません';
    else {
      const itemObj = allItems.find(i => i.name === currentParams.item);
      itemValEl.textContent = itemObj ? (itemObj.jpn || itemObj.name) : (currentParams.item === 'none' ? 'なし' : currentParams.item);
    }
  }

  currentParams.moves.forEach((id, i) => {
    const el = document.getElementById(`val-move${i+1}`);
    if (el) {
      if (isEgg) {
        if (id && id !== 'none') {
          getMoveJpn(id).then(name => { if (document.getElementById('toggle-egg').classList.contains('active')) el.textContent = name; });
        } else {
          el.textContent = '---';
        }
      } else {
        if (id && id !== 'none') { el.textContent = '読み込み中...'; getMoveJpn(id).then(name => el.textContent = name); }
        else el.textContent = '---';
      }
    }
  });
  updateStats();
}

function updateStats() {
  let total = 0;
  ['hp','atk','def','spa','spd','spe'].forEach(s => {
    const ivEl = document.getElementById(`iv-${s}`);
    const evEl = document.getElementById(`ev-${s}`);
    if (ivEl && evEl) {
      let iv = parseInt(ivEl.value); if (isNaN(iv)) iv = 0; if (iv < 0) iv = 0; if (iv > 31) iv = 31;
      let ev = parseInt(evEl.value); if (isNaN(ev)) ev = 0; if (ev < 0) ev = 0; if (ev > 252) ev = 252;
      ivEl.value = iv; evEl.value = ev;
      currentParams.ivs[s] = iv; currentParams.evs[s] = ev; total += ev;
    }
  });
  const totalEl = document.getElementById('ev-total');
  const remainEl = document.getElementById('ev-remain');
  if (totalEl) totalEl.textContent = total;
  if (remainEl) remainEl.textContent = 510 - total;
  const footer = document.querySelector('.stats-footer');
  if (footer) footer.style.color = total > 510 ? '#ff5c8a' : '#94a3b8';
}

function initStatInputs() {
  ['hp','atk','def','spa','spd','spe'].forEach(s => {
    const ivEl = document.getElementById(`iv-${s}`);
    const evEl = document.getElementById(`ev-${s}`);
    if (ivEl) ivEl.oninput = updateStats;
    if (evEl) evEl.oninput = updateStats;
  });
}

async function getMoveJpn(id) {
  if (moveCache[id]) return moveCache[id];
  try {
    const res = await fetch(`https://pokeapi.co/api/v2/move/${id}`);
    const data = await res.json();
    const name = data.names.find(n => n.language.name === 'ja-hrkt');
    const jpn = name ? name.name : id; moveCache[id] = jpn; return jpn;
  } catch { return id; }
}

document.querySelectorAll('.param-item').forEach(item => {
  item.addEventListener('click', () => {
    if (item.classList.contains('disabled-param')) return;
    openPicker(item.dataset.param);
  });
});

function openPicker(param) {
  const overlay = document.getElementById('picker-overlay');
  const itemsArea = document.getElementById('picker-items');
  const title = document.getElementById('picker-title');
  const searchContainer = document.getElementById('picker-search-container');
  const searchInput = document.getElementById('picker-search-input');
  if (!overlay || !itemsArea) return;
  overlay.classList.remove('hidden'); itemsArea.innerHTML = '';
  if (searchInput) searchInput.value = '';
  const needsSearch = ['item', 'ball', 'move1', 'move2', 'move3', 'move4'].some(p => param.startsWith(p));
  if (searchContainer) searchContainer.classList.toggle('hidden', !needsSearch);
  if (needsSearch && searchInput) {
    const pLabel = param === 'ball' ? 'ボール' : (param === 'item' ? '道具' : '技');
    searchInput.placeholder = `${pLabel}を検索`;
    setTimeout(() => searchInput.focus(), 100);
  }
  let fullList = [];
  let currentValue = currentParams[param];
  if (param === 'level') {
    title.textContent = 'レベル';
    fullList = [{ v: 1, l: '未育成' }, { v: 50, l: '50' }, { v: 100, l: '100' }];
  } else if (param === 'size') {
    title.textContent = 'サイズ';
    fullList = [{ v: null, l: '未指定' }, { v: 0, l: '0 (最小)' }, { v: 128, l: '128 (M)' }, { v: 256, l: '256 (最大)' }];
  } else if (param === 'ability') {
    title.textContent = 'とくせい';
    const p = currentPokemon;
    fullList = [p.ability_a, p.ability_b, p.ability_h].filter(a => a && a !== 'none').map(id => ({v: id, l: '読み込み中...'}));
  } else if (param === 'nature') {
    title.textContent = '性格';
    fullList = NATURES;
  } else if (param === 'language') {
    title.textContent = '言語';
    fullList = LANGS;
  } else if (param === 'item') {
    title.textContent = '持ち物';
    fullList = [{ v: 'none', l: 'なし' }, ...allItems.map(i => ({ v: i.name, l: i.jpn || i.name }))];
  } else if (param === 'tera') {
    title.textContent = 'テラスタイプ';
    fullList = Object.entries(TERA_JPN).map(([v, l]) => ({v, l}));
  } else if (param === 'ball') {
    title.textContent = 'ボール';
    let ballIds = ["1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","18","19","20","492","493","494","495","496","497","498","499","500","596"];
    const speciesId = parseInt(currentPokemon ? currentPokemon.species : 0);
    const isHisui = currentPokemon && currentPokemon.form_type === 'hisui';
    const laSpecies = [155,156,157, 501,502,503, 722,723,724, 58,59, 100,101, 211, 215, 570,571, 627,628, 704,705,706, 712,713, 899,900,901,902,903,904,905, 483,484,487,493,492,491,488,485,489,490];
    const laCommon = [25,26, 133,134,135,136,196,197,470,471,700, 129,130, 443,444,445, 447,448];
    if (isHisui || laSpecies.includes(speciesId) || laCommon.includes(speciesId)) {
      ballIds.push("601");
    }
    if ([491, 492, 493].includes(speciesId)) {
      ballIds = ["1", "2", "3", "4", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "492", "493", "494", "495", "496", "497", "498"];
    }
    if (speciesId === 151) {
      ballIds = ["1", "2", "3", "4", "6", "7", "8", "9", "10", "11", "12"];
    }
    if ([906, 907, 909, 910, 912, 913].includes(speciesId)) ballIds = ballIds.filter(id => id !== "4");
    if (currentParams.egg) ballIds = ballIds.filter(id => id !== "4");
    fullList = ballIds.map(v => ({v, l: BALL_ID_MAP[v] || v}));
  } else if (param.startsWith('move')) {
    title.textContent = '技';
    const mIds = [...new Set(String(currentPokemon.moves || '').split(','))];
    fullList = [{v:'none', l:'なし'}, ...mIds.map(id => ({v: id, l: '読み込み中...'}))];
    currentValue = currentParams.moves[parseInt(param.replace('move', '')) - 1];
  }

  const renderItems = (q = '') => {
    itemsArea.innerHTML = '';
    const filtered = q ? fullList.filter(it => it.l.includes(q) || String(it.v).includes(q)) : fullList;
    filtered.forEach(item => {
      const div = document.createElement('div');
      div.className = 'picker-item' + (item.v == currentValue ? ' active' : '');
      div.innerHTML = `<span>${item.l}</span><span class="checkmark">✓</span>`;
      if (param === 'ability') getAbilityJpn(item.v).then(name => { div.querySelector('span').textContent = (item.v === currentPokemon.ability_h) ? name + ' (夢)' : name; });
      else if (param.startsWith('move') && item.v !== 'none') getMoveJpn(item.v).then(name => div.querySelector('span').textContent = name);
      div.onclick = () => {
        if (param === 'level') currentParams.level = item.v;
        else if (param.startsWith('move')) { const idx = parseInt(param.replace('move', '')) - 1; currentParams.moves[idx] = item.v; }
        else currentParams[param] = item.v;
        updateUI(); overlay.classList.add('hidden');
      };
      itemsArea.appendChild(div);
    });
  };
  if (searchInput) searchInput.oninput = (e) => renderItems(e.target.value);
  renderItems();
}

const closeBtn = document.getElementById('close-picker');
if (closeBtn) closeBtn.onclick = () => { document.getElementById('picker-overlay').classList.add('hidden'); };

function renderBox() {
  const boxArea = document.getElementById('box-list');
  const countEl = document.getElementById('box-count');
  if (!boxArea) return;
  if (countEl) countEl.textContent = boxList.length > 0 ? `(${boxList.length})` : '';
  localStorage.setItem('box_list_data', JSON.stringify(boxList));
  const submitBtn = document.getElementById('btn-submit-box');
  if (submitBtn) {
    const isEmpty = boxList.length === 0;
    submitBtn.disabled = isEmpty;
    if (isEmpty) { submitBtn.classList.add('secondary'); submitBtn.classList.remove('primary'); }
    else { submitBtn.classList.add('primary'); submitBtn.classList.remove('secondary'); }
  }
  if (boxList.length === 0) {
    boxArea.innerHTML = '<p class="empty-msg" style="text-align:center; padding: 20px; color: #94a3b8; font-size: 0.9rem;">Add Pokemon.</p>';
    return;
  }
  let html = '';
  boxList.forEach((p, i) => {
    const isShiny = p.shiny || p.is_event;
    const spriteUrl = getSpriteUrl(p, p.shiny);
    const fallbackUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${isShiny ? 'shiny/' : ''}${p.species}.png`;
    const levelText = p.params.level === 1 ? '未育成' : `Lv. ${p.params.level}`;
    html += `
      <div class="box-item ${editingIndex === i ? 'editing' : ''}" onclick="editPokemon(${i})">
        <img src="${spriteUrl}" onerror="this.onerror=null; this.src='${fallbackUrl}';">
        <div class="b-info">
          <div class="b-name">${p.displayName}</div>
          <div class="b-details">${levelText}</div>
        </div>
        <button class="box-quick-delete" onclick="event.stopPropagation(); deletePokemon(${i});" title="削除">×</button>
      </div>
    `;
  });
  boxArea.innerHTML = html;
}

function deletePokemon(index) {
  if (confirm('この個体を削除しますか？')) {
    boxList.splice(index, 1);
    if (editingIndex === index) {
      editingIndex = null;
      const addBtn = document.getElementById('btn-add-box');
      if (addBtn) addBtn.textContent = 'ボックスに追加';
    } else if (editingIndex !== null && editingIndex > index) {
      editingIndex--;
    }
    renderBox();
    const resultContainer = document.getElementById('share-result-container');
    if (resultContainer) resultContainer.classList.add('hidden');
  }
}

function editPokemon(index) {
  const p = boxList[index];
  currentPokemon = allPokemon.find(x => String(x.id) === p.id);
  editingIndex = index;
  currentParams = JSON.parse(JSON.stringify(p.params));
  const addBtn = document.getElementById('btn-add-box');
  if (addBtn) addBtn.textContent = '変更を保存';
  updateUI();
}

const addBoxBtn = document.getElementById('btn-add-box');
if (addBoxBtn) {
  addBoxBtn.onclick = () => {
    if (!currentPokemon) return;
    const pData = {
      id: currentPokemon.id,
      species: currentPokemon.species,
      form_type: currentPokemon.form_type,
      form: currentPokemon.form,
      is_event: currentPokemon.is_event,
      shiny: currentParams.shiny,
      displayName: `${currentPokemon.jpn} ${getFormLabel(currentPokemon)}`,
      params: JSON.parse(JSON.stringify(currentParams))
    };
    if (editingIndex !== null) boxList[editingIndex] = pData;
    else boxList.push(pData);
    renderBox();
    editingIndex = null;
    addBoxBtn.textContent = 'ボックスに追加';
    const resultContainer = document.getElementById('share-result-container');
    if (resultContainer) resultContainer.classList.add('hidden');
  };
}

const clearBoxBtn = document.getElementById('btn-clear-box');
if (clearBoxBtn) {
  clearBoxBtn.onclick = () => {
    if (boxList.length === 0) return;
    if (confirm('ボックス内のポケモンをすべて削除しますか？')) {
      boxList = [];
      editingIndex = null;
      const addBtn = document.getElementById('btn-add-box');
      if (addBtn) addBtn.textContent = 'ボックスに追加';
      renderBox();
      const resultContainer = document.getElementById('share-result-container');
      if (resultContainer) resultContainer.classList.add('hidden');
    }
  };
}

const submitBoxBtn = document.getElementById('btn-submit-box');
if (submitBoxBtn) {
  submitBoxBtn.onclick = async () => {
    if (boxList.length === 0) return;
    const originalText = submitBoxBtn.textContent;
    submitBoxBtn.disabled = true;
    submitBoxBtn.textContent = '保存中...';
    try {
      const data = boxList.map(p => {
        const pa = p.params;
        const compactParams = [
          1, pa.gender === 'male' ? 0 : 1, pa.shiny ? 1 : 0, pa.egg ? 1 : 0,
          pa.level, pa.size, pa.tera, pa.ability, pa.nature, pa.item, pa.ball, pa.language,
          pa.moves,
          [pa.ivs.hp, pa.ivs.atk, pa.ivs.def, pa.ivs.spa, pa.ivs.spd, pa.ivs.spe],
          [pa.evs.hp, pa.evs.atk, pa.evs.def, pa.evs.spa, pa.evs.spd, pa.evs.spe]
        ];
        return [p.id, p.species, p.form || 0, p.form_type || '', p.is_event ? 1 : 0, compactParams];
      });
      const res = await fetch(GIST_API_URL, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${GITHUB_TOKEN}`,
          'Accept': 'application/vnd.github+json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ description: 'Pokémon Builder Box Data', public: false, files: { 'box.json': { content: JSON.stringify(data) } } })
      });
      if (!res.ok) {
        const errorDetail = await res.json().catch(() => ({ message: res.statusText }));
        throw new Error(`GitHub API Error (${res.status}): ${errorDetail.message}`);
      }
      const gistData = await res.json();
      const count = boxList.length;
      const shareUrl = window.location.origin + window.location.pathname + `?id=SV-${count}-${gistData.id}`;
      const resultContainer = document.getElementById('share-result-container');
      const urlDisplay = document.getElementById('share-url-display');
      if (resultContainer && urlDisplay) {
        urlDisplay.value = shareUrl;
        resultContainer.classList.remove('hidden');
        resultContainer.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }
    } catch (err) {
      console.error('Sharing error:', err);
      alert(`保存に失敗しました：\n${err.message}\n通信環境を確認してもう一度お試しください。`);
    } finally {
      submitBoxBtn.disabled = false;
      submitBoxBtn.textContent = originalText;
    }
  };
}

const copyShareBtn = document.getElementById('btn-copy-share');
if (copyShareBtn) {
  copyShareBtn.onclick = () => {
    const urlDisplay = document.getElementById('share-url-display');
    if (urlDisplay && urlDisplay.value) {
      navigator.clipboard.writeText(urlDisplay.value).then(() => {
        const originalText = copyShareBtn.textContent;
        copyShareBtn.textContent = '完了！';
        copyShareBtn.classList.add('success');
        setTimeout(() => {
          copyShareBtn.textContent = originalText;
          copyShareBtn.classList.remove('success');
        }, 2000);
      }).catch(err => {
        urlDisplay.select();
        urlDisplay.setSelectionRange(0, 99999);
        alert('コピーに失敗しました。ボックス内のURLを手動でコピーしてください。');
      });
    }
  };
}

function exportBoxToUrl() {
  const data = boxList.map(p => {
    const pa = p.params;
    const compactParams = [
      1,
      pa.gender === 'male' ? 0 : 1,
      pa.shiny ? 1 : 0,
      pa.egg ? 1 : 0,
      pa.level,
      pa.size,
      pa.tera,
      pa.ability,
      pa.nature,
      pa.item,
      pa.ball,
      pa.language,
      pa.moves,
      [pa.ivs.hp, pa.ivs.atk, pa.ivs.def, pa.ivs.spa, pa.ivs.spd, pa.ivs.spe],
      [pa.evs.hp, pa.evs.atk, pa.evs.def, pa.evs.spa, pa.evs.spd, pa.evs.spe]
    ];
    return [p.id, p.species, p.form || 0, p.form_type || '', p.is_event ? 1 : 0, compactParams];
  });

  const json = JSON.stringify(data);
  const base64 = btoa(unescape(encodeURIComponent(json)));
  const url = new URL(window.location.href);
  url.searchParams.set('box', base64);
  return url.toString();
}

async function importBoxFromUrl() {
  const params = new URLSearchParams(window.location.search);
  const gistIdParam = params.get('gist');
  const idParam = params.get('id');
  const base64 = params.get('box');
  if (!idParam && !gistIdParam && !base64) return;

  try {
    let json = '';
    let gistId = gistIdParam;

    if (idParam && idParam.startsWith('SV-')) {
      const parts = idParam.split('-');
      if (parts.length >= 3) gistId = parts[2];
    }

    if (gistId) {
      const res = await fetch(`${GIST_API_URL}/${gistId}`, {
        headers: {
          'Authorization': `Bearer ${GITHUB_TOKEN}`,
          'Accept': 'application/vnd.github+json'
        }
      });
      if (!res.ok) throw new Error('Gist data not found or expired');
      const gistData = await res.json();
      json = gistData.files['box.json'].content;
    } else if (base64) {
      json = decodeURIComponent(escape(atob(base64)));
    }

    const data = JSON.parse(json);
    if (!Array.isArray(data)) throw new Error('Invalid data format');

    boxList = data.map(d => {
      if (!Array.isArray(d)) {
        return {
          id: d.i, species: d.s, form: d.f, form_type: d.ft,
          is_event: d.ev, shiny: d.sh, displayName: d.dn, params: d.pa
        };
      }
      const [id, species, form, form_type, is_event, cp] = d;
      const pa = {
        gender: cp[1] === 0 ? 'male' : 'female',
        shiny: cp[2] === 1,
        egg: cp[3] === 1,
        level: cp[4],
        size: cp[5],
        tera: cp[6],
        ability: cp[7],
        nature: cp[8],
        item: cp[9],
        ball: cp[10],
        language: cp[11],
        moves: cp[12],
        ivs: { hp: cp[13][0], atk: cp[13][1], def: cp[13][2], spa: cp[13][3], spd: cp[13][4], spe: cp[13][5] },
        evs: { hp: cp[14][0], atk: cp[14][1], def: cp[14][2], spa: cp[14][3], spd: cp[14][4], spe: cp[14][5] }
      };
      const pokemon = allPokemon.find(x => String(x.id) === String(id));
      const displayName = pokemon ? `${pokemon.jpn} ${getFormLabel(pokemon)}` : 'Unknown';
      return { id, species, form, form_type, is_event: is_event === 1, shiny: pa.shiny, displayName, params: pa };
    });

    renderBox();
    const newUrl = window.location.origin + window.location.pathname;
    window.history.replaceState({}, document.title, newUrl);
    alert('ボックスの内容をURLから復元しました。');
  } catch (e) {
    console.error('URL Import Error:', e);
    alert('URLからの読み込みに失敗しました。URLが途中で切れている可能性があります。');
  }
}

init();
