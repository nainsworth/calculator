const previousOutput = document.getElementById("previous-output");
const currentOutput = document.getElementById("current-output");
// let input = 0;
// let total = 0;
let blankCalc = 0
let input = "";


window.onload = function () {
  currentOutput.innerText = 0;
};

function displaySelectedNumber(num) {
   input += num;
   currentOutput.innerText = input;
}

function clearCalc() {
  currentOutput.innerText = 0;
  input = "";
}

function add(num1, num2) {
  return num1 + num2;
} 

function subtract(num1, num2) {
  return num1 - num2;
}

function multiply(num1, num2) {
  return num1 * num2;
}

function divide(num1, num2) {
  return num1 / num2;
}

// function add(input, num) {
// total = input + num;
// resultOutput.innerText = total;
// }

// function subtract(input, num) {
// total = input - num;
// resultOutput.innerText = total;
// }

// function multiply(input, num) {
// total = input * num;
// resultOutput.innerText = total;
// }

// function divide(input, num) {
// total = input / num;
// resultOutput.innerText = total;
// }
