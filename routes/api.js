var express = require('express');
var router = express.Router();
var db = require('../models')
var conn = require('../Controller/userController.js')
var bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');

/* GET users listing. */
router.post('/signup', conn.bikinUser)

router.post('/signin', conn.signin)

module.exports = router;
