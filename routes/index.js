var express = require('express')
var router = express.Router()
var c_user = require('../controllers/c_user.js')
router.get('/', function(req,res) {
  res.send('alive')
})
router.post('/api/signup', c_user.signup)
router.post('/api/signin', c_user.signin)

router.post('/api/users', c_user.add)
router.get('/api/users', c_user.getAll)
router.get('/api/users/:id', c_user.getById)
router.put('/api/users/:id', c_user.edit)
router.delete('/api/users:/id', c_user.remove)


module.exports = router
