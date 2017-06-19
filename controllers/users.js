const models = require('../models');

exports.findAll = function(req, res) {
  models.User.findAll({
    where: {},
  })
  .then((users) => {
    res.json({ users });
  });
};

exports.findOne = function(req, res) {
  const id = req.params.id;
  models.User.findOne({
    where: { id },
  })
  .then((user) => {
    res.json({ user });
  });
};

exports.create = function(req, res) {
  const userData = req.body;
  models.User.create(userData)
  .then((result) => {
    res.json({ result });
  });
};

exports.delete = function(req, res) {
  const id = req.params.id;
  models.User.destroy({
    where: { id },
  })
  .then((result) => {
    res.json({ result });
  });
};

exports.update = function(req, res) {
  const id = req.params.id;
  const userData = req.body;
  models.User.update(
    userData,
    { where: { id } })
  .then((result) => {
    res.json({ result });
  });
}
