var express = require('express');
var app = express();

app.get('/', function(req,res){
    res.send("Welcome!");
})

app.get('/second', function(req,res){
    res.send("Hello...");
})

app.listen(2605);