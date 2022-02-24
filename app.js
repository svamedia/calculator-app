// Create a new function operate that takes an operator and 2 numbers and then calls one of the basic math operators on the numbers.

function operate(num1, operator, num2) {
  switch (operator.trim()) {
    case "+":
      return num1 + num2;
    case "-":
      return num1 - num2;
    case "/":
      return num1 / num2;
    case "*":
      return num1 * num2;
  }
}
