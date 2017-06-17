const data = require('./../database/getData');

const validate = (decoded, request, cb) => {
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

module.exports = validate;
