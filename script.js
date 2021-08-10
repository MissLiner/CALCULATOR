

let num1;
let num2;
let operand;

function operate(operator, a, b) {
    if (operator === "+") { return (a + b); }
    else if (operator === "-") { return (a - b); }
    else if (operator === "x") { return (a * b); }
    else if (operator === "/") { return (a / b); }
}

const calcBox = document.querySelector('#numBtnsBox');

for (let i = 1; i <= 9; i++) {
    let numBtn = document.createElement('button');
    numBtn.textContent = `${i}`;
    numBtn.value = `${i}`;
    numBtn.className = "numBtn";
    numBtn.id = `numBtn${i}`;
    calcBox.appendChild(numBtn);
}

const display = document.getElementById("display");
let displayValue = 0;

const numBtns = document.querySelectorAll(".numBtn");

numBtns.forEach((button) => {
    button.addEventListener('click', function returnValue() {
        if (displayValue === 0) {
            displayValue = button.textContent;
            display.textContent = displayValue;
        }
        else if (operand !== undefined && displayValue !== num2) {
            displayValue = button.textContent;
            display.textContent = displayValue;
            num2 = displayValue;
        }
        else if (operand !== undefined && displayValue === num2) {
            displayValue += button.textContent;
            num2 = displayValue;
        }
        else {
        displayValue += button.textContent;
        display.textContent = displayValue;
        }
    });
})

const operBtns = document.querySelectorAll(".operBtn");
operBtns.forEach((button) => {
    button.addEventListener('click', () => {
        if (num2 === undefined) {
            num1 = displayValue;
            operand = button.textContent;
        }

        else {
            let finalNum = operate(operand, num1, num2);
            console.log(finalNum);
            display.textContent = finalNum;
            operand = button.textContent;
        }
        console.log(num1);
        console.log(num2);
        console.log(operand)
    })
})

const eqlBtn = document.getElementById("eqlBtn");
eqlBtn.addEventListener('click', () => {
    
    let a = parseInt(displayValue.charAt(0));
    let b = parseInt(displayValue.charAt(2));
    let c = displayValue.charAt(1);
    let finalNum = operate(c, a, b);
    console.log(finalNum);
    display.textContent = finalNum;
    num1 = undefined;
    num2 = undefined;
    operand = undefined;

})

const clrBtn = document.getElementById("clrBtn");
clrBtn.addEventListener('click', () => display.textContent = "");
