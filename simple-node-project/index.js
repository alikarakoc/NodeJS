var http = require('http');
 var   url = require('url');

http.createServer(function(req,res){ 

 var urlpath = url.parse(req.url);
res.writeHead(200,{ 'Content-Type': 'text/plain' }); 

   switch(urlpath.pathname) {

    case '/contact':
		res.end('Contact');
	break;

    case '/login':
		res.end('Login');
	break;

    case '/register':
		res.end('Register');
	break;

    default:
		res.end('Home');
    }

}).listen(3003);