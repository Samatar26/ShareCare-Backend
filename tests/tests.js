const test = require('tape');
require('./routes');
test('Test for Travis', t => {
  t.pass('Passing test');
  t.end();
});
