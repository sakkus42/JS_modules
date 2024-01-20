module.exports = {
    symbl: function (obj) {
        let smy = Symbol.for("secret");
        // let smy = Symbol("secret"); // invalid 
        console.log(obj[smy]);
    },
}