const data = require('./../database/getData');

module.exports = {
  method: 'POST',
  path: '/signup',
  handler: (request, reply) => {
    const { email, password } = request.payload;
    data.getUsers(email, (err, res) => {
      if (err) console.log(err);

      if (res.length) {
        reply.redirect('/');
      } else {
        reply('ok');
      }
    });
    // const { email, password } = request.body;
  },
};
