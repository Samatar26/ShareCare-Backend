const hapi = require('hapi');
const server = new hapi.Server();
const routes = require('./routes');

server.connection({
  port: process.env.PORT || 4000,
});

server.route(routes);

module.exports = server;
