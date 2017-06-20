var express = require('express');
var router = express.Router();
var db = require('../models');
var controller = require('../controllers/userController');
var auth = require('../helpers/helper')


/* GET users listing. */

router.get('/', auth, controller.findAll);

router.get('/:id', controller.findOne);

router.post('/', auth, controller.createUser);

router.delete('/:id', auth, controller.deleteUser);

router.put('/:id', controller.updateUser);



module.exports = router;
