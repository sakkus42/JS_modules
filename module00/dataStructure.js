let myArr = ["1", "2", "3"];
myArr = myArr.concat("a", "b", "c");
console.log(myArr); // [ '1', '2', '3', 'a', 'b', 'c' ]

console.log(myArr.at(-1)); // c
console.log(myArr[-1]) // undefined;

let value = ["hi"];
let sameContentValue = ["hi"];
if (value == sameContentValue) {
    console.log("value == sameContentValue");
} else {
    console.log("value != sameContentValue"); // run
}

let refValue = value;
if (value == refValue) {
    console.log("value == refValue"); // run
} else {
    console.log("value != refValue");
}
refValue[0] = "Bye";
console.log(value[0]); // Bye

const sayings = new Map();
sayings.set("dog", "woof");
sayings.set("cat", "meow");
sayings.set("elephant", "toot");
sayings.size; // 3
sayings.get("dog"); // woof
sayings.get("fox"); // undefined
sayings.has("bird"); // false
sayings.delete("dog");
sayings.has("dog"); // false

for (const [key, value] of sayings) {
  console.log(`${key} goes ${value}`);
}
// "cat goes meow"
// "elephant goes toot"

sayings.clear();
sayings.size; // 0

let obj = {};
let map = new Map();
let xObj = {x:1};
obj[xObj] = 5;
map.set(xObj, 5);

console.log(obj) // { '[object Object]': 5 }
console.log(map) // Map(1) { { x: 1 } => 5 }


console.log(obj.size) // undefined
console.log(map.size) // 1


map.set(1, "one"); 
map.forEach( el => console.log(el)); // 5 -> one
obj[1] = 'one';
console.log(obj); // { '1': 'one', '[object Object]': 5 }

let weakMap = new WeakMap();
let map1 = new Map();

(function () {
    let keyObj = { name: 'John' };

    weakMap.set(keyObj, 'Value associated with John');
    map1.set(keyObj, 'Value associated with John');

    console.log(weakMap.get(keyObj)); // Value associated with John
})();

console.log(weakMap); // WeakMap { <items unknown> }
console.log(map1); // Map(1) { { name: 'John' } => 'Value associated with John' }

let set = new Set()
    .add('red')
    .add('green')
    .add('blue');
console.log(set); // Set(3) { 'red', 'green', 'blue' }
set.add('red');
console.log(set); // Set(3) { 'red', 'green', 'blue' }
if (set.has('red')) { // using it before the add method improves performance
    set.add('brown');
}
console.log(set); // Set(4) { 'red', 'green', 'blue', 'brown' }

let numbers = [1, 2, 3, 4, 1, 2, 5];
let uniqueNumbers = new Set(numbers); // Repeated values are automatically removed
console.log([...uniqueNumbers]); // [1, 2, 3, 4, 5]

let mySet = new Set([1, 2, 3]);
console.log(mySet.has(2)); // true
console.log(mySet.has(4)); // false


// Execute a callback on everything stored inside an object
function execRecursively(fn, subject, _refs = new WeakSet()) {
    // Avoid infinite recursion
    if (_refs.has(subject)) {
      return;
    }

    // fn(subject);
    if (typeof subject === "object" && subject) {
      _refs.add(subject);
      for (const key in subject) {
        execRecursively(fn, subject[key], _refs);
      }
      _refs.delete(subject);
    }
  }
  
  const foo = {
    foo: "Foo",
    bar: {
      bar: "Bar",
    },
  };
  
  foo.bar.baz = foo; // Circular reference!
  
  execRecursively((obj) => console.log(obj), foo);