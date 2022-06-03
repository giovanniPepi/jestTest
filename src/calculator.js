const calculator = (num1, operator, num2) => {
  let x;
  let y;

  if (num1 === undefined || num1 === null || num1 === '') x = 0;
  if (num2 === undefined || num2 === null || num2 === '') y = 0;

  x = Number(num1);
  y = Number(num2);

  let result;

  const maths = {
    add: x + y,
    subtract: x - y,
    divide: x / y,
    multiply: x * y
  };

  switch (operator) {
    case '+':
      result = maths.add;
      return result;
    case '-':
      result = maths.subtract;
      return result;
    case '/':
      if (y === 0) result = 'Division by zero is undefined';
      else result = maths.divide;
      return result;
    case '*':
      result = maths.multiply;
      return result;
    default:
      result = 0;
      return result;
  }
};

// calculator('', '-', '');

export default calculator;
