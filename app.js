//alumnas: Maylen Dell'Oso y Agustina Lanzini
var express = require('express');
var app = express();

app.use(express.json());

//rutas de la api
var routes = require('./api/routes');
app.use('/api', routes)

//empiezo a escuchar en port 3000
app.listen(3000, function(err, cb){
	console.log("Escuchando en el port 3000");
});


//conexión a la db acá

//esto es lo de la db lo puse aca p ver si andaba no mas
const mongoose = require('mongoose');

mongoose.connect("mongodb://Admin:1234@localhost:27017/biblioteca", {useNewUrlParser: true, useUnifiedTopology: true}, function (err) {
	if (err) throw err;
	else {	console.log('Successfully connected'); }
});

//esto no va pq no deberia existir mas
/*
var userModel = require('./api/controllers/users');
var bookModel = require('./api/controllers/books');

*/

