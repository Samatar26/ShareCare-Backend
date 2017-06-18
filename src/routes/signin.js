const { basicValidation } = require('./../bcrypt/validateFunc');
const tokenForUser = require('./../bcrypt/jwt');
module.exports = {
  method: 'POST',
  path: '/signin',
  config: {
    auth: false,
  },
  handler: (request, reply) => {
    const { email, password } = JSON.parse(request.payload);
    basicValidation(email, password, (err, res) => {
      if (err) {
        switch (err.message) {
          case 'database':
            reply('database error');
            return;
          case 'bcrypt':
            reply('bcrypt error');
            return;
          case 'User not found':
            reply('user doesnt exist');
            return;
        }
      }

      if (res === false) {
        reply('wrong password');
      } else {
        reply({ token: tokenForUser(res) });
      }
    });
  },
};
