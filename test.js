const display = document.getElementById("display");
const calcBox = document.querySelector('#numBtnsBox');
for (let i = 1; i <= 9; i++) {
    let numBtn = document.createElement('button');
    numBtn.textContent = `${i}`;
    numBtn.value = `${i}`;
    numBtn.className = "numBtn";
    numBtn.id = `numBtn${i}`;
    calcBox.appendChild(numBtn);
}

const numBtns = document.querySelectorAll(".numBtn");
const operBtns = document.querySelectorAll(".operBtn");
const eqlBtn = document.getElementById("eqlBtn");

let num1 = "";
let num2 = "";
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
    button.addEventListener('click', function newValue() {
        if (operand == undefined) {
            num1 += button.textContent;
            num1 = parseInt(num1);
            updateDisplay(num1);
        }
        else {
            num2 += button.textContent;
            num2 = parseInt(num2);
            updateDisplay(num2)
            console.log(num1);
            console.log(num2);
            console.log(num3);
            console.log(operand);
        }
    });
})

operBtns.forEach((button) => {
    button.addEventListener('click', () => {
        if (num2 == "") {
            operand = button.textContent;
        }

        else {
            operand = button.textContent;
            num3 = operate(operand, num1, num2);
            num1 = parseInt(num3);
            num2 = "";
            num3 = "";
            updateDisplay(num1);
            operand = "n";
        }

    })
})

eqlBtn.addEventListener('click', () => {
    num3 = operate(operand, num1, num2);
    num1 = parseInt(num3);
    num2 = "";
    num3 = "";
    operand = undefined;
    updateDisplay(num1);
})

clrBtn.addEventListener('click', () => {
    display.textContent = "";
    num1 = "";
    num2 = "";
    num3 = "";
    operand = undefined;
});
