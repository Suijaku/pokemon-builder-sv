(function ensureLocalNewSpecies() {
  const fallbackSpecies = [
    { id: 996, species: 996, jpn: 'セビエ', eng: 'Frigibax', ability_a: 'none', ability_h: 'none', gender_rate: 1, moves: '', balls: '1' },
    { id: 997, species: 997, jpn: 'セゴール', eng: 'Arctibax', ability_a: 'none', ability_h: 'none', gender_rate: 1, moves: '', balls: '1' },
    { id: 998, species: 998, jpn: 'セグレイブ', eng: 'Baxcalibur', ability_a: 'none', ability_h: 'none', gender_rate: 1, moves: '', balls: '1' }
  ];
  fallbackSpecies.forEach(p => {
    const exists = allPokemon.some(x => parseInt(x.species) === p.species && String(x.form || '0') === String(p.form || '0'));
    if (!exists) allPokemon.push(p);
  });
})();
