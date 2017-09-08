var arg = process.argv[2];

function poppinBottles(investment) {
  const BOTTLE_COST = 2,
  EMPTY_BOTTLE_COST = 2,
  CAP_COST = 4;
  var bottles = investment / BOTTLE_COST,
  empty = 0,
  caps = 0,
  totalBottles = bottles,
  bottlesFromEmpty = 0,
  bottlesFromCaps = 0;
  while (bottles > 0) {
    bottles--;
    empty++;
    caps++;
    if (empty >= 2) {
      bottles += empty / EMPTY_BOTTLE_COST;
      totalBottles += empty / EMPTY_BOTTLE_COST;
      bottlesFromEmpty += empty / EMPTY_BOTTLE_COST;
      empty = empty % EMPTY_BOTTLE_COST;
    }
    if (caps >= 4) {
      bottles += caps / CAP_COST;
      totalBottles += caps / CAP_COST;
      bottlesFromCaps += caps / CAP_COST;
      caps = caps % CAP_COST;
    }
  }
  console.log("Total bottles earned: " + totalBottles);
  console.log("Bottles earned through empty bottles: " + bottlesFromEmpty);
  console.log("Bottles earned through caps: " + bottlesFromCaps);
  console.log("Empty bottles remaining: " + empty);
  console.log("Caps remaining: " + caps);
}

poppinBottles(arg);