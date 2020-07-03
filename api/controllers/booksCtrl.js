//GET
const mongoose = require('mongoose');
var Schema = mongoose.Schema;

var bookSchema = new Schema({
	title: String,
	author: [String],
	editorial: String,
	genre: [String],
	category: [String],
	pages: Number,
	year: Number,
	language: String,
	saga: String,
	description: String,
});

var Books = mongoose.model("Book", bookSchema);

module.exports.findMany = function(req,res){
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


module.exports.createBook = function(req,res){
	if (req.body){
		Books.create({
			title: req.body.title,
			author: req.body.author,
			editorial: req.body.editorial,
			genre: req.body.genre,
			category: req.body.category,
			pages: req.body.pages,
			year: req.body.year,
			language: req.body.language,
			saga: req.body.saga,
			description: req.body.description,
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
