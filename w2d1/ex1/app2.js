function getAndPrintHTML () {
  const https = require('https');
  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step2.html'
  };
  
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

getAndPrintHTML ()