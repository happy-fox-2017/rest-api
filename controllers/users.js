const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const models = require('../models');

const saltRounds = 10;
const TOKEN_PASSWORD = 'mypassword';

const sendLoginFailedMessage = function(req, res) {
  res.send('Invalid username or password', 403);
};

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
  const password = userData.password;

  bcrypt.genSalt(saltRounds, function(err, salt) {
    bcrypt.hash(password, salt, function(err, hash) {
      userData.password = hash;
      models.User.create(userData)
      .then((result) => {
        res.json({ result });
      });
    });
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
  delete userData.password;
  models.User.update(
    userData,
    { where: { id } })
  .then((result) => {
    res.json({ result });
  });
};

exports.signIn = function(req, res) {
  const username = req.body.username;
  const password = req.body.password;

  models.User.findOne({
    where: { username },
  })
  .then((user) => {
    if (user !== null) {
      bcrypt.compare(password, user.password, function(err, bcryptResult) {
        if (bcryptResult) {
          const token = jwt.sign({
            name: user.name,
            role: user.role
          }, TOKEN_PASSWORD);
          res.send(token);
        } else {
          sendLoginFailedMessage(req, res);
        }
      });
    } else {
      sendLoginFailedMessage(req, res);
    }
  });
};
