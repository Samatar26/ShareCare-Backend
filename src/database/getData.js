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

data.getUsersById = (inputId, cb) => {
  connection.query(
    `SELECT * FROM users WHERE id = '${inputId}'`,
    (err, res) => {
      if (err) return cb(err);
      cb(null, res.rows);
    }
  );
};

data.getHomeOwners = cb => {
  connection.query('Select * FROM HomeownerProfile', (err, res) => {
    if (err) return cb(err);
    cb(null, res.rows);
  });
};

module.exports = data;
