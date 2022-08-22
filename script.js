const storedOutput = document.getElementById("stored-output");
const resultOutput = document.getElementById("result-output");
// let input = 0;
// let total = 0;

window.onload = function () {
  displaySelectedNumber(0);
};

function displaySelectedNumber(num) {
  resultOutput.innerText += num;
}

function clearCalc() {
  resultOutput.innerText = 0;
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