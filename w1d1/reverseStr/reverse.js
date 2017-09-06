var args = process.argv.slice(2);

function reverse(string) {
  var strLen = string.length;
  var i = 0;
  var tmp = "";
  while (i < strLen) {
    var word = string[i];
    var wordLen = word.length;
    for (var j = wordLen-1; j >= 0; j--) {
      tmp += word[j];
    }
    console.log(tmp);
    i++;
    tmp = "";
  }
}

reverse(args);