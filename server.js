var http = require('http');

// Create a server
http.createServer( function (request, response) {  
   // don't do anything because it's all in javascript and htm files
}).listen(8081);

// Console will print the message
console.log('Server running at http://127.0.0.1:8081/');