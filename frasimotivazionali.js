const frasiMotivazionali = [
  'Gli sciocchi aspettano il giorno fortunato, ma ogni giorno è fortunato per chi sa darsi da fare.',
  'Possiamo avere di più di quello che abbiamo perchè possiamo diventare di più di quello che siamo.',
  'Qualunque cosa tu possa fare, qualunque sogno tu possa sognare, comincia. L’audacia reca in se genialità, magia e forza. Comincia ora.',
  'Se una voce dentro di te continua a ripeterti “non sarai mai in grado di dipingere”, allora dedicati alla pittura con tutto te stesso, e vedrai che quella voce sarà messa a tacere.',
  'Chi conosce gli altri è sapiente,chi conosce sé stesso è illuminato.Chi vince gli altri è potente,chi vince sé stesso è forte.',
];

function getRandomQuote() {
  const randomIndex = Math.floor(Math.random() * frasiMotivazionali.length);
  return frasiMotivazionali[randomIndex];
}

module.exports = { getRandomQuote };
