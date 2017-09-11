function getAndPrintHTML (options) {
  const https = require('https');
  
  https.get(requestOptions, (response) => {
    response.setEncoding('utf8');
    let buf = '';
    response.on('data', (chunk) => {
      buf += chunk;
    });

    response.on('end', () => {
      console.log(buf);
    });
  });
}

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step3.html'
};

getAndPrintHTML (requestOptions);