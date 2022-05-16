//Define all math operators functions
add = (a, b) => a += b
subtract = (a, b) => a -= b
multiply = (a, b) => a *= b
divide = (a, b) => a /= b
power = (a, b) => Math.pow(a, b)
operate = (operator, a, b) => {
    console.log(typeof(operator));
    return operator(a, b);
}

console.log(operate(add,2,3));

const nbrBtn = document.querySelectorAll('.number-button')
const opeBtn = document.querySelectorAll('.operator-button')
const totalBtn = document.getElementById('total')
const clearBtn = document.getElementById('clear')
const display = document.getElementById('display')
let storage = []
let a ;
let b ;
let ope ;

nbrBtn.forEach(button => button.addEventListener('click', (e)=> {
    let input = e.target.id;
    display.innerText = `${storage.join('')}${input}`;
    storage.push(input);
    return storage;
}))

opeBtn.forEach(button => button.addEventListener('click', (e) => {
    a = parseInt(storage.join(''));
    storage = []
    display.innerText = '';
    ope = e.target.id;
    return a, ope; 
}))

totalBtn.addEventListener('click', () => {
    b = parseInt(storage.join(''));
    console.log(ope);
    console.log(a);
    console.log(typeof(a));
    console.log(b);
    console.log(typeof(b));
    result = operate(ope, a, b)
    display.innerText = `${result}`
})

clearBtn.addEventListener('click', () => {
    storage = [];
    a = 0;
    b = 0;
    result = 0;
    return storage, a, b, result;
});