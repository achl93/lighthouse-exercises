var request = require('request');
var fs = require('fs');

request.get('https://sytantris.github.io/http-examples/future.jpg')
  .on('error', (err) => {
    throw (err);
  })
  .on('response', (res) => {
    console.log("Response code: " + res.statusCode);
    console.log("Response message: " + res.statusMessage);
  })
  .pipe(fs.createWriteStream('./future.jpg'));