const hapi = require('hapi');
const server = new hapi.Server();
const hapi_auth_jwt2 = require('hapi-auth-jwt2');
const hapi_auth_basic = require('hapi-auth-basic');
const { validate } = require('./bcrypt/validateFunc');
const { basicValidation } = require('./bcrypt/validateFunc');
const routes = require('./routes/index');
require('env2')('./config.env');

server.connection({
  port: process.env.PORT || 4000,
  routes: { cors: true },
});

server.register([hapi_auth_basic, hapi_auth_jwt2], err => {
  if (err) {
    console.log(err);
    throw err;
  }

  server.auth.strategy('jwt', 'jwt', {
    key: process.env.SECRET,
    validateFunc: validate,
    verifyOptions: { algorithms: ['HS256'] },
  });

  server.auth.strategy('simple', 'basic', { validateFunc: basicValidation });

  server.auth.default('jwt');
  server.route(routes);
});

module.exports = server;
