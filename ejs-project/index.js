var express = require("express");
var jade = require("jade");

var app = express()


app.set('views', __dirname + '/views')
app.set('view engine', 'ejs')
app.use(express.static('./static'));

app.get('/', function (req, res) {  
 res.render('index', { title: 'EJS Örnek Proje',
  message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
  source:	['Node', 'EJS', 'Templating']
}); 
});

app.listen(3000)