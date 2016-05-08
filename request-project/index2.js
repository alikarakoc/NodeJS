var express = require('express');
var request = require('request');
var app = express();

var appID = "f53a64494f62b574f5f9d5b55647cfd8";

app.get('/weather', function (req, res) {
	getWeather("istanbul");
  res.send("Hava Durumu");
});

app.listen(3000, function () {
  console.log('Express Running');
})


function getWeather(city){
request(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${appID}`,
 function (error, response, body) {
  if (!error && response.statusCode == 200) {
  	console.log(body);
  }
 });
}
