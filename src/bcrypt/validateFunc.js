const data = require('./../database/getData');
const bcrypt = require('bcrypt-nodejs');
const validate = (decoded, request, cb) => {
  console.log('ok');
  console.log(decoded);
  data.getUsersById(decoded.sub, (err, res) => {
    if (err) {
      console.log(err);
      return err;
    }
    if (res.length) {
      return cb(null, true);
    } else {
      return cb(null, false);
    }
  });
};

const basicValidation = (email, inputPassword, cb) => {
  data.getUsers(email, (err, res) => {
    if (err) return cb(err);
    if (res.length) {
      bcrypt.compare(inputPassword, res[0].password, (err, isMatch) => {
        if (err) return cb(err);
        return cb(null, res[0]);
      });
    } else {
      return cb(new Error('user not found'));
    }
  });
};
module.exports = { validate, basicValidation };
