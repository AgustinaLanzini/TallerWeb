var express = require('express');
var router = express.Router();

var ctrlUsers = require('./controllers/usersCtrl');
var ctrlBooks = require('./controllers/booksCtrl');

router.get('/users/:id', ctrlUsers.getUsers);
router.post('/users', ctrlUsers.createUser);


module.exports = router;