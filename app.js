var express = require('express');
var app = express();

app.use('/', express.static(__dirname+'/public'));
app.use('/api', express.static(__dirname + '/api'));
app.use('/js/bootstrap', express.static(__dirname + '/node_modules/bootstrap/dist/js'));
app.use('/css/bootstrap', express.static(__dirname + '/node_modules/bootstrap/dist/css'));


app.listen(3000, function(){
  console.log("App started on localhost:3000");
});
  
