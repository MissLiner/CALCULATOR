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
const delBtn = document.getElementById("delBtn");
const negBtn = document.getElementById("negBtn");
const background = document.getElementById("background");
const notepad = document.getElementById("notepad");
const clearPadBtn = document.getElementById("clearPadBtn");

const allButtons = document.querySelectorAll("button");
allButtons.forEach((button) => {
    button.addEventListener('click', () => {
        background.textContent += button.textContent;
        console.log(button.id);
        console.log(num1);
        console.log(num2);
        console.log(result);
        console.log(operand);

    })
})

let num1 = "";
let num2 = "";
let result = "";
let operand = "";

updateDisplay = (content) => {
    display.textContent = content;
    operBtns.forEach((button) => {
        button.classList.remove("highlight");
    })
    //background.textContent += content;
}

function operate(operator, a, b) {
    if (operand === "/" && num2 === "0") {
        alert("Oops! Dividing by zero could break the universe . . .");
    }
    else if (operator === "+") { return (a + b); }
    else if (operator === "-") { return (a - b); }
    else if (operator === "x") { return (a * b); }
    else if (operator === "/") { return (a / b); }
}

numBtns.forEach((button) => {
    button.addEventListener('click', function newValue() {
            if (operand === "" && num1.length < 6) {
                num1 += button.textContent;
                updateDisplay(num1);
            }
        
            else if (operand === "start") {
                operand = "";
                num1 = button.textContent;
                updateDisplay(num1);
            }
            else if (operand !== "" && num2.length < 6) {
                num2 += button.textContent;
                updateDisplay(num2)
            }

            //else {
            //    num2
            //}
    })
})

operBtns.forEach((button) => {
    button.addEventListener('click', () => {
        if (num2 == "") {
            num1 = parseFloat(num1);
            operand = button.textContent;
            button.classList.add("highlight");
        }
        else if (num1 !== "" && num2 !== "" && operand !== "") {
            num2 = parseFloat(num2);
            result = operate(operand, num1, num2);
            num1 = Math.round(result * 100) / 100;
            notepad.textContent += num1 + operand + num2 + "=" + result + "\r\n";
            updateDisplay(num1);
            num2 = "";
            result = "";
            operand = button.textContent;
        }
        //background.textContent += button.textContent;
    })
})

eqlBtn.addEventListener('click', () => {
    if (num2 !== "") {
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);
    result = operate(operand, num1, num2);
    notepad.textContent += num1 + operand + num2 + "=" + result + "\r";
    num1 = Math.round(result * 100) / 100;
    //background.textContent += num1;
    num2 = "";
    result = "";
    operand = "start";
    updateDisplay(num1);
}
})

clrBtn.addEventListener('click', () => {
    display.textContent = "0";
    num1 = "";
    num2 = "";
    result = "";
    operand = "start";
    background.textContent = "";
    operBtns.forEach((button) => {
        button.classList.remove("highlight");
    })
});

delBtn.addEventListener('click', () => {
    if (operand !== "start") {
    if (num2 > 0) {
        num2 = num2.toString();
        if (num2.length < 2) {
            num2 = "";
            updateDisplay('0');
        }
        else {
            num2 = num2.slice(0, -1);
            num2 = parseFloat(num2);
            updateDisplay(num2);
        }
    }

    else if (num1 > 0 && num2 === "") {
        num1 = num1.toString();
        if (num1.length < 2) {
            num1 = "";
            updateDisplay("0");
        }
        else {
            num1 = num1.slice(0, -1);
            num1 = parseFloat(num1);
            updateDisplay(num1);
        }
    }
}
})

decBtn.addEventListener('click', () => {
    if (display.textContent.includes(".") === false || operand !== "") {
        if (operand === "start") {
            num1 = "0.";
            operand = "";
            updateDisplay(num1);
        }
        else if (operand == "") {
            num1 += ".";
            updateDisplay(num1);
        }
        else if (operand !== "" && num2 === "") {
            num2 = "0.";
            updateDisplay(num2);
        }
        else {
            num2 += ".";
            updateDisplay(num2)
        }
    }
})

negBtn.addEventListener('click', () => {
    if (num1 !== "" && num2 === "" && operand === "") {
        num1 = -num1;
        updateDisplay(num1);
    }
    else if (num2 !== "") {
        num2 = -num2;
        updateDisplay(num2);
    }
})

clearPadBtn.addEventListener('click', () => {
    notepad.textContent = "";
})


