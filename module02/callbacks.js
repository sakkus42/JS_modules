function isThere(arr, callbacks) {
    for (el of arr) {
        if (callbacks(el))
            return el;
    }
    return null;
}

console.log( isThere([1, 2, 3, 4], (el) => el == 6) ); // null
console.log( isThere([1, 2, 3, 4], (el) => el == 4) ); // 4