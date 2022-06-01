const capitalize = (str) => {
  // returns empty if empty
  if (str === '') return '';

  let returnStr = str.toString();
  const words = returnStr.split(' ');

  for (let i = 0; i < words.length; i++) {
    words[i] = words[i][0].toUpperCase() + words[i].substr(1);
  }
  returnStr = words.join(' ');
  // returnStr = returnStr.slice(0, 1).toUpperCase() + returnStr.substring(1);

  return returnStr;
};
export default capitalize;
