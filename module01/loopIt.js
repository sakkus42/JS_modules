const object = { a: 1, b: 2, c: 3 };

for (const property in object) {
  console.log(`key: ${property} value: ${object[property]}`);
}

console.log("Symbol")
let symA = Symbol("a");
let obj = {};
object[symA] = 4;
object.d = 5;

for (const property in object) {
    console.log(`key: ${property} value: ${object[property]}`);
}

console.log("Iterating own properties");
function Float() {
    this.a = "One";
    this.b = "Two";
    this.c = "Three";
};

Float.prototype = object;
const float = new Float();

for (const property in float) {
    if (Object.hasOwn(float, property)) {
        console.log(`key: ${property} value: ${object[property]}`);
    }
}


//Properties added to the current object during iteration are never visited:
obj.a = 1;
for (const prop in obj) {
  console.log(`obj.${prop} = ${obj[prop]}`);
  obj.c = 3;
}

for (const prop in obj) {
    console.log(`obj.${prop} = ${obj[prop]}`);
}

console.log("for..of");
const array1 = ['a', 'b', 'c']; 

for (const element of array1) {
  console.log(element);
}

const set = new Set(['hello', 'world']);
for (const elem of set) {
  console.log(elem);
}

const arr = ['a', 'b', 'c'];
for (const [index, elem] of arr.entries()) {
  console.log(`${index} -> ${elem}`);
}

console.log("label statement");
let str = '';

loop1: for (let i = 0; i < 5; i++) {
    str = str + `\n${i} =>`;
  for (let x = 0; x < 5;x++) {
    if (i == 2)
        continue loop1;
    str = str + x;
  }
}

console.log(str);