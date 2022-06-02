import reverseString from './reverseString';

test('returns something', () => {
  expect(reverseString('')).not.toBeUndefined();
});

test('returns string', () => {
  expect(typeof reverseString(2)).toBe('string');
  expect(reverseString(1)).not.toBe(1);
  expect(reverseString('$')).toBe('$');
  expect(reverseString(3.862)).not.toBe(3.862);
});
test('returns single word reversed', () => {
  expect(reverseString('hello')).toBe('olleh');
  expect(reverseString('Howdy')).toBe('ydwoH');
});
test('returns composed word reversed', () => {
  expect(reverseString('Greetings from Earth')).toBe('htraE morf sgniteerG');
});
