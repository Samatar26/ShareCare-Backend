const { basicValidation } = require('./../bcrypt/validateFunc');
const tokenForUser = require('./../bcrypt/jwt');
module.exports = {
  method: 'POST',
  path: '/signin',
  config: {
    auth: false,
  },
  handler: (request, reply) => {
    const { email, password } = request.payload;
    console.log(email, password);
    basicValidation(email, password, (err, res) => {
      if (err) {
        console.log(err);
        return err;
      }
      reply({ token: tokenForUser(res) });
    });
  },
};
