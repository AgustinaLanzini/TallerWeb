//GET
module.exports.findUser = function(req,res){
	//debería llamar a
	//userSchema.statics.getUser(req.params.id);
	console.log(req.params.id);
	res.set('Content-Type', 'application/json');
	res.status(200);
	res.send(JSON.stringify({'message': 'Usuario enviado'}));
}

//POST
module.exports.createUser = function(req,res){
	//debería llamar a
	//userSchema.statics.insertOne(req.params);
	console.log(req.body);
	res.set('Content-Type', 'application/json');
	res.status(200);
	res.send(JSON.stringify({'message': 'Usuario almacenado'}));
}

module.exports.addBookReadToUser = function(req,res){
	//debería llamar a
	//userSchema.statics.insertBookRead(id, req.params);
	console.log(req.body);
	res.set('Content-Type', 'application/json');
	res.status(200);
	res.send(JSON.stringify({'message': 'Se almacenado el libro leído al usuario'}));
}

module.exports.addBookUnreadToUser = function(req,res){
	//debería llamar a
	//userSchema.statics.insertBookUnread(id, req.params);
	console.log(req.params);
	res.set('Content-Type', 'application/json');
	res.status(200);
	res.send(JSON.stringify({'message': 'Se almacenado el libro por leer al usuario'}));
}

module.exports.updateBookToUser = function(req,res){
	//debería llamar a
	//userSchema.statics.updateComment/Score(id, book, req.params);
	console.log(req.body);
	res.set('Content-Type', 'application/json');
	res.status(200);
	res.send(JSON.stringify({'message': 'Se modifico la review del libro al usuario'}));
}

module.exports.deleteBookUnreadToUser = function(req,res){
	//debería llamar a
	//userSchema.statics.deleteBookUnread(id, book, req.params);
	console.log(req.params);
	res.set('Content-Type', 'application/json');
	res.status(200);
	res.send(JSON.stringify({'message': 'Se elimino el libro por leer al usuario'}));
}



