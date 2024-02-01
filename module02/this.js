function myFunc() {
    console.log(this);
};

myFunc(); // window {};


const myObj = {
    name: "this",
    method: myFunc,
};

myObj.method(); // { name: 'this', method: [Function: myFunc] }

myObj.outer = function() {
    (function() {
        console.log(this);
    })();
};

myObj.outer(); // window {};

const difThisMyfunc = myObj.method;
difThisMyfunc(); // window {};

function assignTwoNbr(param1, param2) {
    this.param1 = param1;
    this.param2 = param2;
}
const  exObj = {
    sayHi: "hello Explicit binding"
};

assignTwoNbr.call(exObj, 1, 2); 
myFunc.call(exObj); // { sayHi: 'hello Explicit binding', param1: 1, param2: 2 }

assignTwoNbr.apply(exObj, [3, 4]);
myFunc.call(exObj); // { sayHi: 'hello Explicit binding', param1: 3, param2: 4 }

const boundFnc = assignTwoNbr.bind(exObj, 5, 6);
boundFnc();
myFunc.call(exObj); // { sayHi: 'hello Explicit binding', param1: 5, param2: 6 }