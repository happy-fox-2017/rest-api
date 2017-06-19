var express = require('express');
var router = express.Router();
var db = require('../models')
var conn = require('../Controller/userController.js')

/* GET users listing. */

router.get('/', conn.findSemua);

router.get('/:id', conn.findMelaluiId);

router.post('/', conn.bikin)

router.delete('/:id', conn.hapus)

router.put('/:id', conn.perbaharui)

module.exports = router;
