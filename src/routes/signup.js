const data = require('./../database/getData');
const postData = require('./../database/postData');
const encryptPassword = require('./../bcrypt/bcrypt');
module.exports = {
  method: 'POST',
  path: '/signup',
  handler: (request, reply) => {
    const { email, password } = request.payload;
    const hashedPassword = encryptPassword(password).then(hashedPassword => {
      data.getUsers(email, (err, res) => {
        if (err) console.log(err);

        if (res.length) {
          // reply({error: 'Email is in use'})
          reply.redirect('/');
        } else {
          postData.CreateUser(email, hashedPassword, (err, res) => {
            console.log(err, hashedPassword);
            if (err) reply('dad');
            else {
              reply({ success: true });
            }
          });
        }
      });
    });
  },
};
