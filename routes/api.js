var express = require('express')
var router = express.Router()
var userController = require('../controller/userController')
var helper = require('../helper/auth')

router.post('/signup', userController.signup)
router.post('/signin', userController.signin)
router.get('/users/search', helper.authAdmin, userController.search)
router.get('/users', helper.authAdmin, userController.getAll)
router.get('/users/:id', helper.authAll, userController.getOne)
router.post('/users', helper.authAdmin, userController.create)
router.delete('/users/:id', helper.authAdmin, userController.remove)
router.put('/users/:id',helper.authAll, userController.update)

module.exports = router
