const express = require('express');
const router = express.Router();
const models = require('../models');


/* GET users listing. */
router.get('/', function(req, res, next) {
  models.User.findAll({
    where: {},
  })
  .then((users) => {
    res.json({ users });
  });
});

router.get('/:id', function(req, res, next) {
  const id = req.params.id;
  models.User.findOne({
    where: { id },
  })
  .then((user) => {
    res.json({ user });
  });
});

router.post('/', function(req, res, next) {
  const userData = req.body;
  models.User.create(userData)
  .then((result) => {
    res.json({ result });
  });
});

router.delete('/:id', function(req, res, next) {
  const id = req.params.id;
  models.User.destroy({
    where: { id },
  })
  .then((result) => {
    res.json({ result });
  });
});

router.put('/:id', function(req, res, next) {
  const id = req.params.id;
  const userData = req.body;
  models.User.update(
    userData,
    { where: { id } })
  .then((result) => {
    res.json({ result });
  });
});

module.exports = router;
