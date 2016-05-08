var express      = require('express')
var cookieParser = require('cookie-parser')

var app = express()
app.use(cookieParser())

app.get('/link', function(req, res) {
  console.log("Cookies: ", req.cookies)
  res.cookie('name', 'NodeJS', { maxAge: 900000, httpOnly: true });
  // res.clearCookie('cookiename');
  res.end("Link Response");
})

app.listen(3000)
