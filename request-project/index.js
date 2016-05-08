var express = require('express');
var request = require('request');
var fs = require('fs');
var app = express();

app.get('/download', function (req, res) {
downloadFile();
  res.send("download Page");
});

app.listen(3000, function () {
  console.log('Express Running');
})

function downloadFile(){
request
  .get('http://mehmetcanker.com/icerik/react-icerik.pdf')
  .on('response', function(response) {
    console.log(response.statusCode)
    console.log(response.headers['content-type'])
  })
  .pipe(fs.createWriteStream('download/react-icerik.pdf'))

}
