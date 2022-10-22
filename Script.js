//Global Variables
let num1 = 0;
let num2 = 0;
let displayValue = '';

//Basic math functions
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

//Operator Function
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

//Number button functions
function zero() {
    document.getElementById("numbers").textContent += 0;
    displayValue = document.getElementById("numbers").textContent;
}
function one() {
    document.getElementById("numbers").textContent += 1;
    displayValue = document.getElementById("numbers").textContent;
}
function two() {
    document.getElementById("numbers").textContent += 2;
    displayValue = document.getElementById("numbers").textContent;
}
function three() {
    document.getElementById("numbers").textContent += 3;
    displayValue = document.getElementById("numbers").textContent;
}
function four() {
    document.getElementById("numbers").textContent += 4;
    displayValue = document.getElementById("numbers").textContent;
}
function five() {
    document.getElementById("numbers").textContent += 5;
    displayValue = document.getElementById("numbers").textContent;
}
function six() {
    document.getElementById("numbers").textContent += 6;
    displayValue = document.getElementById("numbers").textContent;
}
function seven() {
    document.getElementById("numbers").textContent += 7;
    displayValue = document.getElementById("numbers").textContent;
}
function eight() {
    document.getElementById("numbers").textContent += 8;
    displayValue = document.getElementById("numbers").textContent;
}
function nine() {
    document.getElementById("numbers").textContent += 9;
    displayValue = document.getElementById("numbers").textContent;
}

//All operator buttons should save number before pressed
