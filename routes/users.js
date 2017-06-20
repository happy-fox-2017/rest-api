const express = require('express');

const router = express.Router();
const userController = require('../controllers/users');

const AuthUtils = require('../helpers/AuthUtils');

const isAuthorizedAsAdmin = AuthUtils.isAuthorizedAsAdmin;
const isAuthenticated = AuthUtils.isAuthenticated;

/* GET users listing. */
router.get('/', isAuthorizedAsAdmin, function(req, res, next) {
  userController.findAll(req, res);
});

router.get('/:id', isAuthenticated, function(req, res, next) {
  userController.findOne(req, res);
});

router.post('/', isAuthorizedAsAdmin, function(req, res, next) {
  userController.create(req, res, 'admin');
});

router.delete('/:id', isAuthorizedAsAdmin, function(req, res, next) {
  userController.delete(req, res);
});

router.put('/:id', isAuthenticated, function(req, res, next) {
  userController.update(req, res);
});

router.post('/add/dummy', function(req, res, next) {
  userController.create(req, res, 'admin');
});

module.exports = router;
