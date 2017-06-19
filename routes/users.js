var express = require('express');
var router = express.Router();
var user = require('../controllers/user');
var passport = require('passport');
var midleware = require('../helpers/token')
/* GET users listing. */
router.get('/', midleware.adminOnly, user.index);
router.get('/:id', user.show);
router.post('/signup', user.signup);
router.post('/signin', passport.authenticate('local', {session:false}), user.signin);
router.put('/:id', midleware.adminOnly, user.update);


module.exports = router;
