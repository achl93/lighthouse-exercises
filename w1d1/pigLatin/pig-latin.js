var args = process.argv.slice(2);

function pigLatin(string) {
  var strLen = string.length;
  var i = 0;
  var tmp = "";
  while (i < strLen) {
    var word = string[i];
    var wordLen = word.length;
    for (var j = 1; j < wordLen; j++) {
      tmp += word[j];
    }
    tmp = tmp + word[0] + "ay ";
    i++;
  }
  console.log(tmp);
}

pigLatin(args);