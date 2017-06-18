const data = require('./../database/getData');

module.exports = {
  method: 'GET',
  path: '/',
  handler: (request, reply) => {
    data.getHomeOwners((err, res) => {
      if (err) return reply({ error: 'Database connection error' });
      reply(res);
    });
  },
};
