const caesarCipher = (str, offset) => {
  let tempArray = [];
  let message = str.toString();
  message = message.split(' ');

  const alphabet = [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z'
  ];

  // gets letter index
  const getIndex = (char) => {
    const index = alphabet.indexOf(char);
    return index;
  };

  // gets message from index
  const getCrypted = (index) => {
    const letter = alphabet[index];
    return letter;
  };

  console.log(message);

  // each word is stored as an array, split them into characters
  message.forEach((element) => {
    tempArray.push(element.split(''));
  });

  console.log(tempArray);

  tempArray.forEach((e) => e.join(''));
  console.log(tempArray);

  // joins words on a single array
  tempArray = tempArray.reduce((prev, next) => prev.concat(next));
  console.log('shit', tempArray);

  // gets current index
  tempArray = tempArray.map((e) => getIndex(e));
  console.log(tempArray);

  // add cipher
  tempArray = tempArray.map((x) => x + offset);
  console.log(tempArray);

  // translate to chars
  message = tempArray.map((x) => getCrypted(x));
  console.log(message);

  message = message.join('');
  console.log(message);

  return message;
};

caesarCipher('fuck this shit', 1);

// export default caesarCipher;
