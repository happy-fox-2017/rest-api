var jwt = require('jsonwebtoken');

let validation = (req,res,next) =>{
  let roleType = jwt.verify(req.headers.token, 'secret-key')
  if (roleType.role == 'admin') {  
    next()
  }else {
    res.send('you not authorized')
  }
};

module.exports = validation;