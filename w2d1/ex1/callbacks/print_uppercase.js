var getHTML = require('../http-functions.js');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/uppercase.html'
};

function upper (html) {
  console.log(html.toUpperCase());
}

getHTML(requestOptions, upper);