
var fs = require('fs');  
var async = require('async');

async.map(['file1','file2','file3'], fs.stat, function(err, results){
  console.log(results);
});