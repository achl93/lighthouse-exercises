function countLetters(string) {
  var resultObj = {};
  for (var i = 0; i < string.length; i++) {
    if (notSpace(string[i])) {
      if (string[i] in resultObj) resultObj[string[i]] += 1;
      else resultObj[string[i]] = 1;
    }
  }
  //console.log(resultObj);
  return resultObj;
}

function notSpace(char) {
  if (char === ' ') return false;
  else return true;
}

console.log(countLetters("lighthouse"));