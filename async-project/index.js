
var fs = require('fs');  
var async = require('async');

async.map(['index1.txt','index2.txt','index3.txt'], fs.stat, function(err, results){
  console.log(results);
});