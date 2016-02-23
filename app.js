var express = require('express');
var app = express();

app.get("/test", function(req, res){
  res.send("It Works!");
});

app.listen(3000, function(){
  console.log("Application API started on localhost:3000");
});
