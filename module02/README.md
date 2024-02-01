## Asynchronous JavaScript
Eşzamansız programlama, programınızın potansiyel olarak uzun süren bir görevi başlatmasını ve bu görev bitene kadar beklemek yerine, bu görev çalışırken diğer olaylara yanıt verebilmesini sağlayan bir tekniktir. Görev tamamlandığında, programınıza sonuç sunulur.
Tarayıcılar tarafından sağlanan birçok işlev, özellikle de en ilginç olanlar, potansiyel olarak uzun zaman alabilir ve bu nedenle eşzamansızdır. Örneğin:
- `fetch`() kullanarak HTTP istekleri yapma
- `getUserMedia()` işlevini kullanarak kullanıcının kamerasına veya mikrofonuna erişme
- `showOpenFilePicker()` kullanarak kullanıcıdan dosya seçmesini isteme
Dolayısıyla, kendi asenkron fonksiyonlarınızı çok sık uygulamanız gerekmese de, bunları doğru şekilde kullanmanız gerekebilir.

#### setTimeout
setTimeout, belirtilen süre sona erdikten sonra bir işlevi çalıştırır. Süreler milisaniye cinsinden bildirilir.

```js
setTimeout(code)
setTimeout(code, delay)

setTimeout(functionRef)
setTimeout(functionRef, delay)
setTimeout(functionRef, delay, param1)
setTimeout(functionRef, delay, param1, param2)
setTimeout(functionRef, delay, param1, param2, /* …, */ paramN)
```

**Return Value**
Döndürülen **timeoutID**, **setTimeout()** çağrısı tarafından oluşturulan zamanlayıcıyı tanımlayan pozitif bir tamsayı değeridir. Bu değer, zaman aşımını iptal etmek için **clearTimeout()** işlevine aktarılabilir.

```js
console.log("setTimeout");
setTimeout(() => console.log("setTimeout run"));
console.log("before");
// output
// setTimeout
// before
// setTimeout run
```


#### setInterval
`setInterval()` metodu, sabit bir gecikmeden sonra bir fonksiyonu tekrar tekrar çalıştırmamıza yardımcı olur. Daha sonra `clearInterval()` metodu tarafından kullanılabilecek benzersiz bir aralık kimliği döndürür ve bu da fonksiyonun tekrar tekrar yürütülmesini durdurur.
`setInterval()`, setTimeout'a benzer, ancak bir farkla. Geri arama işlevini bir kez çalıştırmak yerine, belirttiğiniz belirli zaman aralığında (milisaniye cinsinden) sonsuza kadar çalıştırır.

```Js
console.log("setInterval");
let timeId = setInterval(() => console.log("setInterval run"), 1000);
setTimeout(() => clearInterval(timeId), 5000);
```

#### Callbacks
Geri çağırma işlevi, başka bir işleve argüman olarak aktarılan ve daha sonra bir tür rutini veya eylemi tamamlamak için dış işlevin içinde çağrılan bir işlevdir.

```JS
function isThere(arr, callbacks) {
	for (el of arr) {
		if (callbacks(el)) return el;
	}
	return null;
}
console.log( isThere([1, 2, 3, 4], (el) => el == 6) ); // null
console.log( isThere([1, 2, 3, 4], (el) => el == 4) ); // 4
```

#### Callback Hell
Geri arama cehennemi, yürütmenin görsel olarak yukarıdan aşağıya doğru gerçekleştiği bir şekilde asenkron JavaScript yazmaya çalıştığımızda, sonunda birçok }) bulunan piramit şeklinde bir kod oluşturur.

### Promises
Sözler, JavaScript'te eşzamansız kodla çalışmanın eski ve hataya açık geri arama yaklaşımından çok daha iyi bir yoludur. ECMAScript 6 ile JavaScript'e dahil edilmişlerdir. Vaatleri kullanarak, son derece karmaşık eşzamansız kodu titiz hata işleme kurulumuyla yönetebilir, kodu az çok eşzamanlı bir tarzda yazabilir ve geri arama cehennemi olarak adlandırılan durumla karşılaşmaktan kendimizi koruyabiliriz.

```JS
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
}); // hello  

myPromise('d')
.then(result => {
	console.log(result);
})
.catch(error => {
	console.log(error);
}); // invalid argument
```


### Async/await
Promises daha rahat bir şekilde çalışmak için "async/await" adı verilen özel bir sözdizimi vardır. Anlaşılması ve kullanılması şaşırtıcı derecede kolaydır.

```JS
async function f(){
 return 1;
}
```

```JS
async function f() {
	return 1;
}
f().then(console.log);
```

```JS
async function awaitFunc() {
	let myPromise = new Promise((resolve) => {
		setTimeout(() => resolve("done"), 1000);
	});
	let result = await myPromise;
	console.log(result); // done
}
awaitFunc();
```

## Using This

JavaScript'te this anahtar sözcüğü diğer dillere kıyasla biraz farklıdır. Bir nesneyi ifade eder, ancak nasıl veya nerede çağrıldığına bağlıdır. Ayrıca strict mod ve non-strict mod arasında bazı farklılıklar vardır.
- Bir nesne methodunda, `this` objecti ifade eder.
- Tek başına global objecti ifade eder.
- Bir fonksiyonda global nesneyi ifade eder.
- Bir fonksiyonda, strict mode ise, `undefined`'dır.
- Eventte olayı alan öğeyi ifade eder.
- call(), apply() ve bind() gibi yöntemler `this` herhangi bir nesneye yönlendirebilir

## Function Borrowing
İşlev ödünç alma, bir nesnenin yöntemlerini, o yöntemin bir kopyasını oluşturmak ve iki ayrı yerde tutmak zorunda kalmadan farklı bir nesne üzerinde kullanmamızı sağlar. Bu işlem .call(), .apply() veya .bind() kullanılarak gerçekleştirilir; bunların tümü ödünç aldığımız yöntem üzerinde bunu açıkça ayarlamak için mevcuttur.

## JS `This`. Who Is This?

 1. Default binding | Direct invocation
 Bu, Varsayılan Bağlama'da global nesneye işaret eder. Varsayılan bağlama, bağımsız işlevler için uygulanır ve diğer tüm türler için geri dönüş seçeneğidir.
```JS
const func = function() {
	console.log(this); 
};

func(); // window {}
```

2. Implicit binding | Method invocation 
Objenin kedisini referanslar(Örtük bağlama|Yöntem çağırma).
```JS
const myObj = {
	name: "this",
	method: myFunc,
};

myObj.method(); // { name: 'this', method: [Function: myFunc] }
```

2. (a) Nested Function
İç içe fonksiyonlarda içteki fonksiyondaki `this`  default binding olarak çağrıldığı için global olarak algılar.
```JS
myObj.outer = function() {
	(function() {
		console.log(this);
	})();
};

myObj.outer(); // window {};
```

2. (b) Method Separated From The Object
Bir nesne metodunu yeni bir değişkene kopyaladığımızda, fonksiyona bir referans oluşturmuş oluruz.

```JS
const difThisMyfunc = myObj.method;
difThisMyfunc(); // window {};
```

## Function Borrowing
İşlev ödünç alma, bir nesnenin yöntemlerini, o yöntemin bir kopyasını oluşturmak ve iki ayrı yerde tutmak zorunda kalmadan farklı bir nesne üzerinde kullanmamızı sağlar. Bu işlem .call(), .apply() veya .bind() kullanılarak gerçekleştirilir; bunların tümü ödünç aldığımız yöntem üzerinde bunu açıkça ayarlamak için mevcuttur.

## JS `This`. Who Is This?

 1. Default binding | Direct invocation
 Bu, Varsayılan Bağlama'da global nesneye işaret eder. Varsayılan bağlama, bağımsız işlevler için uygulanır ve diğer tüm türler için geri dönüş seçeneğidir.
```JS
const func = function() {
	console.log(this); 
};

func(); // window {}
```

2. Implicit binding | Method invocation 
Objenin kedisini referanslar(Örtük bağlama|Yöntem çağırma).
```JS
const myObj = {
	name: "this",
	method: myFunc,
};

myObj.method(); // { name: 'this', method: [Function: myFunc] }
```

2. (a) Nested Function
İç içe fonksiyonlarda içteki fonksiyondaki `this`  default binding olarak çağrıldığı için global olarak algılar.
```JS
myObj.outer = function() {
	(function() {
		console.log(this);
	})();
};

myObj.outer(); // window {};
```

2. (b) Method Separated From The Object
Bir nesne metodunu yeni bir değişkene kopyaladığımızda, fonksiyona bir referans oluşturmuş oluruz.

```JS
const difThisMyfunc = myObj.method;
difThisMyfunc(); // window {};
```
`difThisMyfunc` doğrudan `myFunc` fonksiyonuna atıfta bulunur.

3. Explicit binding | Indirect invocation
Bu yöntemde, bir fonksiyonu belirli bir nesneyi this olarak kullanmaya zorlayabilirsiniz. Explicit Binding call(), apply() ve bind() kullanılarak uygulanabilir.
```JS
function assignTwoNbr(param1, param2) {
	this.param1 = param1;
	this.param2 = param2;
}

const exObj = {
	sayHi: "hello Explicit binding"
};

assignTwoNbr.call(exObj, 1, 2);
myFunc.call(exObj); // { sayHi: 'hello Explicit binding', param1: 1, param2: 2 }

assignTwoNbr.apply(exObj, [3, 4]);
myFunc.call(exObj); // { sayHi: 'hello Explicit binding', param1: 3, param2: 4 }

const boundFnc = assignTwoNbr.bind(exObj, 5, 6);
boundFnc();
myFunc.call(exObj); // { sayHi: 'hello Explicit binding', param1: 5, param2: 6 }
```


`difThisMyfunc` doğrudan `myFunc` fonksiyonuna atıfta bulunur.

3. Explicit binding | Indirect invocation
Bu yöntemde, bir fonksiyonu belirli bir nesneyi this olarak kullanmaya zorlayabilirsiniz. Explicit Binding call(), apply() ve bind() kullanılarak uygulanabilir.
```JS
function assignTwoNbr(param1, param2) {
	this.param1 = param1;
	this.param2 = param2;
}

const exObj = {
	sayHi: "hello Explicit binding"
};

assignTwoNbr.call(exObj, 1, 2);
myFunc.call(exObj); // { sayHi: 'hello Explicit binding', param1: 1, param2: 2 }

assignTwoNbr.apply(exObj, [3, 4]);
myFunc.call(exObj); // { sayHi: 'hello Explicit binding', param1: 3, param2: 4 }

const boundFnc = assignTwoNbr.bind(exObj, 5, 6);
boundFnc();
myFunc.call(exObj); // { sayHi: 'hello Explicit binding', param1: 5, param2: 6 }
```

