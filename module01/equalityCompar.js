let i = 10, x = '10';
var _undefined, _null = null;
console.log(`i: ${i}\nx: ${x}`);
console.log(`_undefined: ${_undefined}\n_null: ${_null}`);

if (i == x) { // The == or != operator does type conversion of elements before comparing them.
    console.log("i = x equal");
}
if (_undefined == _null) {
    console.log("undefinedn = null equal");
}

if (i === x) {} // The === or !== operator does'nt type conversion of elements before comparing them.
else {
    console.log("i !== x not equal")
}
if (_undefined === _null) {}
else { 
    console.log("undefinedn !== null equal"); 
}

