//Define all math operators functions
add = (a, b) => a += b
subtract = (a, b) => a -= b
multiply = (a, b) => a *= b
divide = (a, b) => a /= b
power = (a, b) => Math.pow(a, b)
operate = (operator, a, b) => { return operator(a, b) };

//Assign all elements
const nbrBtn = document.querySelectorAll('.number-button')
const opeBtn = document.querySelectorAll('.operator-button')
const totalBtn = document.getElementById('total')
const returnBtn = document.getElementById('return')
const clearBtn = document.getElementById('clear')
const display = document.getElementById('display')
let storage = []
let result = 0;
let a = 0;
let b = 0;
let ope;

//Buttons events
nbrBtn.forEach(button => button.addEventListener('click', numberPressed))
opeBtn.forEach(button => button.addEventListener('click', operatorPressed))
totalBtn.addEventListener('click', calculate)
returnBtn.addEventListener('click', returnPressed)
clearBtn.addEventListener('click', clearAll)

//Mains functions
function numberPressed (e) {
    if (storage.length <= 10) {
        let input = e.target.id;
        display.innerText = `${storage.join('')}${input}`;
        storage.push(input);
    }
}

function operatorPressed (e) {
    if (a === 0) {
        a = parseFloat(storage.join(''));
        storage = []
        ope = e.target.id;
    } else {
        calculate ();
        a = parseFloat(storage.join(''));
        storage = []
        ope = e.target.id;
    }
}

function returnPressed () {
    storage = Array.from(display.innerText = display.innerText
        .toString()
        .slice(0, -1))
    return storage;
}

function clearAll () {
    storage = [];
    a = 0;
    b = 0;
    result = 0;
    display.innerText = 0
}

function calculate() {
    b = parseFloat(storage.join(''));
    if (ope === 'add') {
        result = operate(add, a, b);
        storage = [result];
        if (Number.isInteger(result) ? roundedResult = result : roundedResult = result.toFixed(1));
        display.innerText = roundedResult;
        b = 0;
        a = 0;
    } else if (ope === 'subtract') {
        result = operate(subtract, a, b);
        storage = [result];
        if (Number.isInteger(result) ? roundedResult = result : roundedResult = result.toFixed(1));
        display.innerText = roundedResult;
        b = 0;
        a = 0;
    } else if (ope === 'multiply') {
        result = operate(multiply, a, b);
        storage = [result];
        if (Number.isInteger(result) ? roundedResult = result : roundedResult = result.toFixed(1));
        display.innerText = roundedResult;
        b = 0;
        a = 0;
    } else if (ope === 'divide') {
        if (b === 0) {
            display.innerText = 'BOOM I EXPLODED'
        } else {
            result = operate(divide, a, b);
            storage = [result];
            if (Number.isInteger(result) ? roundedResult = result : roundedResult = result.toFixed(1))
                display.innerText = roundedResult;
            b = 0;
            a = 0;
        }
    } else {
        result = 0;
        storage = [result];
        display.innerText = result;
        b = 0;
        a = 0;
    }
}

// Add keyboard support
window.addEventListener('keydown', keyboardInput);

function keyboardInput(e) {
    if (e.key >= 0 && e.key <= 9 || e.key === '.') {
        if (storage.length <= 10) {
            let input = e.key;
            display.innerText = `${storage.join('')}${input}`;
            storage.push(input);
            console.log(storage);
        }
    } else if (e.key === 'Escape') {
        storage = [];
        a = 0;
        b = 0;
        result = 0;
        display.innerText = 0
    } else if (e.key === '=' || e.key === 'Enter') {
        calculate();
    } else if (e.key === '-' || e.key === '+' || e.key === '*' || e.key === '%') {
        if (a === 0) {
        a = parseFloat(storage.join(''));
        storage = []
        ope = convertOperator(e.key);
        } else {
            calculate();
            a = parseFloat(storage.join(''));
            storage = []
            ope = convertOperator(e.key);
        }
    } else if (e.key === 'Backspace') {
        storage = Array.from(display.innerText = display.innerText
            .toString()
            .slice(0, -1))
        console.log(storage);
        return storage;
    } else {
        return false;
    }
}

function convertOperator(keyboardOperator) {
    if (keyboardOperator === '/') return 'divide'
    if (keyboardOperator === '*') return 'multiply'
    if (keyboardOperator === '-') return 'subtract'
    if (keyboardOperator === '+') return 'add'
}