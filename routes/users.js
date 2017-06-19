const express = require('express');

const router = express.Router();
const userController = require('../controllers/users');

const isAuthorized = require('../helpers/AuthUtils');

/* GET users listing. */
router.get('/', isAuthorized, function(req, res, next) {
  userController.findAll(req, res);
});

router.get('/:id', function(req, res, next) {
  userController.findAOne(req, res);
});

router.post('/', function(req, res, next) {
  userController.create(req, res);
});

router.delete('/:id', function(req, res, next) {
  userController.delete(req, res);
});

router.put('/:id', function(req, res, next) {
  userController.update(req, res);
});

module.exports = router;
