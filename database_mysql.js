var mysql = require('mysql');
var connection = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : 'dkgk6979',
    database : 'o2'
});

connection.connect();

// var sql = 'SELECT * FROM topic';
// connection.query(sql, (err, rows, fields)=>{
//     if(err){
//         console.log(err);
//     }
//     else{
//         for(var i = 0; i < rows.length; i++)
//         {
//             console.log(rows[i].author);
//         }
//     }
// });

var sql = 'delete from topic where id=?';
var params = [1];
connection.query(sql, params, (err, rows, fields)=>{
    if(err){
        console.log(err);
    }
    else{
        console.log(rows);
    }
})
connection.end();