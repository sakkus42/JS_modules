const { swap } = require("./module");

console.log("Empty Object");
const emptyObj1 = new Object();
const emptyObj2 = {};
console.log(emptyObj1.valueOf());
console.log(emptyObj2.valueOf());

console.log("Literals and properties");
let user = {
    name: "Jhon",
    age: 27,
    "multiword property names": true,
    personAnAdult: function () {
        return this.age > 18 ? true : false;
    }
}
console.log(user.personAnAdult());
user.admin = true;
user.isAdmin = function () {
    return this.admin ? true : false;
}

console.log(user.isAdmin());
delete user.age;
console.log(user.valueOf());
console.log(user["multiword property names"]);

let key = "say may name";
user[key] = "Muhammed Ali";
console.log(user[key]);
console.log(user["say may name"]);

let fruit = 'apple';
let bag = {
    [fruit + 'Computers']: 5,
};
console.log(bag[fruit + 'Computers']);
console.log(bag.appleComputers);

console.log("property value shorthand");
function makeUser(name, age) {
    return {
        name, 
        age,
    };
}
let userA = makeUser("ahmet", 20);
console.log(userA);

console.log("Property names limitations");
let objName = {
    for: 1,
    let: 4,
    return: 6,
};
console.log(objName.for + objName.let + objName.return);

let objNameDig = {
    0: 1, // same as "0": "test"
};

console.log("0" in objNameDig);
console.log("0" in objName);

for (let key in user) {
    console.log(key + ": " + user[key]);
}

