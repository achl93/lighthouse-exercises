module.exports = function getHTML (options, callback) {
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
};