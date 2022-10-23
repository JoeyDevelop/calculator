//Global Variables
let num1 = null;
let num2 = null;
let rounded = null;
let addValue = null;
let displayValue = null;
let operator = '';
let tempNum1 = null;
let placeholder = null;

//Basic math functions
function add(num1, num2) {
  num1 = Number(num1);
  num2 = Number(num2);
  let addValue = num1 + num2;
  let rounded = Math.round((addValue + Number.EPSILON) * 100) / 100;
  rounded = rounded.toFixed(2);
  document.getElementById("numbers").textContent = rounded;
  tempNum1 = rounded;
  placeholder = rounded;
  console.log("add", rounded);
}

function subtract(num1, num2) {
  let subtractValue = num1 - num2;
  let rounded = Math.round((subtractValue + Number.EPSILON) * 100) / 100;
  rounded = rounded.toFixed(2);
  document.getElementById("numbers").textContent = rounded;
  tempNum1 = rounded;
  placeholder = rounded;
  console.log("subtract", rounded)
}

function multiply(num1, num2) {
  let multiplyValue = num1 * num2;
  let rounded = Math.round((multiplyValue + Number.EPSILON) * 100) / 100;
  rounded = rounded.toFixed(2);
  document.getElementById("numbers").textContent = rounded;
  tempNum1 = rounded;
  placeholder = rounded;
  console.log("multiply", rounded);
}

function divide(num1, num2) {
  if (num1 != null && num2 == 0) {
    document.getElementById("numbers").textContent = "What have you done...";
  } else if (num1 != null && num2 != 0) {
  let divideValue= num1 / num2;
  let rounded = Math.round((divideValue + Number.EPSILON) * 100) / 100;
  rounded = rounded.toFixed(2);
  document.getElementById("numbers").textContent = rounded;
  tempNum1 = rounded;
  placeholder = rounded;
  console.log("divide", rounded);
  }
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

//All operator functions should save number before pressed
function clearNums() {
  document.getElementById("numbers").textContent = null;
  num1 = null;
  tempNum1 = null;
  num2 = null;
  rounded = null;
  addValue = null;
  displayValue = '';
  operator = '';
}

function addNums() {
  if (num1 == null) {
    num1 = displayValue;
    operator = "+";
    document.getElementById("numbers").textContent = null;
    displayValue = null;
    console.log(num1);
    return;
  } else if (num1 != null && num2 == null) {
    num2 = displayValue;

    operate(operator, num1, num2);
    clearNums();
    num1 = placeholder;
    //num2 = displayValue;
    operator = "+";

    // operate(operator, num1, num2);
    //num1 = tempNum1;
    num1 = Number(num1);
    num2 = Number(num2);
    let addValue = num1 + num2;
    let rounded = Math.round((addValue + Number.EPSILON) * 100) / 100;
    rounded = rounded.toFixed(2);
    console.log(rounded);
    tempNum1 = rounded;
    num1 = tempNum1;
    num2 = null;
    document.getElementById("numbers").textContent = null;
  }
}

function subtractNums() {
  if (num1 == null) {
    num1 = displayValue;
    operator = "-";
    document.getElementById("numbers").textContent = null;
    displayValue = null;
    console.log(num1);
    return;
  } else if (num1 != null && num2 == null) {
    num2 = displayValue;
    
    operate(operator, num1, num2);
    clearNums();
    num1 = placeholder;
    //num2 = displayValue;
    operator = "-";

    //num1 = tempNum1;

    // num1 = Number(num1);
    // num2 = Number(num2);
    // console.log(num1);
    // console.log(num2);
    // let subtractValue = num1 - num2;
    // let rounded = Math.round((subtractValue + Number.EPSILON) * 100) / 100;
    // rounded = rounded.toFixed(2);
    // console.log(rounded);
    // tempNum1 = rounded;
    // num1 = tempNum1;
    // num2 = null;
    // document.getElementById("numbers").textContent = null;
  }
}

function multiplyNums() {
  if (num1 == null) {
    num1 = displayValue;
    operator = "*";
    document.getElementById("numbers").textContent = null;
    displayValue = null;
    console.log(num1);
    return;
  } else if (num1 != null && num2 == null) {
    num2 = displayValue;

    operate(operator, num1, num2);
    clearNums();
    num1 = placeholder;
    //num2 = displayValue;
    operator = "*";

    //operate(operator, num1, num2);
    //num1 = tempNum1;

    // num1 = Number(num1);
    // num2 = Number(num2);
    // console.log(num1);
    // console.log(num2);
    // let multiplyValue = num1 * num2;
    // let rounded = Math.round((multiplyValue + Number.EPSILON) * 100) / 100;
    // rounded = rounded.toFixed(2);
    // console.log(rounded);
    // tempNum1 = rounded;
    // num1 = tempNum1;
    // num2 = null;
    // document.getElementById("numbers").textContent = null;
  }
}

function divideNums() {
  if (num1 == null) {
    num1 = displayValue;
    operator = "/";
    document.getElementById("numbers").textContent = null;
    displayValue = null;
    console.log(num1);
    return;
  } else if (num1 != null && num2 == null) {
    num2 = displayValue;

    operate(operator, num1, num2);
    clearNums();
    num1 = placeholder;
    //num2 = displayValue;
    operator = "/";

    //operate(operator, num1, num2);
    //num1 = tempNum1;

    // num1 = Number(num1);
    // num2 = Number(num2);
    // console.log(num1);
    // console.log(num2);
    // if (num1 != null && num2 == 0) {
    //   document.getElementById("numbers").textContent = "The simulation is collapsing...";
    // } else if (num1 != null && num2 != 0) {
    //   let divideValue = num1 / num2;
    // let rounded = Math.round((divideValue + Number.EPSILON) * 100) / 100;
    // rounded = rounded.toFixed(2);
    // console.log(rounded);
    // tempNum1 = rounded;
    // num1 = tempNum1;
    // num2 = null;
    // document.getElementById("numbers").textContent = null;
    // }

    // let divideValue = num1 / num2;
    // let rounded = Math.round((divideValue + Number.EPSILON) * 100) / 100;
    // rounded = rounded.toFixed(2);
    // console.log(rounded);
    // tempNum1 = rounded;
    // num1 = tempNum1;
    // num2 = null;
    // document.getElementById("numbers").textContent = null;
  }
}

function equals() {
  num2 = displayValue;
  displayValue = null
  console.log(num1, num2, operator)
  operate(operator, num1, num2);
}

function clearAll() {
  window.location.reload();
}