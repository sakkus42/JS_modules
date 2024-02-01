async function f() {
    return 1;
}

f().then(console.log);


async function awaitFunc() {
    let myPromise = new Promise((resolve) => {
        setTimeout(() => resolve("done"), 3000);
    });
    let result =  await myPromise;
    let result2 = myPromise;
    console.log(result); // done
    console.log(result2); // Promise { 'done' }
}

awaitFunc();