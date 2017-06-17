const bcrypt = require('bcrypt-nodejs');

module.exports = (plainPassword, cb) => {
  return new Promise((resolve, reject) => {
    bcrypt.genSalt(10, (err, salt) => {
      if (err) {
        reject(err);
        return;
      }

      bcrypt.hash(plainPassword, salt, null, (err, hash) => {
        if (err) {
          reject(err);
          return;
        }
        resolve(hash);
      });
    });
  });
};
