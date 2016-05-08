
var express = require('express');
var myrouter = require('./route');
var app = express();

app.use('/route-base', myrouter);

app.listen(3005, function () {
  console.log('Express Starts');
})




