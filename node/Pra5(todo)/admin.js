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
    res.render("admin_login");
})

app.post('/',function(req,res){
    var login_admin = "select * from admin where a_email='"+req.body.email+"' and a_password='"+req.body.password+"'";

    con.query(login_admin,function(error,result){
        if(error) throw error;

        if(result.length==1){
            res.redirect('/dashboard');
        }else{
            res.redirect('/');
        }
    })
})

app.get('/dashboard',function(req,res){
    res.render("admin_dashboard");
})

app.get('/adduser',function(req,res){
    res.render("adduser");
})

app.post('/adduser',function(req,res){
    var add_user = "insert into user(u_name,u_email,u_password)values('"+req.body.name+"','"+req.body.email+"','"+req.body.password+"')";
    con.query(add_user,function(err,result){
        if(err) throw err;
        res.redirect("/adduser");
    })
})

app.get('/addtask',function(req,res){
    var select_user = "select * from user"
    con.query(select_user,function(err,result){
        if(err) throw err;
        res.render("addtask",{result});
    })
})
app.post('/addtask',function(req,res){
    var add_task = "insert into addtask(user_id,task)values('"+req.body.user+"','"+req.body.task+"')"
    con.query(add_task,function(err,result){
        if(err) throw err;
        res.redirect("/addtask",);
    })
})

app.get('/viewtask',function(req,res){
    var select_task = "SELECT user.u_name , addtask.task_id , addtask.task , addtask.status FROM addtask INNER JOIN user on user.u_id = addtask.user_id;";

    con.query(select_task,function(error,result){
        if(error) throw error;
        res.render("viewtask",{result});
    })
})

app.get('/manageTask',function(req,res){
    var select_task = "SELECT user.u_name , addtask.task_id , addtask.task , addtask.status FROM addtask INNER JOIN user on user.u_id = addtask.user_id;";
    con.query(select_task,function(error,result){
        if(error) throw error;
        res.render("manageTask",{result});
    })
})

app.get('/manageTask/:id',function(req,res){
    var id = req.params.id;



    

















     
    var delete_task = "delete from viewtask where task_id=" + id;
    con.query(delete_task,function(error,result){
        if(error) throw error;
        res.render("/manageTask");
    })
})

app.listen(3001);