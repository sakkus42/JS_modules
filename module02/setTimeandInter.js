console.log("setTimeout");

setTimeout(() => console.log("setTimeout run") );
console.log("before");

console.log("setInterval");
let timeId = setInterval(() => console.log("setInterval run"), 1000);
setTimeout(() => clearInterval(timeId), 5000);
