let Animal = {
    type: "",
    makeSound: function () {
        console.log("No voice");
    }
};


console.log(Object.getPrototypeOf(Animal));


const myDate = new Date();
let object = myDate;

do {
  object = Object.getPrototypeOf(object);
  console.log(object);
} while (object);

console.log("Shadowing properties");
const myDate1 = new Date();
console.log(myDate.getYear());
myDate1.getYear = function () {
    console.log("something else");
}
myDate1.getYear();


{
    console.log("setting a prototype");
    const person = {
        id: 1,
        greet() {
            console.log("hi");
        }
    };

    const Carl = Object.create(person);
    Carl.type = "human";
    Carl.greet();
    console.log(Object.getPrototypeOf(Carl));
    console.log(Carl)
}

{
    const person = {
        greet() {
            console.log(this.name);
        }
    };

    function Carl (name) {
        this.name = name;
    }

    Object.assign(Carl.prototype, person);

    const carl = new Carl("ahmet");
    console.log(Object.getPrototypeOf(carl));
    console.log(carl)
    carl.greet()
}
