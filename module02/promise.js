function myPromise(param){
    return new Promise(function (resolve, reject) {
        setTimeout(() => {
            if (param == 'h')
                resolve("Hello");
            else
                reject("invalid argument")
        }, 0);
    });
}

myPromise('h')
.then(result => {
    console.log(result);
})
.catch(error => {
    console.log(error);
});

myPromise('d')
.then(result => {
    console.log(result);
})
.catch(error => {
    console.log(error);
});
