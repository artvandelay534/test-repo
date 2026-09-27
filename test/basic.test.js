const test = require('node:test');
const assert = require('node:assert/strict');

test('basic assertion passes', () => {
  assert.equal(1 + 1, 2);
});

test('two plus two equals four', () => {
  assert.equal(2 + 2, 4);
});
