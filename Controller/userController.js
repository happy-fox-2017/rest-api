var bcrypt = require('bcrypt');
var salt = bcrypt.genSaltSync(10);

let findSemua = function(req, res, next) {
  db.User.findAll()
  .then((users) => {
    res.send(users)
  })
}

let findMelaluiId = function(req, res, next) {
  db.User.findById(req.params.id)
  .then((user) => {
    res.send(user)
  })
}

let bikin = function(req, res, next){
  let hashNih = function(pass) {
    var hash = bcrypt.hashSync(pass, salt);
    return hash
  };

  db.User.create({
    username: req.body.username,
    password: hashNih(req.body.password),
    role: 'user'
  })
  .then(() => {
    res.send('data created');
  })
}

let hapus =  function(req, res) {
  db.User.destroy({
    where: {
      id: req.params.id
    }
  })
  .then(() => {
    res.send('data deleted')
  })
}

let perbaharui =  function(req,res) {
  db.User.update({
    name: req.body.name
  },{
    where: {
      id: req.params.id
    }
  })
  .then(() => {
    res.send('data updated')
  })
}

module.exports = {findSemua, findMelaluiId, bikin, hapus, perbaharui};