const mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
	user: String,
	read: [{book: {type: mongoose.Schema.Types.ObjectId, ref: 'Book'}, score: Number, comment: String}],
	unread: [{book: {type: mongoose.Schema.Types.ObjectId, ref: 'Book'}}]	
});

userSchema.statics.insertOne = function(instanceUser){
	var instance = new userModel({
		user: instanceUser.user,
		read: instanceUser.read,
		unread: instanceUser.unread,
	});
	instance.save(onInsertOneUser)
}

//Inserta una referencia a un libro y su valoración a la lista de leídos
//ej. review: {book: "5edd13639a284307015fc4cb", comment: "comentariofdss", score: 3}
userSchema.statics.insertBookRead = function(id, review){
	userModel.updateOne({ _id : id}, {$push: {read: review}}, onInsertBookRead);
	userModel.updateOne({ _id : id}, {$pull: {unread: {book: review.book} } }, onDeleteBookUnread);
}

//Inserta una referencia a un libro a la lista por leer
//ej. book: {book: "5edd13639a284307015fc4cb"}
userSchema.statics.insertBookUnread = function(id, book){
	userModel.updateOne({ _id : id}, {$push: {unread : book}}, onInsertBookRead);
}

//Modifica el comentario de un libro leído
userSchema.statics.updateComment = function(id, book, review){
	userModel.updateOne({ _id : id, 'read.book': book }, {$set: {'read.$.comment' : review}}, onUpdateComment);
}

//Modifica el puntaje de un libro leído
userSchema.statics.updateScore = function(id, book, review){
	userModel.updateOne({ _id : id, 'read.book': book }, {$set: {'read.$.score' : review}}, onUpdateScore);
}


//Elimina un libro de la lista por leer.
//recibe un string de un id
userSchema.statics.deleteBookUnread = function(id, book){
	userModel.updateOne({ _id : id}, {$pull: {unread: {book: book} } }, onDeleteBookUnread);
}


function onInsertOneUser(err){
	if (err){
		console.info("Error al almancenar el usuario");
	}
	else {
		console.info("El usuario fue exitosamente almacenado");
	}
}

function onInsertBookRead(err){
	if (err){
		console.info("Error al agregar el libro a la lista");
	}
	else {
		console.info("El libro fue exitosamente agregado");
	}
}

function onUpdateComment(err){
	if (err){
		console.info("Error al agregar el modificar el comentario");
	}
	else {
		console.info("El comentario fue exitosamente agregado");
	}
}

function onUpdateScore(err){
	if (err){
		console.info("Error al agregar el modificar el puntaje");
	}
	else {
		console.info("El puntaje fue exitosamente agregado");
	}
}

function onDeleteBookUnread(err){
	if (err){
		console.info("Error al eliminar el libro de la lista");
	}
	else {
		console.info("El libro fue exitosamente eliminado de la lista");
	}
}

module.exports = mongoose.model("User", userSchema);