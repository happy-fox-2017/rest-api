var express = require('express')
var router = express.Router()
var userController = require('../controller/userController')

// router.post('/signup', userController.signup)
// router.post('/signin', userController.signin)
router.get('/users', userController.getAll)
router.get('/users/search', userController.search)
router.get('/users/:id', userController.getOne)
router.post('/users', userController.create)
router.delete('/users/:id', userController.remove)
router.put('/users/:id', userController.update)
// router.patch('/users/:id', userController.patch)

module.exports = router
