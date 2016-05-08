var Promise = require('bluebird');
var fs = require('fs');
Promise.promisifyAll(fs);

var myFile = './log/index.txt';

fs.readFileAsync(myFile, 'utf8').then(function(txt) {

    txt = txt + '\nLog Mesajı';
    fs.writeFile(myFile, txt);

}).then(function() {
    console.log('Log Eklendi');
}).catch(function(err) {
    console.log(err);
});
