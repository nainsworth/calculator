const numberBtns = document.querySelectorAll("[data-number]");
const operatorBtns = document.querySelectorAll("[data-operator]");
const equalsBtn = document.querySelector("[data-equals]");
const clearBtn = document.querySelector("[data-clear]");
const deleteBtn = document.querySelector("[data-delete]");
const percentBtn = document.querySelector("[data-percent]");
const inverseBtn = document.querySelector("[data-inverse]");
const previousTxtElem = document.querySelector("[data-previous]");
const currentTxtElem = document.querySelector("[data-current]");

// Displays button input onto calculator
numberBtns.forEach((button) => {
  button.addEventListener("click", () => {
    appendNumber(button.innerText);
  });
});

operatorBtns.forEach((button) => {
  button.addEventListener("click", () => {
    
  })
})

// Onload Creates a clear calculator
window.onload = function () {
  clear();
};

// Clears calculator
function clear() {
  currentTxtElem.innerText = 0;
  previousTxtElem.innerText = "";
}

// Appends button input onto current section of the display
function appendNumber(num) {
  if (num === "." && currentTxtElem.innerText.includes(".")) return;
  if (currentTxtElem.innerText.length > 8) return;
  currentTxtElem.innerText += num;
}

// // let input = 0;
// // let total = 0;
// let blankCalc = 0
// let input = "";

// window.onload = function () {
//   currentOutput.innerText = 0;
// };

// function displaySelectedNumber(num) {
//    input += num;
//    currentOutput.innerText = input;
// }

// function clearCalc() {
//   currentOutput.innerText = 0;
//   input = "";
// }

// function add(num1, num2) {
//   return num1 + num2;
// }

// function subtract(num1, num2) {
//   return num1 - num2;
// }

// function multiply(num1, num2) {
//   return num1 * num2;
// }

// function divide(num1, num2) {
//   return num1 / num2;
// }

// // function add(input, num) {
// // total = input + num;
// // resultOutput.innerText = total;
// // }

// // function subtract(input, num) {
// // total = input - num;
// // resultOutput.innerText = total;
// // }

// // function multiply(input, num) {
// // total = input * num;
// // resultOutput.innerText = total;
// // }

// // function divide(input, num) {
// // total = input / num;
// // resultOutput.innerText = total;
// // }
