var args = Number(process.argv.slice(2));

function rollDice(diceAmnt) {
  var diceValues = "";
  for (var i = 0; i < diceAmnt - 1; i++) {
    diceValues += Math.floor(Math.random() * 7) + ", ";
  }
  if (diceAmnt != 0) diceValues += Math.floor(Math.random() * 7);
  console.log("Rolled " + diceAmnt + " dice: " + diceValues);
}

rollDice(args);
