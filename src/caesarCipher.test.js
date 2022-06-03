import caesarCipher from './caesarCipher';

test('returns something', () => {
  expect(caesarCipher('')).not.toBeUndefined();
});

test('returns strings', () => {
  expect(typeof caesarCipher('', '')).not.toBe('Number');
  expect(typeof caesarCipher('', '')).not.toBe('Object');
  expect(typeof caesarCipher(1, 1)).not.toBe('Number');
  expect(typeof caesarCipher(2.1, 1)).not.toBe('Number');
  expect(typeof caesarCipher('', 1)).toBe('string');
});

test('returns alphabet', () => {
  expect(caesarCipher('fuck', 1)).toMatch(/^[A-Za-z]+$/);
});

test('returns correct cipher', () => {
  expect(caesarCipher('fuck', 1)).toMatch('gvdl');
  expect(caesarCipher('fuck this shit', 1)).toMatch('gvdl uijt tiju');
});

// /^[A-Za-z]+$/;
