const Calculator = require('./Calculator');

test('1 + 1 should be 2', () => {
  expect(new Calculator().add(1, 1)).toBe(2);
});
