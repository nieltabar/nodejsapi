//REST API demo in Node.js
var express = require('express'); // requre the express framework
var app = express();
var fs = require('fs'); //require file system object

app.get('/', function(req, res){
        res.send("Hello World"); 
}
// Endpoint to Get a list of users
app.get('/getUsers', function(req, res){
    fs.readFile(__dirname + "/" + "users.json", 'utf8', function(err, data){
        console.log(data);
        res.send(data); // you can also use res.send()
    })
})

// Create a server to listen at port 8080
var server = app.listen(process.env.PORT 8080, function(){
    var host = server.address().address
    var port = server.address().port
    console.log("REST API demo app listening at http://%s:%s", host, port)
})