var express = require('express');
var router = express.Router();
var usersControllers = require('../controllers/usersControllers')
var jwtVerify = require('../helpers/jwtVerify')

router.post('/signin', usersControllers.signIn)
router.post('/signup', usersControllers.signUp)
router.get('/users', jwtVerify.userVerify, jwtVerify.adminVerify, usersControllers.getAll)
router.delete('/users/:id', jwtVerify.userVerify, usersControllers.deleteUser)
router.get('/users/:id', jwtVerify.userVerify, usersControllers.getUser)
router.patch('/users/:id', jwtVerify.userVerify, usersControllers.updateUser)
router.post('/api/users', jwtVerify.userVerify, jwtVerify.adminVerify, usersControllers.signUpAdmin)

module.exports = router;
