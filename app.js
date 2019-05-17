var express = require('express');
var app = express();

app.get('/', (req, res)=>{
    res.send('Hello home page');
});
app.get('/login', (req, res) => {
    res.send('login please');
})
app.listen(3000, ()=>{
    console.log('Connected 3000 port!');
});
