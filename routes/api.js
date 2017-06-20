var express = require('express');
var router = express.Router();
var db = require('../models');
var controller = require('../controllers/userController');

/* GET users listing. */
router.post('/signup', controller.signup);

router.post('/signin', controller.signin);



module.exports = router;
