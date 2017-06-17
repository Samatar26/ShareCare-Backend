const jwt = require('jwt-simple');

module.exports = tokenForUser = user => {
  const timeStamp = new Date().getTime();
  return jwt.encode({ sub: user.id, iat: timeStamp }, process.env.SECRET);
};
