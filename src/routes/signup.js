const data = require('./../database/getData');
const postData = require('./../database/postData');

module.exports = {
  method: 'POST',
  path: '/signup',
  handler: (request, reply) => {
    const { email, password } = request.payload;

    data.getUsers(email, (err, res) => {
      if (err) console.log(err);

      if (res.length) {
        // reply({error: 'Email is in use'})
        reply.redirect('/');
      } else {
        postData.CreateUser(email, password, (err, res) => {
          if (err) reply('dad');
          else {
            reply({ success: true });
          }
        });
      }
    });
  },
};
