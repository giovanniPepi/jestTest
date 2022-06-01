import capitalize from './capitalize';

test('returns empty str', () => {
  expect(capitalize('')).toBe('');
  expect(capitalize('')).not.toBeUndefined();
});

test('returns string', () => {
  expect(typeof capitalize(2)).toBe('string');
  expect(capitalize(1)).not.toBe(1);
  expect(capitalize('$')).toBe('$');
  expect(capitalize(3.862)).not.toBe(3.862);
});

test('returns first letter capitalized', () => {
  expect(capitalize('john')).toBe('John');
  expect(capitalize('aeuhaudhsuahsdu')).toBe('Aeuhaudhsuahsdu');
});

test('accepts composed str', () => {
  expect(capitalize('john smith')).toBe('John Smith');
});

test('accepts multiple composed str', () => {
  expect(capitalize('john smith da silva santos dickinson')).toBe(
    'John Smith Da Silva Santos Dickinson'
  );
});
