
var express = require('express');



 var app = express();
app.use(express.static(__dirname + '/public')); 

 app.get('/', function(req, res){
 res.sendfile(__dirname + '/public/index.html');
 });
app.get('/about', function(req, res){
 res.sendfile(__dirname + '/public/about.html');
 });


app.listen(9000);
console.log("Ha iniciado el servidor.");