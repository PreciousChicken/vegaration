const subtract = require('./minus');

test('substract 2 - 1 to equal 1', () => {
  expect(subtract(2, 1)).toBe(1);
});