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

router.post('/', function(req, res, next) {
  const userData = req.body;
  models.User.create(userData)
  .then((result) => {
    res.json({ result });
  });
});

module.exports = router;
