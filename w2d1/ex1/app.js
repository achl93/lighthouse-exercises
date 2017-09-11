function getAndPrintHTMLChunks () {
  const https = require('https');
  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step1.html'
  };
  
  https.get(requestOptions, (response) => {
    response.setEncoding('utf8');

    response.on('data', (chunk) => {
      console.log(chunk + "\n");
    });

    response.on('end', () => {
      console.log('stream ended');
    });
  });
}

getAndPrintHTMLChunks ()