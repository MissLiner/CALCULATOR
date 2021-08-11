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
const decBtn = document.getElementById("decBtn");

let num1 = "";
let num2 = "";
let num3 = "";
let operand;
let displayValue;

updateDisplay = (content) => display.textContent = content;

function operate(operator, a, b) {
    if (operator === "+") { return (a + b); }
    else if (operator === "-") { return (a - b); }
    else if (operator === "x") { return (a * b); }
    else if (operator === "/") { 
        if (num2 === 0) {
            display.textContent = "Dividing by 0 is a dangerous game!!";
        }
        else {
            return (a / b); 
        }

    }
}

numBtns.forEach((button) => {
    button.addEventListener('click', function newValue() {
        if (operand == undefined) {
            num1 += button.textContent;
            num1 = parseFloat(num1);
            updateDisplay(num1);
        }
        else if (operand === "restart") {
              num1 = button.textContent;
              num1 = parseFloat(num1);
              operand = "";
              updateDisplay(num1);
        }
        else {
            num2 += button.textContent;
            num2 = parseFloat(num2);
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
            console.log(num1);
            console.log(num2);
            console.log(num3);
            console.log(operand);
        }

        else {
            num3 = operate(operand, num1, num2);
            num1 = Math.round(num3 * 100) / 100;
            num2 = "";
            num3 = "";
            updateDisplay(num1);
            operand = button.textContent;
        }
    })
})

eqlBtn.addEventListener('click', () => {
    if (num1 !== "" && num2 !== "" && operand !== "") {
    num3 = operate(operand, num1, num2);
    num1 = Math.round(num3 * 100) / 100;
    num2 = "";
    num3 = "";
    operand = "restart";
    updateDisplay(num1);
    console.log(num1);
    console.log(num2);
    console.log(num3);
    console.log(operand);
    }
})

clrBtn.addEventListener('click', () => {
    display.textContent = "";
    num1 = "";
    num2 = "";
    num3 = "";
    operand = undefined;
});

decBtn.addEventListener('click', () => {
    if (display.textContent.includes(".") == false || operand === "restart") {
        if (operand == undefined) {
            num1 += ".";
            //num1 = parseFloat(num1);
            updateDisplay(num1);
        }
        else if (operand === "restart") {
              num1 = "0.";
              //num1 = parseFloat(num1);
              operand = "";
              updateDisplay(num1);
        }
        else {
            num2 += ".";
            //num2 = parseFloat(num2);
            updateDisplay(num2)
            console.log(num1);
            console.log(num2);
            console.log(num3);
            console.log(operand);
        }
    }
})
