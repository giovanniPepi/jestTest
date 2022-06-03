import calculator from './calculator';

test('returns something', () => {
  expect(calculator('')).not.toBeUndefined();
  expect(calculator('', '', '')).not.toBeUndefined();
  expect(calculator('', '-', '')).not.toBeUndefined();
  expect(calculator('', '+', '')).not.toBeUndefined();
  expect(calculator('', '%', '')).not.toBeUndefined();
});

test('returns only numbers', () => {
  expect(typeof calculator('')).toBe('number');
});

test('returns only numbers', () => {
  expect(typeof calculator('')).toBe('number');
});

test('returns 0 on wrong operators', () => {
  expect(calculator(1, 'uhaeuahe', 2)).toBe(0);
  expect(calculator(1, 1, 2)).toBe(0);
  expect(calculator('+', 1, 2)).toBe(0);
  expect(calculator(1, 1, '+')).toBe(0);
  expect(calculator('+', 1, '+')).toBe(0);
  expect(calculator('hello', 'there', 'general Kenobi!')).toBe(0);
});

test('adds numbers', () => {
  expect(calculator(1, '+', 2)).toEqual(3);
  expect(calculator(-1, '+', 2)).toEqual(1);
  expect(calculator(1, '+', -2)).toEqual(-1);
  expect(calculator(5454545454, '+', 5454545454)).toEqual(10909090908);
});

test('subtracts numbers', () => {
  expect(calculator(1, '-', 2)).toEqual(-1);
  expect(calculator(-1, '-', 2)).toEqual(-3);
  expect(calculator(1, '-', -2)).toEqual(3);
  expect(calculator(5454545454, '-', 5454545454)).toEqual(0);
});

test('divide numbers rightfully and not by zero', () => {
  expect(calculator(1, '/', 1)).toEqual(1);
  expect(calculator(10, '/', 2)).toEqual(5);
  expect(calculator(100, '/', 0)).toBe('Division by zero is undefined');
  expect(calculator(5454545454, '/', 5454545454)).toEqual(1);
  expect(calculator(0, '/', 0)).toBe('Division by zero is undefined');
  expect(calculator(0, '/', 1)).toEqual(0);
});

test('multiply numbers', () => {
  expect(calculator(1, '*', 2)).toEqual(2);
  expect(calculator(-1, '*', 2)).toEqual(-2);
  expect(calculator(-1, '*', 0)).toEqual(-0);
  expect(calculator(5, '*', 0)).toEqual(0);
  expect(calculator(1, '*', -2)).toEqual(-2);
  expect(calculator(1024, '*', 1024)).toEqual(1048576);
  expect(calculator(-2, '*', -2)).toEqual(4);
});
