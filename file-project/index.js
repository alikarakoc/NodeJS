var fs = require("fs");
console.log("Node HTML Dosyayi okumaya basladi");
fs.readFile('index.html', function (err, data) {
    if (err){
    	 return console.error(err);
    }
    console.log(data.toString());
});
console.log("Next Lines");


