
// script.js
let currentOperand = '';
let previousOperand = '';
let operation = null;

function appendNumber(number) {
  if (number === '0' && currentOperand === '0') return; // Avoid multiple leading zeros
  currentOperand += number;
  updateDisplay();
}

function chooseOperation(op) {
  if (currentOperand === '') return;
  if (previousOperand !== '') compute();
  operation = op;
  previousOperand = currentOperand;
  currentOperand = '';
  
}

function compute() {
  let computation;
  const prev = parseFloat(previousOperand);
  const curr = parseFloat(currentOperand);
  if (isNaN(prev) || isNaN(curr)) return;

  switch (operation) {
    case '+':
      computation = prev + curr;
      break;
    case '-':
      computation = prev - curr;
      break;
    case '*':
      computation = prev * curr;
      break;
    case '/':
      computation = curr !== 0 ? prev / curr : 'Error';
      break;
    default:
      return;
  }

  currentOperand = computation.toString();
  operation = null;
  previousOperand = '';
  updateDisplay();
}

function clearDisplay() {
  currentOperand = '';
  previousOperand = '';
  operation = null;
  updateDisplay();
}

function updateDisplay() {
  const display = document.getElementById('display');
  display.textContent = currentOperand || '0';
}
