function getHTML (options, callback) {
  const https = require('https');
  
  https.get(options, (response) => {
    response.setEncoding('utf8');
    let buf = '';
    response.on('data', (chunk) => {
      buf += chunk;
    });

    response.on('end', () => {
      callback(buf);
    });
  });
}
  
function printHTML (html) {
  console.log(html);
}
  
var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step4.html'
};

getHTML(requestOptions, printHTML);