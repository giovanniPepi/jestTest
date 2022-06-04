const analyzeArray = (arr) => {
  let returnObj = {};
  const length = arr.length;
  const min = arr.reduce((a, b) => Math.min(a, b));
  const max = arr.reduce((a, b) => Math.max(a, b));
  const average = arr.reduce((a, b) => a + b) / length;

  returnObj = {
    length,
    min,
    max,
    avrg
  };

  console.log(returnObj, length, min, max, average);
  return returnObj;
};

analyzeArray([4, 8, 3, 1, 2, 6]);

// export default analyzeArray;
