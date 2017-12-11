var fs = require('fs');

fs.appendFile('content.txt', '\nThis was added in homework 6', function (err) {
  if (err) throw err;
  console.log('Saved!');
});