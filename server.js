//REST API demo in Node.js
var express = require('express'); // requre the express framework
var app = express();
var fs = require('fs'); //require file system object
const mysql = require('mysql');


// Endpoint to Get a list of users
app.get('/getUsers',(req, res) => {
   const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '1234',
    database: 'metroevent'
})

db.query("SELECT * FROM user",(err, rows, fields)=>{
    console.log("Sucess");
    res.json(rows)
})
})

// Create a server to listen at port 8080
var server = app.listen(8080, function(){
    var host = server.address().address
    var port = server.address().port
    console.log("REST API demo app listening at http://%s:%s", host, port)
})