var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

var ctrlUsers = require('./controllers/usersCtrl');
var ctrlBooks = require('./controllers/booksCtrl');


//GET
router.get('/users/:id', ctrlUsers.findUser);
router.get('/books', ctrlBooks.findMany);

//POST
router.post('/users', ctrlUsers.createUser); 
router.post('/books', ctrlBooks.createBooks);
router.post('/users/:id/read/:idbook', ctrlUsers.addBookReadToUser);
router.post('/users/:id/unread/:idbook', ctrlUsers.addBookUnreadToUser);

//PUT
router.put('/users/:id/read/:idbook', ctrlUsers.updateBookToUser);
router.put('/books/:id', ctrlBooks.updateBook);

//DELETE
router.delete('/users/:id/unread/:idbook', ctrlUsers.deleteBookUnreadToUser);
router.delete('/books/:id', ctrlBooks.deleteBook);


module.exports = router;