const display = document.getElementById("display");
const numBtns = document.querySelectorAll(".numBtn");
const operBtns = document.querySelectorAll(".operBtn");
const eqlBtn = document.getElementById("eqlBtn");
const calcBox = document.querySelector('#numBtnsBox');

for (let i = 1; i <= 9; i++) {
    let numBtn = document.createElement('button');
    numBtn.textContent = `${i}`;
    numBtn.value = `${i}`;
    numBtn.className = "numBtn";
    numBtn.id = `numBtn${i}`;
    calcBox.appendChild(numBtn);
}
let num1;
let num2;
let num3;
let operand;
let displayValue;

updateDisplay = (content) => display.textContent = content;

function operate(operator, a, b) {
    if (operator === "+") { return (a + b); }
    else if (operator === "-") { return (a - b); }
    else if (operator === "x") { return (a * b); }
    else if (operator === "/") { return (a / b); }
}

numBtns.forEach((button) => {
    button.addEventListener('click', function() {
        console.log(button.textContent);
        if (num1 == undefined) {
            num1 = button.textContent;
            console.log(num1);
            updateDisplay(num1);
        }
        else if (operand == undefined) {
            num1 += button.textContent;
            updateDisplay(num1);
        }
        else if (num2 == undefined) {
            num2 = button.textContent;
            updateDisplay(num2);
        }
        else {
            num2 += button.textContent;
            updateDisplay(num2);
        }
    })
})

operBtns.forEach((button) => {
    button.addEventListener('click', () => {
        operand = button.textContent;
    })
})

eqlBtn.addEventListener('click', () => {
    num3 = operate(operand, num1, num2);
    updateDisplay(num3);
})
