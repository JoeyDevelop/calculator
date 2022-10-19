let btnZero = document.getElementById("numZero");
btnZero.addEventListener("click", zero);

let btnOne = document.getElementById("numOne");
btnOne.addEventListener("click", one);

let btnTwo = document.getElementById("numTwo");
btnTwo.addEventListener("click", two);

let btnThree = document.getElementById("numThree");
btnThree.addEventListener("click", three);

let btnFour = document.getElementById("numFour");
btnFour.addEventListener("click", four);

let btnFive = document.getElementById("numFive");
btnFive.addEventListener("click", five);

let btnSix = document.getElementById("numSix");
btnSix.addEventListener("click", six);

let btnSeven = document.getElementById("numSeven");
btnSeven.addEventListener("click", seven);

let btnEight = document.getElementById("numEight");
btnEight.addEventListener("click", eight);

let btnNine = document.getElementById("numNine");
btnNine.addEventListener("click", nine);

let btnClear = document.getElementById("clear");
btnClear.addEventListener("click", clearHTML)
btnClear.addEventListener("click", clearArray)

let btnAdd = document.getElementById("add");
btnAdd.addEventListener("click", add);

let btnEquals = document.getElementById("equals");
btnEquals.addEventListener("click", equals)

function zero() {
     document.getElementById("numbers").innerHTML += "0";
}

function one() {
    document.getElementById("numbers").innerHTML += "1";
}

function two() {
    document.getElementById("numbers").innerHTML += "2";
}

function three() {
    document.getElementById("numbers").innerHTML += "3";
}

function four() {
     document.getElementById("numbers").innerHTML += "4";
}

function five() {
    document.getElementById("numbers").innerHTML += "5";
}

function six() {
    document.getElementById("numbers").innerHTML += "6";
}

function seven() {
    document.getElementById("numbers").innerHTML += "7";
}

function eight() {
    document.getElementById("numbers").innerHTML += "8";
}

function nine() {
    document.getElementById("numbers").innerHTML += "9";
}

function clearHTML() {
    document.getElementById("numbers").innerHTML = " " ;
}

function clearArray() {
    calc = [];
}

const calc = [];

function add() {
    let num = document.getElementById("numbers").innerHTML;
    parseInt(num);
    //console.log(num);
    calc.push(num);
    clearHTML();
    console.log(calc);
}

function equals(array) {
    
}