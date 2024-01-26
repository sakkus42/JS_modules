try {
    (function(){
        "use strict";
        x = 4;
        console.log(x);
    })();
}catch (err) {
    console.log(err.value); // undefined
}

try {
    (function(){
        x = 4;
        console.log(x); // 4
    })();
}catch (err) {
    console.log(err.value);
}

(function() {
    "use strict";
    console.log(this); // undefined;
})();

(function() {
    console.log(this); // <ref *1>...;
})();