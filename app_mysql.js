var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var mysql = require('mysql');
var connection = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : 'dkgk6979',
    database : 'o2'
});

connection.connect();

app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: false}));
app.get('/', (req, res)=>{
    res.send('Hello home page');
});
app.get('/topic', (req, res) => {
    res.send(req.query.id);
})
app.post('/form_recevier', (req, res) => {
    var title = req.body.title;
    var description = req.body.description;
    res.send('Hello, POST');
})
app.get('/login', (req, res) => {
    res.send('login please');
})
app.listen(3000, ()=>{
    console.log('Connected 3000 port!');
});