var express = require('express');
var router = express.Router();
var user = require('../controllers/user');
/* GET users listing. */
router.get('/', user.index);
router.get('/:id', user.show);

module.exports = router;
