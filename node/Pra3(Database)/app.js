var mysql = require('mysql');
var express = require('express');
var app = express();

var conn = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "nodedemo"
});

conn.connect();

app.get('/', function (req, res) {
    var select_query = "select * from user";
    conn.query(select_query, function (err, result) {
        if (err) throw err;
        res.send(result);
    })
})

app.get('/insert/:name/:email/:password', function (req, res) {
    var insert_query = "insert into user(name,email,password)values('" + req.params.name + "','" + req.params.email + "','" + req.params.password + "')";
    conn.query(insert_query, function (err, result) {
        if (err) throw err;
        res.redirect('/');
    })
})

app.get('/update/:name/:email/:password/:id', function (req, res) {
    var update_query = "update user set name='"+req.params.name+"',email='"+req.params.email+"',password='"+req.params.password+"' where id="+req.params.id;
    conn.query(update_query, function (err, result) {
        if (err) throw err;
        res.redirect('/');
    })
})

app.get('/delete/:id', function (req, res) {
    var delete_query = "delete from user where id="+req.params.id;
    conn.query(delete_query, function (err, result) {
        if (err) throw err;
        res.redirect('/');
    })
})
app.listen(3000);