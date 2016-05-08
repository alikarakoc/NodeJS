var redis = require('redis');
var client = redis.createClient(6379, 'localhost');


client.on('connect', function() {
    console.log('Redis connected');
});

client.rpush(['listObj', 'React', 'Angular', 'NodeJS', 'React Native', 'Express'],
 function(err, res) {
    console.log(res);
});


client.lrange('listObj', 1, 3,
 function(err, res) {
    console.log(res);
});

