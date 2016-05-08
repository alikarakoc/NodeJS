var fs = require("fs");

console.log("Node HTML Dosyayi okumaya basladi");
var data = fs.readFileSync('index.html');
console.log(data.toString());
console.log("Dosya Okuma Bitti");