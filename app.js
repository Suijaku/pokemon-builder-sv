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
