const mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
	user: String,
	read: [{book: {type: mongoose.Schema.Types.ObjectId, ref: 'Book'}, score: Number, comment: String}],
	unread: [{book: {type: mongoose.Schema.Types.ObjectId, ref: 'Book'}}]	
});

var Users = mongoose.model("User", userSchema);

//GET
module.exports.findUser = function(req,res){
	//debería llamar a userSchema.statics.getUser(req.params.id);
	Users.find(req.query, function (err, docs) {
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
}

//POST
module.exports.createUser = function(req,res){
	//debería llamar a userSchema.statics.insertOne(req.params);
	if (req.body){
		Users.create({
			user: req.body.user,
			read: req.body.read,
			unread: req.body.unread,
		}, function (err, instance){
			if (err){
				res.status(404).json(err).end();
			}
			else
				res.status(201).json(instance).end();
		});
	}
	else
		res.status(404).json({"message": "No user details provided"}).end();
}

module.exports.addBookReadToUser = function(req,res){
	//debería llamar a userSchema.statics.insertBookRead(id, req.params);
	if (req.params.id){
		if (red.params.idbook){
			if (req.body){
				Users.updateOne({_id : req.params.id}, {$push: {read: req.body.review} }, function(err, instance){
					if (err){
						res.status(404).json(err).end();
					}
					else{
						Users.updateOne({_id : req.params.id}, {$pull: {read: {book: req.params.idbook} } }, function(err, instance){ 
							if (err){
								res.status(404).json(err).end();
							}
							else
								res.status(201).json(instance).end();
						});
					}
				});	
			}
			else
				Users.updateOne({_id : req.params.id}, {$push: {book: req.params.idbook}}, function(err, instance){
					if (err){
						res.status(404).json(err).end();
					}
					else{
						Users.updateOne({_id : req.params.id}, {$pull: {read: {book: req.params.idbook} } }, function(err, instance){ 
							if (err){
								res.status(404).json(err).end();
							}
							else
								res.status(201).json(instance).end();
						});
					}
				});			
		}
		else
			res.status(404).json({"message": "Book id must be provided"});
	}
	else
		res.status(404).json({"message": "User id must be provided"});
	
}

module.exports.addBookUnreadToUser = function(req,res){
	//debería llamar a userSchema.statics.insertBookUnread(id, req.params);

	if (req.params.id){
		if (red.params.idbook){
			Users.updateOne({_id : req.params.id}, {$push: {unread: {book: req.params.idbook} } }, function(err, instance){
				if (err){
					res.status(404).json(err).end();
				}
				else
					res.status(201).json(instance).end();
			});
		}
		else
		res.status(404).json({"message": "Book id must be provided"});
	}
	else
		res.status(404).json({"message": "User id must be provided"});
}

module.exports.updateBookToUser = function(req,res){
	//debería llamar a userSchema.statics.updateComment/Score(id, book, req.params);
	if (req.params.id){
		if (red.params.idbook){
			if (req.body.comment){
				Users.updateOne({_id : req.params.id, 'read.book': req.params.idbook}, {$set: {'read.$.comment' : req.body.comment}}, function(err, instance){
					if (err){
						res.status(404).json(err).end();
					}
					else
						res.status(201).json(instance).end();
				});
			}
			else{
				if (req.body.score){
					Users.updateOne({_id : req.params.id, 'read.book': req.params.idbook}, {$set: {'read.$.score' : req.body.score}}, function(err, instance){
						if (err){
							res.status(404).json(err).end();
						}
						else
							res.status(201).json(instance).end();
					});
				}
				else
					res.status(404).json({"message": "Review must be provided"});
			}
		}
		else
			res.status(404).json({"message": "Book id must be provided"});
	}
	else
		res.status(404).json({"message": "User id must be provided"});
}

//DELETE
module.exports.deleteBookUnreadToUser = function(req,res){
	//debería llamar a userSchema.statics.deleteBookUnread(id, book, req.params);
	
	if (req.params.id){
		if (red.params.idbook){
			Users.updateOne({_id : req.params.id}, {$pull: {unread: {book: req.params.idbook} } }, function(err, instance){
				if (err){
					res.status(404).json(err).end();
				}
				else
					res.status(202).json(instance).end();
			});
		}
		else
		res.status(404).json({"message": "Book id must be provided"});
	}
	else
		res.status(404).json({"message": "User id must be provided"});
}