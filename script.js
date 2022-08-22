const storedOutput = document.getElementById("stored-output");
const resultOutput = document.getElementById("result-output");
// let input = 0;
// let total = 0;
let blankCalc = 0
let input = "";


window.onload = function () {
  resultOutput.innerText = 0;
};

function displaySelectedNumber(num) {
   input += num;
   resultOutput.innerText = input;
}

function clearCalc() {
  resultOutput.innerText = 0;
  input = "";
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