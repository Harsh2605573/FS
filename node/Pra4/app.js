var express = require('express');
var bodyParser = require('body-parser')
var mysql = require('mysql');
var app = express();

var conn = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "nodedemo"
});

conn.connect();

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: false }))

app.get('/', function (req, res) {
    var sql_insert = "select * from user";
    conn.query(sql_insert, function (err, result) {
        if (err) throw error;
        res.render("index", { result });
    })
})

app.post('/', function (req, res) {
    var sql_insert = "insert into user(name,email,password)values('" + req.body.name + "','" + req.body.email + "','" + req.body.password + "')";
    conn.query(sql_insert, function (err, result) {
        if (err) throw error;
        res.redirect("/");
    })
})

app.get('/delete/:id', function (req, res) {
    var id = req.params.id;
    var sql_insert = "delete from user where id=" + id;
    conn.query(sql_insert, function (err, result) {
        if (err) throw error;
        res.redirect("/");
    })
})

app.get('/update/:id', function (req, res) {
    var sql_insert = "select * from user where id=" + req.params.id;
    conn.query(sql_insert, function (err, result) {
        if (err) throw error;
        res.render('update', { result });
    })
})

app.post('/update/:id', function (req, res) {
    // console.log(req.query.name);
    
    var sql_insert = "update user set name='" + req.body.name + "',email='" + req.body.email + "',password='" + req.body.password + "' where id=" + req.params.id;;
    conn.query(sql_insert, function (err, result) {
        if (err) throw err;
        res.redirect("/");
    })
})


app.listen(3011);

