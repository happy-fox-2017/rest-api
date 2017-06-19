var express = require('express');
var router = express.Router();
var usersControllers = require('../controllers/usersControllers')
var jwtVerify = require('../helpers/jwtVerify')

router.post('/signin', usersControllers.signIn)
router.post('/signup', usersControllers.signUp)
router.get('/users', jwtVerify.userVerify, jwtVerify.adminVerify, usersControllers.getAll)

module.exports = router;
