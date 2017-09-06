var args = process.argv.slice(2);

function obfuscate(pw) {
  var newPw = "";
  for (var i = 0; i < pw.length; i++) {
    if (pw[i] == "a") newPw += 4;
    else if (pw[i] == "e") newPw += 3;
    else if (pw[i] == "o") newPw += 0;
    else if (pw[i] == "l") newPw += 1;
    else newPw += pw[i];
  }
  return newPw;
}

console.log(obfuscate(args[0]));