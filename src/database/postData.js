const connection = require('./../../database_build/db_connect.js');

const postData = {};

postData.CreateUser = (inputEmail, inputPassword, cb) => {
  connection.query(
    `INSERT into users (email, password) VALUES ('${inputEmail}', '${inputPassword}')`,
    (err, res) => {
      if (err) return cb(err);
      cb(null, res.rows);
    }
  );
};

module.exports = postData;
