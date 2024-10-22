var express = require('express');
var app = express();

app.set("view engine","ejs");

app.get('/', function(req,res){
    res.send("Welcome!");
})

app.get('/second', function(req,res){
    res.send(req.query.name);
})

app.get('/third/:name', function(req,res){
    res.send(req.                                     ms.name)
})

app.get('/file', function(req,res){
    res.sendFile(__dirname+"/index.html")
})

app.get('/ejs', function(req,res){
    res.render("index")
})

app.listen(3000);