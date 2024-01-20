{
    console.log("var keyword");
    {
        var x = 1;
    }
    console.log(x); // globally-scoped expected => 1;
    if (x == 1) {
        var x = 4; // global x'e yeniden atama yapa biliriz
        console.log(x); // expected => 4
    }
    console.log(x); // expexted => 4;

    for (var a of [1, 2, 3]);
    console.log(a); // 3
}

{
    console.log("let keyword");
    let x = 1;

    if (x === 1) {
        let x = 2;
        console.log(x); // Expected output: 2
    }
    console.log(x); // Expected output: 1

    // if (true) let x = 4; 
    // SyntaxError: Lexical declaration cannot appear in a single-statement context
}

{
    const number = 42;

    try {
        number = 99;
    } catch (err) {
        console.log(err);
    // Expected output: TypeError: invalid assignment to const 'number'
    // (Note: the exact output may be browser-dependent)
    }

    console.log(number);
    // Expected output: 42

}