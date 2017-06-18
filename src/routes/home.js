module.exports = {
  method: 'GET',
  path: '/',
  handler: (request, reply) => {
    reply({ message: 'Super secret code is ABC123' });
  },
};
