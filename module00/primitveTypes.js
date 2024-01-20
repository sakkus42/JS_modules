const {symbl} = require("./module.js");

let str = "Hello world";
let str1 = new String("I'm a object");
console.log(typeof str);    // string primitve type
console.log(typeof str1);   // object type;



let und;
console.log(und); // undefined
console.log(typeof und); // undefined


let smy = Symbol.for("secret");
const obj1 = {
    [smy]: "secret info",
}
console.log(obj1[smy]); // secret info
console.log(obj1.secret); // undefined
console.log(obj1); // { [Symbol(secret)]: 'secret info' }
symbl(obj1);

