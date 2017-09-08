var set = [45, 24, 35, 31, 40, 38, 11];

/* Hash solution - not working */
// function hashIt(numArr) {
//   var numHash = new Map();
//   for (var i = 0; i < numArr.length; i++) {
//     numHash.set(numArr[i], i);
//   }
//   return numHash;
// }

// function sortedHash(numArr) {
//   var hash = hashIt(numArr);
//   var sorted = numArr.sort(); // maybe implement a radix sort?
//   var sortedIndex = [];
//   var min = -1;
//   var max = -1;
//   for (var i = 0; i < sorted.length; i++) {
//     // if (hash.get(sorted[i]) > ) min/max?
//   }
//   console.log(hash);
//   console.log(sorted);
//   console.log(sortedIndex);
// }

// var x = sortedHash(set);
// console.log(x);


/* Brute force O(n^2) */
function slowSolution(numArr) {
  var maxProf = -1;
  for (var i = 0; i < numArr.length; i++) {
    for (var j = i + 1; j < numArr.length; j++) {
      if ((numArr[j] - numArr[i]) > maxProf) maxProf = numArr[j] - numArr[i];
    }
  }
  console.log(maxProf);
  return maxProf;
}

var x = slowSolution(set);