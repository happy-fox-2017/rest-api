const bcrypt = require('bcrypt');

let hassing = function(passwordPlain, saltRounds = 10) {

    let salt = bcrypt.genSaltSync(saltRounds);
    let hash = bcrypt.hashSync(passwordPlain, salt);
    return hash;
};

let checkHassing = function (Plain, hassing) {
    let result = bcrypt.compareSync(Plain, hassing);
    return result
};

module.exports = {hassing,checkHassing};