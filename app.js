//alumnas: Maylen Dell'Oso y Agustina Lanzini
var express = require('express');
//var bodyParser = require('body-parser');
var app = express();

//app.use(express.json());
//app.use(express.bodyParser());
//app.use(require('connect').bodyParser);
//app.use(express.urlencoded({extended:true}))


var routes = require('./api/routes');
app.use('/api', routes)



app.get('/', function(req,res){
	res.send("Bienvenida, te estaba esperando..");
});

app.listen(3000);


//esto es lo de la db lo puse aca p ver si andaba no mas
const mongoose = require('mongoose');
var Schema = mongoose.Schema;
var userSchema = require('./api/controllers/usersSchema');
var bookSchema = require('./api/controllers/booksSchema');
var bookModel = mongoose.model("Book", bookSchema);
var userModel = mongoose.model("User", userSchema);


console.log("hola");