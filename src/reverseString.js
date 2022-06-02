const reverseString = (str) => {
  const string = str.toString().split('').reverse().join('');

  return string;
};

export default reverseString;
