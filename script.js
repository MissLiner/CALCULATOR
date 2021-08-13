const display = document.getElementById('display');
const numberBox = document.querySelector('#number-btns-box');

for (let i = 1; i <= 9; i++) {
    let numberBtn = document.createElement('button');
    numberBtn.textContent = `${i}`;
    numberBtn.value = `${i}`;
    numberBtn.className = 'number-btn';
    numberBtn.id = `number-btn${i}`;
    numberBox.appendChild(numberBtn);
}

const numberBtns = document.querySelectorAll('.number-btn');
const operatorBtns = document.querySelectorAll('.operator-btn');
const equalBtn = document.getElementById('equal-btn');
const clearBtn = document.getElementById('clear-btn');
const decimalBtn = document.getElementById('decimal-btn');
const deleteBtn = document.getElementById('delete-btn');
const negativeBtn = document.getElementById('negative-btn');
const background = document.getElementById('background');
const notepad = document.getElementById('notepad');
const clearPadBtn = document.getElementById('clear-pad-btn');
const allButtons = document.querySelectorAll('button');

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

let num1 = '';
let num2 = '';
let result = '';
let operand = '';

updateDisplay = (content) => {
    display.textContent = content;
    operatorBtns.forEach((button) => {
        button.classList.remove('highlight');
    })
}

// highlightOperator = () => {
//     operatorBtns.forEach((button) => {
//         button.classList.remove('highlight');
//     })
//     button.classList.add('highlight');
// }

function operate(operator, a, b) {
    if (operand === '/' && num2 === '0') {
        alert('Oops! Dividing by zero could break the universe . . .');
    }
    else if (operator === '+') { return Math.round((a + b) * 100) / 100;}
    else if (operator === '-') { return Math.round((a - b) * 100) / 100;}
    else if (operator === 'x') { return Math.round((a * b) * 100) / 100;}
    else if (operator === '/') { return Math.round((a / b) * 100) / 100;}
}

numberBtns.forEach((button) => {
    button.addEventListener('click', function newValue() {
            if (operand === '' && num1.length < 6) {
                if (num1 === '0') {num1 = '';}
                num1 += button.textContent;
                updateDisplay(num1);
            }
        
            else if (operand === 'start') {
                operand = '';
                num1 = button.textContent;
                updateDisplay(num1);
            }
            else if (operand !== '' && num2.length < 6) {
                if (num2 === '0') {num2 = '';}
                num2 += button.textContent;
                updateDisplay(num2)
            }
    })
})

operatorBtns.forEach((button) => {
    button.addEventListener('click', () => {
        if (num1 !== '' && num2 === '') {
            num1 = parseFloat(num1);
            operand = button.textContent;
            button.classList.add('highlight');
        }

        else if (num2 === '' && operand !== '') {
            operand = button.textContent;
            operatorBtns.forEach((button) => {
                button.classList.remove('highlight');
            })
            button.classList.add('highlight');

        }
        else if (num1 !== '' && num2 !== '' && operand !== '') {
            num2 = parseFloat(num2);
            result = operate(operand, num1, num2);
            notepad.textContent += num1 + operand + num2 + '=' + result;
            num1 = result;
            num2 = '';
            result = '';
            operand = button.textContent;
            background.textContent += num1;
            updateDisplay(num1);
        }
    })
})

equalBtn.addEventListener('click', () => {
    if (num2 !== '') {
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);
    result = operate(operand, num1, num2);
    notepad.textContent += num1 + operand + num2 + '=' + result + '\r';
    num1 = result;
    num2 = '';
    result = '';
    operand = 'start';
    background.textContent += num1 + '  ';
    updateDisplay(num1);
    }
})

clearBtn.addEventListener('click', () => {
    display.textContent = '0';
    num1 = '';
    num2 = '';
    result = '';
    operand = 'start';
    background.textContent = '';
    operBtns.forEach((button) => {
        button.classList.remove('highlight');
    })
});

deleteBtn.addEventListener('click', () => {
    if (operand !== 'start') {
    if (num2 > 0) {
        num2 = num2.toString();
        if (num2.length < 2) {
            num2 = '';
            updateDisplay('0');
        }
        else {
            num2 = num2.slice(0, -1);
            num2 = parseFloat(num2);
            updateDisplay(num2);
        }
    }

    else if (num1 > 0 && num2 === '') {
        num1 = num1.toString();
        if (num1.length < 2) {
            num1 = '';
            updateDisplay('0');
        }
        else {
            num1 = num1.slice(0, -1);
            num1 = parseFloat(num1);
            updateDisplay(num1);
        }
    }
}
})

decimalBtn.addEventListener('click', () => {
    if (display.textContent.includes('.') === false || operand !== '') {
        if (operand === 'start') {
            num1 = '0.';
            operand = '';
            updateDisplay(num1);
        }
        else if (operand == '') {
            num1 += '.';
            updateDisplay(num1);
        }
        else if (operand !== '' && num2 === '') {
            num2 = '0.';
            updateDisplay(num2);
        }
        else {
            num2 += '.';
            updateDisplay(num2)
        }
    }
})

negativeBtn.addEventListener('click', () => {
    if (num1 !== '' && num2 === '' && operand === '') {
        num1 = -num1;
        updateDisplay(num1);
    }
    else if (num2 !== '') {
        num2 = -num2;
        updateDisplay(num2);
    }
})

clearPadBtn.addEventListener('click', () => {
    notepad.textContent = '';
})