let person = {
    talk: true,
    canFly() {
        console.log("Can't fly");
    }
};

let user = {
    canCode: true,
    canCook() {
        console.log("Can't say");
    },
    __proto__: person,
}

user.canFly();
console.log("Talk: " + user.talk);
user.canCook();
console.log(Object.getPrototypeOf(user));

let docktor = {
    branch: "dentist",
    canCook() {
        console.log("yes");
    },
    __proto__: user
}

console.log(Object.getPrototypeOf(docktor));

docktor.canCook();
docktor.canFly()
docktor.__proto__.canCook()


