var express = require('express');
var session = require('express-session');
var bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true
}));
app.get('/count', function(req, res){
    if(req.session.count || req.session.count == 0){
        req.session.count += 1; 
    }else{
        req.session.count = 0;
    }
    res.send('Count: ' + req.session.count);
});
app.post('/auth/login', function(req, res){
    var username = req.body.username;
    var password = req.body.password;

    res.send(username);
})
app.get('/auth/login', function(req, res){
    var output = '\
    <h>Login</h>\
    <form action="/auth/login" method="post">\
        <p>\
            <input type="text" name="username" placeholder="username">\
        </p>\
        <p>\
            <input type="password" name="password" placeholder="password">\
        </p>\
        <p>\
            <input type="submit">\
        </p>\
    </form>\
    ';
    res.send(output);
})
app.listen(3003, ()=>{
    console.log('connected 3003');
});