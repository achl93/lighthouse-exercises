var getHTML = require('../http-functions.js');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/1337.html'
};

const keypairs = [['a', '4'], ['e', '3'], ['l', '1'], ['o', '0'], ['s', '5'], ['t', '7'], ['ck', 'x'], ['er', '0r']];
let dict = new Map(keypairs);

function print_1337 (html) {
  let charArr = html.split('');
  for (let i = 0; i < charArr.length; i++) {
    if (dict.get(charArr[i]) !== undefined) {
      charArr[i] = dict.get(charArr[i]);
    }
  }
  console.log(charArr.join(''));
}

getHTML(requestOptions, print_1337);