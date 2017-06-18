const data = require('./../database/getData');
const postData = require('./../database/postData');
const encryptPassword = require('./../bcrypt/bcrypt');
const tokenForUser = require('./../bcrypt/jwt');

module.exports = {
  method: 'POST',
  path: '/signup',
  config: {
    auth: false,
  },
  handler: (request, reply) => {
    const { email, password } = JSON.parse(request.payload);
    const hashedPassword = encryptPassword(password).then(hashedPassword => {
      data.getUsers(email, (err, res) => {
        console.log(email, password);
        if (err) console.log('THEEEE RERRROOROR', err);
        if (res.length) {
          console.log(res[0].email);
          // reply({error: 'Email is in use'})
          reply({ error: 'Email is in use' });
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
