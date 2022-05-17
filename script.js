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
let a = 0;
let b = 0;
let ope;

nbrBtn.forEach(button => button.addEventListener('click', (e) => {
    if (storage.length <= 10) {
        let input = e.target.id;
        display.innerText = `${storage.join('')}${input}`;
        storage.push(input);
        console.log(storage);
    }
}))

opeBtn.forEach(button => button.addEventListener('click', (e) => {
    a = parseFloat(storage.join(''));
    storage = []
    ope = e.target.id;
}))

totalBtn.addEventListener('click', () => {
    b = parseInt(storage.join(''));
    let result = 0;
    if (ope === 'add') {
        result = operate(add, a, b);
        storage = [result];
        if (Number.isInteger(result) ? roundedResult = result : roundedResult = result.toFixed(1));
        display.innerText = roundedResult;
        b = 0;
    } else if (ope === 'subtract') {
        result = operate(subtract, a, b);
        storage = [result];
        if (Number.isInteger(result) ? roundedResult = result : roundedResult = result.toFixed(1));
        display.innerText = roundedResult;
        b = 0;
    } else if (ope === 'multiply') {
        result = operate(multiply, a, b);
        storage = [result];
        if (Number.isInteger(result) ? roundedResult = result : roundedResult = result.toFixed(1));
        display.innerText = roundedResult;
        b = 0;
    } else if (ope === 'divide') {
        if (b === 0) {
            display.innerText = 'BOOM I EXPLODED'
        } else {
            result = operate(divide, a, b);
            storage = [result];
            if (Number.isInteger(result) ? roundedResult = result : roundedResult = result.toFixed(1))
                display.innerText = roundedResult;
            b = 0;
        }
    } else {
        result = 0;
        storage = [result];
        display.innerText = result;
        b = 0;
    }
})

returnBtn.addEventListener('click', () => {
    storage = Array.from(display.innerText = display.innerText
        .toString()
        .slice(0, -1))
    console.log(storage);
    return storage;
})

clearBtn.addEventListener('click', () => {
    storage = [];
    a = 0;
    b = 0;
    result = 0;
    display.innerText = 0
});

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
        b = parseInt(storage.join(''));
        let result = 0;
        if (ope === 'add') {
            result = operate(add, a, b);
            storage = [result];
            if (Number.isInteger(result) ? roundedResult = result : roundedResult = result.toFixed(1));
            display.innerText = roundedResult;
            b = 0;
        } else if (ope === 'subtract') {
            result = operate(subtract, a, b);
            storage = [result];
            if (Number.isInteger(result) ? roundedResult = result : roundedResult = result.toFixed(1));
            display.innerText = roundedResult;
            b = 0;
        } else if (ope === 'multiply') {
            result = operate(multiply, a, b);
            storage = [result];
            if (Number.isInteger(result) ? roundedResult = result : roundedResult = result.toFixed(1));
            display.innerText = roundedResult;
            b = 0;
        } else if (ope === 'divide') {
            if (b === 0) {
                display.innerText = 'BOOM I EXPLODED'
            } else {
                result = operate(divide, a, b);
                storage = [result];
                if (Number.isInteger(result) ? roundedResult = result : roundedResult = result.toFixed(1))
                    display.innerText = roundedResult;
                b = 0;
            }
        } else {
            result = 0;
            storage = [result];
            display.innerText = result;
            b = 0;
        }
    } else if (e.key === '-' || e.key === '+' || e.key === '*' || e.key === '%') {
        a = parseFloat(storage.join(''));
        storage = []
        ope = convertOperator(e.key);
        console.log(ope)
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