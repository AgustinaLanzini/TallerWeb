
module.exports.getUsers = function(req,res){
	//res.send("Aquí tienes tus usuarios");
	console.log(req.params.id);
	//sendJsonResponse(res, 200, {'message': 'Aquí tan'});
	res.set('Content-Type', 'application/json');
	res.status(200);
	res.send(JSON.stringify({'message': 'Aquí tan'}));
}

module.exports.createUser = function(req,res){
	console.log(req.body.id);
	//sendJsonResponse(res, 200, {'message': 'Aquí tan'});
	res.set('Content-Type', 'application/json');
	res.status(200);
	res.send(JSON.stringify({'message': 'Oko'}));
}

