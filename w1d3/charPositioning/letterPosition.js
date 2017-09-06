function letterPosition(string) {
  var resultObj = {};
  for (var i = 0; i < string.length; i++) {
    if (notSpace(string[i])) {
      if (string[i] in resultObj) resultObj[string[i]].push(i);
      else {
        resultObj[string[i]] = [];
        resultObj[string[i]].push(i);
      }
    }
  }
  //console.log(resultObj);
  return resultObj;
}

function notSpace(char) {
  if (char === ' ') return false;
  else return true;
}

console.log(letterPosition("lighthouse"));