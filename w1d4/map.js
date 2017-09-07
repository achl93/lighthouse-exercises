var map = function(array, cb) {
  var newArr = [];
  array.forEach(function(element) {
    newArr.push(cb(element))
  });
  return newArr;
}

var words = ["ground", "control", "to", "major", "tom"];

console.log(map(words, function(word) {
  return word.length;
}));

console.log(map(words, function(word) {
  return word.toUpperCase();
}));


console.log(map(words, function(word) {
  return word.split('').reverse().join('');
}));
