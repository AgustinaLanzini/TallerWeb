//GET
module.exports.findMany = function(req,res){
	//llamar bookSchema.statics.findMany(filter)
	/*
	console.log(req.query);
	res.set('Content-Type', 'application/json');
	res.status(200);
	res.send(JSON.stringify({'message': 'Libros enviados'}));
	*/

	Books.find(req.query, function (err, docs) {
		if (err){ 
			res.status(404).json(err).end();
		}
		else {
			if (!docs){
				res.status(404).json({"message": "No results found"}).end();
			}
			res.status(200).json(docs).end();
		}
	});
};


module.exports.createBooks = function(req,res){
	//llamar bookSchema.statics.insertMany(req)
	/*
	console.log(req.body);
	res.set('Content-Type', 'application/json');
	res.status(200);
	res.send(JSON.stringify({'message': 'Libros agregados'}));
	*/
	if (req.body){
		Books.create({
			title: instanceBook.title,
			author: instanceBook.author,
			editorial: instanceBook.editorial,
			genre: instanceBook.genre,
			category: instanceBook.category,
			pages: instanceBook.pages,
			year: instanceBook.year,
			language: instanceBook.language,
			saga: instanceBook.saga,
			description: instanceBook.description,
		}, function (err, instance){
			if (err){
				res.status(404).json(err).end();
			}
			else
				res.status(201).json(instance).end();
		});
	}
	else
		res.status(404).json({"message": "No book details provided"}).end();
}

module.exports.updateBook = function(req,res){
	//llamar bookSchema.statics.updateBook(id, req)
	console.log(req.body);
	res.set('Content-Type', 'application/json');
	res.status(200);
	res.send(JSON.stringify({'message': 'Libro actualizado'}));
}

module.exports.deleteBook = function(req,res){
	//llamar bookSchema.statics.delete(id)
	console.log(req.params);
	res.set('Content-Type', 'application/json');
	res.status(200);
	res.send(JSON.stringify({'message': 'Libro eliminado'}));
}
