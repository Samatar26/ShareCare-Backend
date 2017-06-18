const server = require('./../src/server');
const test = require('tape');

test('/ GET route', t => {
  const options = {
    url: '/',
    method: 'GET',
  };
  server.inject(options, res => {
    t.equal(res.statusCode, 401, 'statusCode should be 401');
    t.equal(
      res.payload,
      JSON.stringify({
        statusCode: 401,
        error: 'Unauthorized',
        message: 'Missing authentication',
      })
    );
  });
  t.end();
});
