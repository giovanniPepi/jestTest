import analyzeArray from './analyzeArray';

test('returns something', () => {
  expect(analyzeArray('')).not.toBeUndefined();
});

test('returns an Object', () => {
  expect(typeof analyzeArray([1, 8, 3, 4, 2, 6])).toBe('object');
});

const [average, min, max, length] = analyzeArray([1, 8, 3, 4, 2, 6]);

/* const average = analyzeObj.average;
const min = analyzeArray([1, 8, 3, 4, 2, 6]).min;
const max = analyzeArray([1, 8, 3, 4, 2, 6]).max;
const length = analyzeArray([1, 8, 3, 4, 2, 6]).length;
 */
test('returns an Object', () => {
  expect(average).toEqual(4);
  expect(min).toEqual(1);
  expect(max).toEqual(8);
  expect(length).toEqual(6);
});
