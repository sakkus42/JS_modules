let x = function () {
    return;
}

console.log("My type is the %s", typeof x);

let newX = new x();
console.log("My type is the %s", typeof newX);

function resParams(...args) {
    for (const arg of args) {
        console.log(arg);
    }
}
resParams("v1", "v2", "v3");


console.log("arrow functions");

const materials = ['Hydrogen', 'Helium', 'Lithium', 'Beryllium'];

console.log(materials.map((material) => material.length));
// Expected output: Array [8, 6, 7, 9]


// Traditional anonymous function
(function (a) {
    return a + 100;
});
// 1. Remove the word "function" and place arrow between the argument and opening body brace
(a) => {
return a + 100;
};
// 2. Remove the body braces and word "return" — the return is implied.
(a) => a + 100;
// 3. Remove the parameter parentheses
a => a + 100;


console.log("IIFE");

var area = 125;
const x1 = ((val) => {
    return val * 0.9;
})(area)
    .toString();

console.log(typeof x1) // string

console.log("private and public IIFE");

const makeWithDraw = (balance) =>  ((copyBalance) => {
    let balance = copyBalance;
    const doBadThings = () => {
        console.log("I will do bad things with your money");
    };
    doBadThings();
    return{
        withDraw(amount) {
            if (balance >= amount) { balance -= amount; return balance; }
            return "Insufficient money";
        },
    }
})(balance);


const firstAccount = makeWithDraw(100);
console.log(firstAccount.balance); // undefined
console.log(firstAccount.withDraw(12)) // 88
console.log(firstAccount.withDraw(100)) // Insufficient money

console.log("statically-scoped");

var a = "static";

function f1() {
    console.log(a);
}
function f2() {
    a = "dynamic";
    f1();
}

f2(); // static

  
