const { basicValidation } = require('./../bcrypt/validateFunc');
const tokenForUser = require('./../bcrypt/jwt');
module.exports = {
  method: 'POST',
  path: '/signin',
  config: {
    auth: false,
  },
  handler: (request, reply) => {
    console.log(request.payload);
    const { email, password } = JSON.parse(request.payload);
    basicValidation(email, password, (err, res) => {
      if (err) {
        switch (err.message) {
          case 'database':
            reply({ error: 'database error' });
            return;
          case 'bcrypt':
            reply({ error: 'bcrypt error' });
            return;
          case 'User not found':
            reply({ error: 'User not found' });
            return;
        }
      }

      if (res === false) {
        reply({ error: 'wrong password' });
      } else {
        reply({ token: tokenForUser(res) });
      }
    });
  },
};
