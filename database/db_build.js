const fs = require('fs');
const connect = require('./db_connect');

const build = fs.readFileSync(`${__dirname}/db_build.sql`).toString();

connect.query(build, (err, res) => {
  if (err) throw err;
  console.log('db build successful');
});
