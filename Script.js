let num1 = 0;
let num2 = 0;

function add(num1, num2) {
  let addValue = num1 + num2;
  let rounded = Math.round((addValue + Number.EPSILON) * 100) / 100;
  rounded = rounded.toFixed(2);
  console.log("add", rounded);
}

function subtract(num1, num2) {
  let subtractValue = num1 - num2;
  let rounded = Math.round((subtractValue + Number.EPSILON) * 100) / 100;
  rounded = rounded.toFixed(2);
  console.log("subtract", rounded)
}

function multiply(num1, num2) {
  let multiplyValue = num1 * num2;
  let rounded = Math.round((multiplyValue + Number.EPSILON) * 100) / 100;
  rounded = rounded.toFixed(2);
  console.log("multiply", rounded);
}

function divide(num1, num2) {
  let divideValue= num1 / num2;
  let rounded = Math.round((divideValue + Number.EPSILON) * 100) / 100;
  rounded = rounded.toFixed(2);
  console.log("divide", rounded);
}

function operate(operator, num1, num2) {
  switch(operator) {
    case "+":
      add(num1, num2);
      break;
    case "-":
      subtract(num1, num2);
      break;
    case "*":
      multiply(num1, num2);
      break;
    case "/":
      divide(num1, num2);
      break;
    default:
      alert("ERROR: INVALID OPERATOR PASSING THROUGH SWITCH STATEMENT");
  }
}