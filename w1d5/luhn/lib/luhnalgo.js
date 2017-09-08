function check(num) {
  if (Number.isNaN(num)) return false;
  var sum = 0,
  output = [],
  numStr = num.toString();
  // numStr.split(' ').join('');
  for (var i = 0; i < numStr.length; i++) {
    output.push(Number(numStr.charAt(i)));
  }
  for (var i = 0; i < output.length; i++) {
    if (i % 2 !== 0) {
      output[i] *= 2;
      if (output[i] > 9) output[i] -= 9;
    }
    sum += output[i];
  }
  return (sum % 10 === 0);
}

module.exports = check;

// var number = 1234567890;

// console.log(check(number));
