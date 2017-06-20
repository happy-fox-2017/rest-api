var express = require('express');
var router = express.Router();
const controller = require('../Controller/userController');
/* GET users listing. */
router.post('/signup', controller.signUp);

router.post('/signin', controller.signIn);

router.get('/users', controller.cekAdmin, controller.getAll);

router.get('/users/:id', controller.cekUser, controller.getOne);

router.post('/users', controller.cekAdmin, controller.signUp);

router.delete('/users/:id', controller.cekAdmin, controller.deleteOne);

router.put('/users/:id', controller.cekUser, controller.updateOne);

module.exports = router;
