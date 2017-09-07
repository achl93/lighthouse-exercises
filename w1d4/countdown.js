var countdownGenerator = function (x) {
  var index = x;
  return function() {
    if (!isNaN(index) && index > 0) {
      console.log("T-minus " + index);
      index--;
    }
    if (index === 0) {
      console.log("Blast Off!");
      index--;
    }
    else if (index < 0) console.log("Rockets already gone, bub!");
    return index;
  }
};

var countdown = countdownGenerator(3);
countdown(); // T-minus 3...
countdown(); // T-minus 2...
countdown(); // T-minus 1...
countdown(); // Blast Off!
countdown(); // Rockets already gone, bub!
countdown(); // Rockets already gone, bub!
