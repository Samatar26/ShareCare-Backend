const connection = require('./../../database_build/db_connect.js');

const data = {};

data.getUsers = (inputEmail, cb) => {
  connection.query(
    `SELECT * FROM users WHERE email = '${inputEmail}'`,
    (err, res) => {
      if (err) return cb(err);
      cb(null, res.rows);
    }
  );
};

module.exports = data;