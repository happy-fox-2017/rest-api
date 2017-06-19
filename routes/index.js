var express = require('express')
var router = express.Router()
var c_user = require('../controllers/c_user.js')
var authorization = require('../controllers/auth')

router.get('/', function(req,res) {
  res.send('https://erwin-rest-api.herokuapp.com/ | https://git.heroku.com/erwin-rest-api.git')
})

router.post('/api/signup', c_user.signup)
router.post('/api/signin', c_user.signin)

router.post('/api/users', authorization.authAdmin, c_user.add)
router.get('/api/users', authorization.authAdmin, c_user.getAll)
router.get('/api/users/:id', authorization.all, c_user.getById)
router.put('/api/users/:id', authorization.all, c_user.edit)
router.delete('/api/users/:id', authorization.authAdmin, c_user.remove)


module.exports = router
