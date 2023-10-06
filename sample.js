// console.log("hello world")

// var http = require("http");
// var server = http.createServer(function(req,res){
//     res.write("hello world\n");
//     res.end();
// }).listen(8080);

// process.stdout.write("hello");

// var http = require('http');
// var server = http.createServer(function(req, res) {
//   console.log("URL: " + req.url);
//   console.log("Method: " + req.method);
//   console.log("Header[Content-Type]: " + req.headers['content-type']);
//   res.end();
// }).listen(8080);

var http = require('http');
var url = require('url');

var server = http.createServer(function(req, res) {
  var url_parse = url.parse(req.url, true);
  console.log(url_parse);
  res.end();
}).listen(8080);