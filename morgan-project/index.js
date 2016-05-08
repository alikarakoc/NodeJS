var express = require('express')
var morgan = require('morgan')
var fs = require('fs')

var app = express()


var logStream = fs.createWriteStream(__dirname + '/project.log', {flags: 'a'})

app.use(morgan('Request Started',
 {
 	stream: logStream,
  	skip: function (req, res) {
  	return res.statusCode < 400 }
}));


app.get('/link', function (req, res) {
  res.send('link request Response');
});

app.listen(3000, function () {
  console.log('Express Started');
})
