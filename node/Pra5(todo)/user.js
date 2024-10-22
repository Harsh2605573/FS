var express =require('express');
var mysql = require('mysql');
var bodyparser = require('body-parser');
var app =express();

app.set("view engine","ejs");
app.use(bodyparser.urlencoded({ extended: false }));

var con = mysql.createConnection({
    user:"root",
    password:"",
    database:"todolist",
    host:"localhost",
});

con.connect();

app.get('/',function(req,res){
    res.render("user_login");
})

app.post('/',function(req,res){
    var login_user = "select * from user where u_email='"+req.body.email+"' and u_password='"+req.body.password+"'";

    con.query(login_user,function(error,result){
        if(error) throw error;

        if(result.length==1){
            res.redirect('/dashboard');
        }else{
            res.redirect('/');
        }
    })
})

app.get('/dashboard',function(req,res){
    res.render("user_dashboard");
})

app.listen(3002);