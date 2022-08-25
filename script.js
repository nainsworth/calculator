// Onload Creates a clear calculator
window.onload = function () {
  clear();
};

// Clears calculator
function clear() {
  currentTxtElem.innerText = 0;
  previousTxtElem.innerText = "";
  input = "";
  operation = undefined;
}

// Chooses operator
function operate(choice) {
  if (previousTxtElem.innerText !== "") {
    compute();
  }
  operation = choice;
  previousTxtElem.innerText = `${currentTxtElem.innerText} ${choice}`;
  currentTxtElem.innerText = "";
  input = "";
}

// Appends button input onto current section of the display
function appendNumber(num) {
  if (num === "." && currentTxtElem.innerText.includes(".")) return;
  if (currentTxtElem.innerText.length > 8) return;
  
  input += num;
  currentTxtElem.innerText = input;
}

// Add Function
function add(prev, curr) {
  return prev + curr;
}

// Subtract Function
function subtract(prev, curr) {
  return prev - curr;
}

// Multiply Function
function multiply(prev, curr) {
  return prev * curr;
}

// Divide Function
function divide(prev, curr) {
  if (curr === 0) {
    currentTxtElem.innerText = "NOPE";
    previousTxtElem.innerText = "";
    input = "";
    return;
  }
  return prev / curr;
}

// Computes the chosen equation in the calculator
function compute() {
  const prev = parseFloat(previousTxtElem.innerText);
  const curr = parseFloat(currentTxtElem.innerText);
  if (isNaN(prev)) return;
  if (operation === "+") {
    input = add(prev, curr);
    operation = undefined;
  } else if (operation === "-") {
    input = subtract(prev, curr);
    operation = undefined;
  } else if (operation === "x") {
    input = multiply(prev, curr);
    operation = undefined;
  } else if (operation === "÷") {
    input = divide(prev, curr);
    operation = undefined;
  } else {
    return;
  }

  currentTxtElem.innerText = input.toString().substring(0, 8);
  previousTxtElem.innerText = "";

  if (previousTxtElem.innerText === "" && operation === undefined && inverseBtn.clicked === false && percentBtn.clicked === false) {
    input = "";
  }
}

// Backspace function
function backspace() {
  input = input.toString().slice(0, -1);
  if (input === "") {
    currentTxtElem.innerText = 0;
  } else {
    currentTxtElem.innerText = input;
  }
}

// Converts number to a percentage
function percent() {
  input = input * .01;
  currentTxtElem.innerText = input;
}

// Converts number to its inverse
function inverse() {
  input = input * -1;
  currentTxtElem.innerText = input;
}

// Variables
const numberBtns = document.querySelectorAll("[data-number]");
const operatorBtns = document.querySelectorAll("[data-operator]");
const equalsBtn = document.querySelector("[data-equals]");
const clearBtn = document.querySelector("[data-clear]");
const deleteBtn = document.querySelector("[data-delete]");
const percentBtn = document.querySelector("[data-percent]");
const inverseBtn = document.querySelector("[data-inverse]");
const previousTxtElem = document.querySelector("[data-previous]");
const currentTxtElem = document.querySelector("[data-current]");
let input = "";
let operation = undefined;

// Displays button input onto calculator
numberBtns.forEach((button) => {
  button.addEventListener("click", () => {
    appendNumber(button.innerText);
  });
});

// Event listener to listen for operator choice
operatorBtns.forEach((button) => {
  button.addEventListener("click", () => {
    operate(button.innerText);
  });
});

// Event lister for other buttons 
equalsBtn.addEventListener("click", (button) => {
  compute();
});

clearBtn.addEventListener("click", (button) => {
  clear();
});

deleteBtn.addEventListener("click", (button) => {
  backspace();
});

percentBtn.addEventListener("click", (button) => {
  percent();
});

inverseBtn.addEventListener("click", (button) => {
  inverse();
});