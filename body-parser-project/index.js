var express = require('express')
var bodyParser = require('body-parser')
var app = express()
app.use(bodyParser.json())
var urlencodedParser = bodyParser.urlencoded({ extended: false })
app.post('/link', function (req, res) {
	console.log(req.body.name);
  res.send('link request Response');
});

app.listen(3000, function () {
  console.log('Express Started');
})
