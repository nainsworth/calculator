const storedOutput = document.getElementById("stored-output");
const resultOutput = document.getElementById("result-output");
let total = 0;

window.onload = function () {
  displaySelectedNumber(0);
};

function displaySelectedNumber(num) {
  resultOutput.innerText += num;
}

function clearCalc() {
  resultOutput.innerText = 0;
}

function add(num1, num2) {
total = num1 + num2;
}

function subtract(num1, num2) {
total = num1 - num2;
}

function multiply(num1, num2) {
total = num1 * num2;
}

function divide() {
total = num1 / num2;
}