# Equality Comparisons
Karşılaştırma operatörleri, değişkenler veya değerler arasındaki eşitliği veya farkı belirlemek için mantıksal deyimlerde kullanılır. Karşılaştırma operatörleri, değerleri karşılaştırmak ve sonuca bağlı olarak işlem yapmak için koşullu deyimlerde kullanılabilir.

## Value Comparison Operators

Javascript'te `==` operatörü karşılaştırmadan önce operandların tür dönüşümünü yaparken, `===` operatörü operandların değerlerini ve veri türlerini karşılaştırır. `Object.is()` yöntemi iki değerin aynı değer olup olmadığını belirler: `Object.is(değer1, değer2)`.

`Object.is()` `==` operatörüne eşdeğer değildir. `==` işleci eşitliği sınamadan önce her iki tarafa da (aynı türden değillerse) çeşitli zorlamalar uygular (bu da `"" == false` değerinin true olması gibi davranışlara neden olur), ancak `Object.is()` her iki değeri de zorlamaz.

Javascript'te iki değeri karşılaştırmak için karşılaştırma operatörlerini kullanırız. İki değerin karşılaştırıldığı ve değerlerin eşit (veya eşit olmayan) olup olmadığına karar verilen özel bir karşılaştırma durumu vardır. Bu durumda, javascript'te aşağıdaki iki operatörü kullanabiliriz:
- ***`==`*** operator.
- ***`===`*** operator.

# Loop and Iterations
### for..in
for...in deyimi, miras alınan numaralandırılabilir özellikler de dahil olmak üzere, bir nesnenin dizelerle anahtarlanan (Sembollerle anahtarlananları göz ardı ederek) tüm numaralandırılabilir özellikleri üzerinde yineleme yapar.

```
const object = { a: 1, b: 2, c: 3 };
for (const property in object) {
	console.log(`key: ${property} value: ${object[property]}`);
}

console.log("Symbol")
let symA = Symbol("a");
let obj = {};
object[symA] = 4;
object.d = 5;
for (const property in object) {
	console.log(`key: ${property} value: ${object[property]}`);
}

console.log("Iterating own properties");
function Float() {
	this.a = "One";
	this.b = "Two";
	this.c = "Three";
};
Float.prototype = object;
const float = new Float();
for (const property in float) {
	if (Object.hasOwn(float, property)) {
		console.log(`key: ${property} value: ${object[property]}`);
	}
}

//Properties added to the current object during iteration are never visited:

obj.a = 1;
for (const prop in obj) {
	console.log(`obj.${prop} = ${obj[prop]}`);
	obj.c = 3;
}
for (const prop in obj) {
	console.log(`obj.${prop} = ${obj[prop]}`);
}
```
### for..of
for...of1 deyimi, yinelenebilir bir nesneden alınan değerler dizisi üzerinde çalışan bir döngü yürütür. Yinelenebilir nesneler Array, String, TypedArray, Map, Set, NodeList (ve diğer DOM koleksiyonları) gibi yerleşik nesnelerin örneklerini ve argüman nesnesini, üreteç işlevleri tarafından üretilen üreteçleri ve kullanıcı tanımlı yinelenebilirleri içerir.
```
for («iteration_variable» of «iterable») {
  «statements»
}
```

Yineleme değişkeni genellikle bir değişken bildirimi aracılığıyla oluşturulur:
```
const array1 = ['a', 'b', 'c'];
for (const element of array1) {
	console.log(element);
}
```

Daha önce de belirtildiği gibi, for-of yalnızca Dizilerle değil, herhangi bir yinelenebilir nesneyle de çalışır - örneğin, Kümelerle:
```
const set = new Set(['hello', 'world']);
for (const elem of set) {
  console.log(elem);
}
```

Son olarak, Dizilerin [index, element] girdileri üzerinde yineleme yapmak için for-of'u da kullanabiliriz:
```
const arr = ['a', 'b', 'c'];
for (const [index, elem] of arr.entries()) {
  console.log(`${index} -> ${elem}`);
}
```


### Labeled Statement

Etiketli deyim, önüne bir tanımlayıcı eklenmiş herhangi bir deyimdir. Etiketli deyimin içine yerleştirilmiş bir break veya continue deyimi kullanarak bu etikete atlayabilirsiniz.

```
let str = '';
loop1: for (let i = 0; i < 5; i++) {
	str = str + `\n${i} =>`;
	for (let x = 0; x < 5; x++) {
		if (i == 2)
			continue loop1;
		str = str + x;
	}
}

console.log(str);
// 0 =>01234
// 1 =>01234
// 2 =>
// 3 =>01234
// 4 =>01234
```

# Exception Handling
JavaScript'te tüm istisnalar basitçe nesnelerdir. İstisnaların çoğu global Error sınıfının uygulamaları olsa da, herhangi bir eski nesne fırlatılabilir. Bunu akılda tutarak, bir istisna fırlatmanın iki yolu vardır: doğrudan bir Error nesnesi aracılığıyla ve özel bir nesne aracılığıyla.

## Throw, and Try...Catch...Finally
`try` deyimi çalıştırılacak (denenecek) bir kod bloğu tanımlar.
`catch` deyimi, herhangi bir hatayı işlemek için bir kod bloğu tanımlar.
`finally` deyimi, sonuçtan bağımsız olarak çalışacak bir kod bloğu tanımlar.
`throw` deyimi özel bir hata tanımlar.

```
try {
	console.log(value);
} catch (err) {
	console.log("Catch Run: %s", err.value);
	console.log("Catch Run: %s", err.message);
} finally {
	console.log("the finally block always works");
}
```


## Error Objects
Bir çalışma zamanı hatası oluştuğunda, yeni bir `Error` nesnesi oluşturulur ve fırlatılır. Bu `Error` nesnesi ile Hatanın türünü belirleyebilir ve türüne göre ele alabiliriz.

### Types of Error
- [AggregateError](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/AggregateError)
- [EvalError](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/EvalError)
- [InternalError](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/InternalError)
- [RangeError](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RangeError)
- [ReferenceError](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/ReferenceError)
- [SyntaxError](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/SyntaxError)

# Functions
Fonksiyonlar JS'de aynı zamanda objedir.

```
let x = function () {
	return;
}
console.log("My type is the %s", typeof x); // My type is the function
let newX = new x();
console.log("My type is the %s", typeof newX); // My type is the object
```

##### Rest Parameters
Geri kalan parametre sözdizimi, bir fonksiyonun bir dizi olarak belirsiz sayıda argüman kabul etmesine olanak tanıyarak JavaScript'te değişken fonksiyonları temsil etmenin bir yolunu sağlar.

```
function f(a, b, ...theArgs) {
  // …
}
```

Bir fonksiyon tanımının son parametresinin önüne `...`(üç U+002E TAM DUR karakteri) eklenebilir, bu da kalan (kullanıcı tarafından sağlanan) tüm parametrelerin bir `Array` nesnesi içine yerleştirilmesine neden olur.

```
function resParams(...args) {
	for (const arg of args) {
		console.log(arg);
	}
}
resParams("v1", "v2", "v3");
// v1
// v2
// v3
```

Bir fonksiyon tanımı yalnızca bir dinlenme parametresine sahip olabilir ve dinlenme parametresi fonksiyon tanımındaki son parametre olmalıdır.

```
function wrong1(...one, ...wrong) {}
function wrong2(...wrong, arg2, arg3) {}
```

#### Arrow Function
Arrow fonksiyon ifadesi, bazı anlamsal farklılıklar ve kullanımda kasıtlı sınırlamalarla birlikte geleneksel fonksiyon ifadesine kompakt bir alternatiftir:
- Arrow işlevlerinin `this`, `arguments` veya `super` için kendi bağları yoktur ve `merhod` olarak kullanılmamalıdır.
- Arrow fonksiyonları `constructor` olarak kullanılamaz. Onları `new` ile çağırmak bir `TypeError` atar. Ayrıca `new.target` anahtar sözcüğüne erişimleri de yoktur.
- Arrow fonksiyonları kendi gövdeleri içinde `yield` kullanamaz ve üretici fonksiyonlar olarak oluşturulamaz.

#syntax #ArrowFuncs 
```
() => expression

param => expression

(param) => expression

(param1, paramN) => expression

() => {
  statements
}

param => {
  statements
}

(param1, paramN) => {
  statements
}
```

Gelenksel bir fonksiyonun arrow fonksiyona dönüştürme, ilk adım hariç hepsi bir arrow fonksiyonudur;
```
(function (a) {
	return a + 100;
});

(a) => {
	return a + 100;
};

(a) => a + 100;

a => a + 100;
```

#### IIFE  (Immediately Invoked Function Expression)
IIFE (Hemen Çağrılan Fonksiyon İfadesi) tanımlandığı anda çalışan bir JavaScript fonksiyonudur

#syntax #IIFE  
```
(function () {
  // …
})();

(() => {
  // …
})();

(async () => {
  // …
})();
```

Global değişkenlerimizi kullanmaktan kaçınılması gereken durumlarda kullanılır.
```
var area = 125;
const x1 = ((val) => {
	return val * 0.9;
})(area)
	.toString();

console.log(typeof x1) // string
```

Encapsulation yapmak istediğimiz durumlarda kullanabiliriz.
```
const makeWithDraw = (balance) => ((copyBalance) => {
	let balance = copyBalance;
	const doBadThings = () => {
		console.log("I will do bad things with your money");
	};
	doBadThings();
	return{
		withDraw(amount) {
			if (balance >= amount) { balance -= amount; return balance;}
			return "Insufficient money";
		},
	}
})(balance);

const firstAccount = makeWithDraw(100);
console.log(firstAccount.balance); // undefined private value
console.log(firstAccount.withDraw(12)) // 88
console.log(firstAccount.withDraw(100)) // Insufficient money
```

#### Arguments Object
Arguments nesnesi, fonksiyonların içinden erişilebilen ve o fonksiyona aktarılan argümanların değerlerini içeren Array benzeri bir nesnedir ve ok olmayan tüm fonksiyonlarda kullanılabilir. Bir fonksiyonun argümanlarına o fonksiyonun içinde arguments nesnesini kullanarak başvurabilirsiniz. Fonksiyonun çağrıldığı her bir argüman için girdileri vardır ve ilk girdinin indeksi 0'dır. Ancak, modern kodda geri kalan parametreler tercih edilmelidir.
### Lexical scoping
Js dynamic bir şekilde değil static bir şekilde scoplama yapar. Kaynak koddaki değeri alır.

```
var a = "static";

function f1() {
	console.log(a);
}

function f2() {
	var a = "dynamic";
	f1();
}

f2(); // static
```

Burada `f1()` fonksiyonu çalıştığı zaman `a`  değerini arar ilk olarak kendi scope kapsamına bakar ondan sonrada bir dış scope kapsamına bakar dış scope kapsamında ise `a = 'static'` olduğu için çıktı normalde beklendiği gibi çalışmaya bilir.
