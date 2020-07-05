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

//GET
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
	if (req.params.id){
		if (req.body){
			Books.updateOne({ _id : req.params.id}, {$set: req.body}, function(err, instance){
				if (err){
					res.status(404).json(err).end();
				}
				else
					res.status(200).json(instance).end();
			});
		}
		else
			res.status(404).json({"message": "Update must be provided"}).end();
	}
	else
		res.status(404).json({"message": "Book id must be provided"}).end();
}

//DELETE
module.exports.deleteBook = function(req,res){
	if (req.params.id){
		Books.deleteOne({ _id : req.params.id}, function(err, instance){
			if (err){
				res.status(404).json(err).end();
			}
			else
				res.status(202).json(instance).end();
		});
	}
	else
		res.status(404).json({"message": "Book id must be provided"}).end();
}
