var express = require('express');
var router = express.Router();

const userController = require('../controllers/users');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/signup', function(req, res, next) {
  userController.create(req, res, 'user');
});

router.post('/signin', function(req, res, next) {
  userController.signIn(req, res);
});

module.exports = router;
