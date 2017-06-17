const hapi = require('hapi');
const server = new hapi.Server();
const hapi_auth_jwt2 = require('hapi-auth-jwt2');
const validate = require('./bcrypt/validateFunc');
const routes = require('./routes/index');
require('env2')('./config.env');

server.connection({
  port: process.env.PORT || 4000,
});

server.register([hapi_auth_jwt2], err => {
  if (err) {
    console.log(err);
    throw err;
  }

  server.auth.strategy('jwt', 'jwt', {
    key: process.env.SECRET,
    validateFunc: validate,
    verifyOptions: { algorithms: ['HS256'] },
  });

  server.auth.default('jwt');
  server.route(routes);
});

module.exports = server;
