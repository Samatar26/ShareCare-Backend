const data = require('./../database/getData');
const postData = require('./../database/postData');
const encryptPassword = require('./../bcrypt/bcrypt');
const tokenForUser = require('./../bcrypt/jwt');

module.exports = {
  method: 'POST',
  path: '/signup',
  handler: (request, reply) => {
    console.log(process.env.SECRET);
    const { email, password } = request.payload;
    const hashedPassword = encryptPassword(password).then(hashedPassword => {
      data.getUsers(email, (err, res) => {
        if (err) console.log(err);

        if (res.length) {
          // reply({error: 'Email is in use'})
          reply.redirect('/');
        } else {
          postData.CreateUser(email, hashedPassword, (err, res) => {
            if (err) reply('dad');
            else {
              data.getUsers(email, (err, res) => {
                if (err) console.log(err);
                reply({ token: tokenForUser(res[0]) });
              });
            }
          });
        }
      });
    });
  },
};
