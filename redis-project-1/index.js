var redis = require('redis');
var client = redis.createClient(6379, 'localhost');


client.on('connect', function() {
    console.log('Redis connected');
});

client.set('subject', 'NodeJS', function(err, res) {
  console.log(res);
});

client.get('subject',function(err, res) {
  console.log(res);
});







