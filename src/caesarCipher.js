const caesarCipher = (str, offset) => {
  let message = str.toString();
  message = message.split('');

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

  // gets message fropm index
  const getCrypted = (index) => {
    const letter = alphabet[index];
    return letter;
  };

  console.log(message);
  // gets current index
  message = message.map((x) => getIndex(x));
  console.log(message);

  message = message.map((x) => x + offset);
  console.log(message);

  // returns ciphered array and joins it
  message = message.map((x) => getCrypted(x)).join('');
  console.log(message);

  return message;
};

// caesarCipher('fuck', 1);

export default caesarCipher;
