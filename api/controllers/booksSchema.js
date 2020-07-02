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


bookSchema.statics.insertMany = function(instanceBooks){
	for (i in instanceBooks) {
		bookSchema.statics.insertOne(instanceBooks[i]);
	}
};

bookSchema.statics.insertOne = function(instanceBook){
	var instance = new bookModel({
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
	});
	instance.save(onInsertOneBook);

}

//Actualiza un atributo de un libro
bookSchema.methods.update = function(update){
	bookModel.updateOne({ _id : this._id}, {$set:update}, onUpdateBook);
}

//Busca libros según un criterio dado
//ej. filter {author: 'Franz Kafka'}
bookSchema.statics.findMany = function(filter){
	bookModel.find(filter, function (err, docs) {
			if (err){ console.info("Error al buscar el libro"); }
			else {
				console.info("La búsqueda fue exitosa");
				console.log('%s', docs); 
			}
	});

}

//Elimina un libro
bookSchema.methods.delete = function(){
	bookModel.deleteOne({ _id : this.id}, onDeleteOneBook);
} 

function onInsertManyBook(err){
	if (err){
		console.info("Error al almancenar los libros");
	}
	else {
		console.info("Los libros fueron exitosamente almacenados");
	}
}

function onInsertOneBook(err){
	if (err){
		console.info("Error al almancenar el libro");
	}
	else {
		console.info("El libro fue exitosamente almacenado");
	}
}

function onFindMany(err){
	if (err){
		console.info("Error al buscar el libro");
	}
	else {
		console.info("La búsqueda fue exitosa");
	}
}


function onUpdateBook(err){
	if (err){
		console.info("Error al actualizar el libro");
	}
	else{
		console.info("El libro fue exitosamente actualizado");
	}
	
}

function onDeleteOneBook(err){
	if (err){
		console.info("Error al eliminar el libro");
	}
	else{
		console.info("El libro fue exitosamente eliminado");
	}
}

module.exports = bookSchema;