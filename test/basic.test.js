const test = require('node:test');
const assert = require('node:assert/strict');

test('basic assertion passes', () => {
  assert.equal(1 + 1, 2);
});
