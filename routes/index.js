const express = require('express');
const router = express.Router();
const cUser = require('../controller/UserContoller');
const cMiddleware = require('../controller/Middlewarerole');

/* GET home page. */
router.get('/', function(req, res) {
    res.render('index', { title: 'Express' });
});

router.post('/api/signup', cUser.addDataUser);

router.post('/api/signin', cUser.signInUser);

router.get('/api/users', cMiddleware.admin , cUser.FindUser);

router.get('/api/users/:id', cMiddleware.user, cUser.FindUserbyId);

router.post('/api/users', cMiddleware.admin, cUser.addDataUser);

router.delete('/api/users/:id', cMiddleware.admin, cUser.deleteDataUser);

router.put('/api/users/:id', cMiddleware.user, cUser.updateDataUser);

module.exports = router;
