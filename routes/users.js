var express = require('express');
var router = express.Router();
var db = require('../models')
var conn = require('../Controller/userController.js')
var auth = require('../helpers/helper.js')

/* GET users listing. */

router.get('/',auth.authAdmin, conn.findSemuaUsers);

router.get('/:id', auth.authUser, conn.findMelaluiId);

router.post('/', auth.authAdmin, conn.bikinUser)

router.delete('/:id', auth.authAdmin, conn.hapusUser)

router.put('/:id', auth.authUser conn.perbaharuiUser)

module.exports = router;
