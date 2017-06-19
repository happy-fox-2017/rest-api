var express = require('express');
var router = express.Router();
var db = require('../models')
var conn = require('../Controller/userController.js')
var auth = require('../helpers/helper.js')

/* GET users listing. */

router.get('/',auth, conn.findSemuaUsers);

router.get('/:id', conn.findMelaluiId);

router.post('/', auth, conn.bikinUser)

router.delete('/:id', auth, conn.hapusUser)

router.put('/:id', conn.perbaharuiUser)

module.exports = router;
