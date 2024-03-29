
## Variable Declarations
JavaScript'te değişkenleri kullanmak için önce onu oluşturmamız, yani bir değişken bildirmemiz gerekir. Değişkenleri bildirmek için var, let veya const anahtar kelimelerinden birini kullanırız.

#var => var deyimi, işlev kapsamındaki veya global kapsamdaki değişkenleri bildirir ve isteğe bağlı olarak her birini bir değerle başlatır.
```
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
```


#let => let bildirimi, blok kapsamındaki bir yerel değişkeni bildirir ve isteğe bağlı olarak bir değerle başlatır.
```
console.log("let keyword");
let x = 1;
if (x === 1) {
	let x = 2;
	console.log(x); // Expected output: 2
}
console.log(x); // Expected output: 1
```

#const => Sabitler, let anahtar sözcüğü kullanılarak bildirilen değişkenler gibi blok kapsamlıdır. Bir sabitin değeri yeniden atama yoluyla (yani atama operatörü kullanılarak) değiştirilemez ve yeniden bildirilemez (yani bir değişken bildirimi yoluyla). Ancak, bir sabit bir nesne veya dizi ise, özellikleri veya öğeleri güncellenebilir veya kaldırılabilir.

# Primitive Types
JavaScript'te bir ilkel (ilkel değer, ilkel veri türü), nesne olmayan ve herhangi bir yöntemi veya özelliği olmayan verilerdir. 7 ilkel veri türü vardır:
- [string](https://developer.mozilla.org/en-US/docs/Glossary/String)
- [number](https://developer.mozilla.org/en-US/docs/Glossary/Number)
- [bigint](https://developer.mozilla.org/en-US/docs/Glossary/BigInt)
- [boolean](https://developer.mozilla.org/en-US/docs/Glossary/Boolean)
- [undefined](https://developer.mozilla.org/en-US/docs/Glossary/Undefined)
- [symbol](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol)
- [null](https://developer.mozilla.org/en-US/docs/Glossary/Null)

Çoğu zaman, ilkel bir değer doğrudan dil uygulamasının en alt seviyesinde temsil edilir.
## TypeOf Operator
Bir JavaScript değişkeninin veri türünü bulmak için typeOf operatörünü kullanabilirsiniz.

# Object
JavaScript nesnesi, anahtar-değer çiftlerine sahip olmamızı sağlayan bir veri yapısıdır; böylece farklı anahtarlara sahip olabiliriz ve her anahtar, herhangi bir JavaScript veri türünden olabilen bir değerle eşlenir. Gerçek dünyadaki bir nesneyle karşılaştırdığımızda, bir kalem renk, tasarım, yapıldığı malzeme vb. gibi çeşitli özelliklere sahip bir nesnedir. Aynı şekilde, JavaScript nesneleri de özelliklerini tanımlayan özelliklere sahip olabilir. Bir nesne, {...} şekil parantezleri ile isteğe bağlı bir özellik listesi ile oluşturulabilir. Bir özellik bir "anahtar: değer" çiftidir; burada anahtar bir dizedir ("özellik adı" olarak da adlandırılır) ve değer herhangi bir şey olabilir. Bir nesneyi imzalı dosyaları olan bir dolap olarak hayal edebiliriz. Her veri parçası anahtar tarafından kendi dosyasında saklanır. Bir dosyayı ismiyle bulmak veya dosya eklemek/çıkarmak kolaydır.

Bir nesneyi imzalı dosyaları olan bir dolap olarak hayal edebiliriz. Her veri parçası anahtar tarafından kendi dosyasında saklanır. Bir dosyayı ismiyle bulmak veya dosya eklemek/çıkarmak kolaydır.

![Alternatif Metin](./image/Pasted_image_20240120192801.png)


An empty object (“empty cabinet”) can be created using one of two syntaxes:

```
const emptyObj1 = new Object();
const emptyObj2 = {};
```

##### Computed properties
Bir nesne oluştururken, bir nesne değişmezinde köşeli parantezler kullanabiliriz. Buna hesaplanmış özellikler denir.

```
let fruit = 'apple';
let bag = {
	[fruit + 'Computers']: 5,
};
```

##### Property value shorthand
```
function makeUser(name, age) {
	return {
		name,
		age,
	};
}
```

#### Property names limitations
```
let objName = {
	for: 1,
	let: 4,
	return: 6,
};

console.log(objName.for + objName.let + objName.return);
```


#### Property existence test, “in” operator
```
let objNameDig = {
   0: 1, // same as "0": "test"
};
console.log("0" in objNameDig); // true
console.log("0" in objName); // false
```

#### The "for..in" loop
```
for (let key in user) {
   console.log(key + ": " + user[key]);
}
```

# Prototypes
JavaScript, bir prototip modeli etrafında oluşturulmuş nesne yönelimli bir dildir. JavaScript'te her nesne, eğer varsa, prototipinden özellikleri miras alır. Bir prototip basitçe başka bir nesnenin özelliklerini miras aldığı bir nesnedir. JavaScript kullanarak karmaşık programlar oluşturmak için, prototiplerle çalışma konusunda yetkin olmak gerekir - bunlar dildeki OOP'nin özünü oluşturur.

Prototipler, JavaScript nesnelerinin özelliklerini birbirlerinden miras aldıkları mekanizmadır.

#### The prototype chain
JavaScript'teki her nesnenin prototipi olarak adlandırılan yerleşik bir özelliği vardır. Prototipin kendisi bir nesnedir, bu nedenle prototip kendi prototipine sahip olur ve buna prototip zinciri denir. Zincir, kendi prototipi için null olan bir prototipe ulaştığımızda sona erer.

Bir nesnenin bir özelliğine erişmeye çalıştığınızda: özellik nesnenin kendisinde bulunamazsa, özellik için prototip aranır. Özellik hala bulunamazsa, prototipin prototipi aranır ve bu işlem, özellik bulunana veya zincirin sonuna ulaşılana kadar devam eder; bu durumda tanımsız döndürülür.

Yani myObject.toString() dediğimizde, tarayıcı:
- looks for `toString` in `myObject`
- orada bulamaz, bu yüzden `toString` için `myObject`'in prototip nesnesine bakar
- onu orada bulur ve çağırır.

![](./image/Pasted_image_20240121000517.png)

#### Setting a prototype

###### Using Object.create
Object.create() yöntemi yeni bir nesne oluşturur ve yeni nesnenin prototipi olarak kullanılacak bir nesne belirtmenize olanak tanır.

```
const person = {
	id: 1,
	greet() {
	   console.log("hi");
	}
};
const Carl = Object.create(person);
Carl.type = "human";
Carl.greet(); // hi
console.log(Object.getPrototypeOf(Carl)); // { id: 1, greet: [Function: greet] }
```
Burada bir greet() metodu olan personPrototype nesnesini oluşturuyoruz. Daha sonra prototipi personPrototype olan yeni bir nesne oluşturmak için Object.create() işlevini kullanırız. Artık yeni nesne üzerinde greet() metodunu çağırabiliriz ve prototip bunun uygulanmasını sağlar.

###### Using a constructor
JavaScript'te tüm fonksiyonların prototip adında bir özelliği vardır. Bir fonksiyonu kurucu olarak çağırdığınızda, bu özellik yeni oluşturulan nesnenin prototipi olarak ayarlanır (geleneksel olarak, __proto__ adlı özellikte).

```
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
```

###### Own properties
Buradaki isim gibi doğrudan nesnede tanımlanan özelliklere kendi özellikleri denir ve bir özelliğin kendi özelliği olup olmadığını statik Object.hasOwn() yöntemini kullanarak kontrol edebilirsiniz:

```
const irma = new Person("Irma");
console.log(Object.hasOwn(irma, "name")); // true
console.log(Object.hasOwn(irma, "greet")); // false
```

## Prototypal Inheritance
Prototip Kalıtım, javascript'te nesnelere yöntem ve özellik eklemek için kullanılan bir özelliktir. Bir nesnenin başka bir nesnenin özelliklerini ve yöntemlerini miras alabildiği bir yöntemdir. Geleneksel olarak, bir nesnenin Prototipini almak ve ayarlamak için Object.getPrototypeOf ve Object.setPrototypeOf kullanırız. Günümüzde, modern dilde, `__proto__` kullanılarak ayarlanmaktadır.

![](./image/Pasted_image_20240121163049.png)

Syntax:
`ChildObject.__proto__ = ParentObject`

```
let person = {
	talk: true,
	canFly() {
		console.log("Can't fly");
	}
};

let user = {
	canCode: true,
	canCook() {
		console.log("Can't say");
	},
	__proto__: person,
}

user.canFly(); // Can't fly
console.log("Talk: " + user.talk); // Talk: true
user.canCook(); // Can't say
console.log(Object.getPrototypeOf(user));
// { talk: true, canFly: [Function: canFly] }

```


## Built-in Objects

Yerleşik nesneler veya "global nesneler", dil spesifikasyonunun kendisinde yerleşik olanlardır. JavaScript dilinde çok sayıda yerleşik nesne vardır ve bunların hepsine global kapsamda erişilebilir. Bazı örnekler şunlardır:
- `Number`
- `Math`
- `Date`
- `String`
- `Error`
- `Function`
- `Boolean`

Dilin standart bir parçası olarak gelen ve her JavaScript ortamında kullanılabilen nesnelerdir. Bu nesneler, dilin temel işlevselliğini sağlayan önemli bileşenlerdir. İşte bazı örnekler:

```
let obj = new Object();
let arr = new Array();
let str = new String("Hello");
let num = new Number(42);
let bool = new Boolean(true);
```

# Type Casting
Tür dönüştürme (veya typecasting), verilerin bir veri türünden diğerine aktarılması anlamına gelir. Derleyici (derlenmiş diller için) veya çalışma zamanı (JavaScript gibi kod dilleri için) veri türlerini otomatik olarak dönüştürdüğünde örtük dönüştürme  (implicit conversion) gerçekleşir. Kaynak kod da açıkça bir dönüşümün gerçekleşmesini gerektirebilir.

Çoğu zaman, operatörler ve fonksiyonlar kendilerine verilen değerleri otomatik olarak doğru türe dönüştürür.  
  
Örneğin, `alert` herhangi bir değeri göstermek için otomatik olarak bir dizeye dönüştürür. Matematiksel işlemler değerleri sayılara dönüştürür.

## Type Conversion/Coercion (Tür Dönüştürme/Zorlama)
Örneğin, "foo" + 1 ifadesi verildiğinde, 1 Sayısı örtük olarak bir Dizeye dönüştürülür ve ifade "foo1" döndürür. Number("0x11") komutu verildiğinde, "0x11" dizesi açıkça 17 sayısına dönüştürülür, bu tür dönüştürmesine bir örnektir.

Tür zorlaması (Type Coercion), değerlerin bir veri türünden diğerine (dizelerden sayılara gibi) otomatik veya örtük olarak dönüştürülmesidir. Tür dönüştürme, tür zorlamasına benzer çünkü her ikisi de değerleri bir veri türünden diğerine dönüştürür, ancak önemli bir fark vardır: tür zorlaması örtüktür, oysa tür dönüştürme örtük veya açık olabilir.

```
const value1 = "5";
const value2 = 9;
let sum = value1 + value2;

console.log(sum); // 59
console.log(typeof sum); // string
```

Yukarıdaki örnekte, JavaScript bir sayıdan 9'u bir dizeye zorlamış ve ardından iki değeri birleştirerek 59'luk bir dize elde etmiştir. JavaScript bir dize veya sayı arasında seçim yapmak zorunda kalmış ve bir dize kullanmaya karar vermiştir.

Derleyici 5'i bir sayıya zorlayabilir ve 14'lük bir toplam döndürebilirdi, ancak bunu yapmadı. Bu sonucu döndürmek için, Number() yöntemini kullanarak 5'i açıkça bir sayıya dönüştürmeniz gerekir:

````
sum = Number(value1) + value2;
````

### Explicit Type Casting
Tip dökümü, verilen verinin dönüştürüleceği tipi açıkça belirterek veriyi bir veri tipinden diğerine aktarmak anlamına gelir. Açık tip dönüştürme normalde verileri diğer değişkenlerle uyumlu hale getirmek için yapılır. Tip atama yöntemlerine örnek olarak parseInt(), parseFloat(), toString() verilebilir.
### Implicit Type Casting
Örtük tür dönüştürme, derleyici veya çalışma zamanı veri türlerini otomatik olarak dönüştürdüğünde gerçekleşir. JavaScript gevşek tipli bir dildir ve çoğu zaman operatörler bir değeri otomatik olarak doğru tipe dönüştürür.


# Data Structures
Veri yapısı, verileri etkin erişim ve değişikliğe izin verecek şekilde düzenlemek, yönetmek ve saklamak için kullanılan bir formattır. ilkel ve ilkel olmayan data structurelarımız vardır js'de. Primitve data structurelarımız standart progamlama dili ile birlikte gelir. Non primitive data structurelarımız varsayılan olarak gelmez ve kullanmak istiyorsak bunları kodlamamız gerekiyor.

## Indexed Collections
İndeksli Koleksiyonlar, sayısal indekslere sahip koleksiyonlardır, yani bir indeks değerine göre sıralanan veri koleksiyonlarıdır. JavaScript'te dizi, dizinli bir koleksiyondur. Dizi, sayısal bir indeksi olan sıralı bir değerler kümesidir.
###### #syntax 

```
let arr = new Array( element0, element1, ... );   
let arr = Array( element0, element1, ... );       
let arr = [ element0, element1, ... ];
// Creating an array with given size;
let arr = new Array(6); 
let arr = Array(6);
let arr = [];
arr.length = 6;
```

#concat #methodArray
İki veya daha fazla diziyi birleştirir. Bu yöntem, mevcut dizileri değiştirmeden yeni bir dizi döndürür.
```
let myArr = ["1", "2", "3"];
myArr = myArr.concat("a", "b", "c");
console.log(myArr); // [ '1', '2', '3', 'a', 'b', 'c' ]
```


Objelerde ki gibi iki veriyi birbiri ile karşılaştırırken adres temelli karşılaştırır yani içeriği kontrol ederek değil.

```
let value = ["hi"];
let sameContentValue = ["hi"];
if (value == sameContentValue) {
	console.log("value == sameContentValue");
} else {
	console.log("value != sameContentValue"); // run
}

  

let refValue = value;
if (value == refValue) {
	console.log("value == refValue"); // run
} else {
	console.log("value != refValue");
}
refValue[0] = "Bye";
console.log(value[0]); // Bye
```

## Keyed Collections
Anahtarlı koleksiyonlar, indexe göre değil anahtara göre sıralanan veri koleksiyonlarıdır. Doğaları gereği ilişkiseldirler. Map ve set nesneleri anahtarlı koleksiyonlardır ve ekleme sırasına göre yinelenebilir.

### Maps
Map nesnesi basit bir anahtar/değer haritasıdır ve öğelerini ekleme sırasına göre yineleyebilir.

Aşağıdaki kod, bir Harita ile yapılan bazı temel işlemleri göstermektedir. Daha fazla örnek ve API'nin tamamı için Map referans sayfasına da bakın. Her yineleme için bir `[key, value]`' dizisi döndürmek üzere bir for...of döngüsü kullanabilirsiniz.

```
const sayings = new Map();
sayings.set("dog", "woof");
sayings.set("cat", "meow");
sayings.set("elephant", "toot");
sayings.size; // 3
sayings.get("dog"); // woof
sayings.get("fox"); // undefined
sayings.has("bird"); // false
sayings.delete("dog");
sayings.has("dog"); // false

for (const [key, value] of sayings) {
	console.log(`${key} goes ${value}`);
}
// "cat goes meow"
// "elephant goes toot"
sayings.clear();
sayings.size; // 0

```

#### Object vs Map

- Bir Nesnenin anahtarları strings veya symbol olur, burada bir Map için herhangi bir değer olabilirler. 
```
let obj = {};
let map = new Map();
let xObj = {x:1};
obj[xObj] = 5;
map.set(xObj, 5);
console.log(obj) // { '[object Object]': 5 }
console.log(map) // Map(1) { { x: 1 } => 5 }
```

- Bir Haritanın boyutunu kolayca alabilirsiniz, ancak bir Nesne için boyutu manuel olarak takip etmeniz gerekir.
```
console.log(obj.size) // undefined
console.log(map.size) // 1
```

- Haritaların yinelenmesi, öğelerin yerleştirme sırasına göredir.
```
map.set(1, "one");
map.forEach( el => console.log(el)); // 5 -> one
obj[1] = 'one';
console.log(obj); // { '1': 'one', '[object Object]': 5 }
```

#### weakMap
Zayıf map  `map`'in kendisi güçlü bir şekilde `key`'i referanslar ancak weakMap zayıf referans yapar.
```
let weakMap = new WeakMap();
let map1 = new Map();
(function () {
	let keyObj = { name: 'John' };
	weakMap.set(keyObj, 'Value associated with John');
	map1.set(keyObj, 'Value associated with John');
	console.log(weakMap.get(keyObj)); // Value associated with John
})();

console.log(weakMap); // WeakMap { <items unknown> }
console.log(map1); // Map(1) { { name: 'John' } => 'Value associated with John' }
```

Bu kodda weakMap garbage collector tarafından keyi siliniyor ancak map de herhangi bir değişiklik yoktur. **:** WeakMap nesnesinde anahtarlar arasında dolaşmak veya `size` gibi genel özelliklere erişmek mümkün değildir. WeakMap, sadece temel `set`, `get`, ve `delete` metodlarına sahiptir.

### Set
Set nesnesi, ister ilkel değerler ister nesne referansları olsun, her türden benzersiz değerleri saklamanıza olanak tanır. Ekleme sırasına göre yineleme yapabilirsiniz. Ekleme sırası, her bir öğenin `add()` methodu tarafından kümeye başarıyla eklendiği sıraya karşılık gelir.

`has()` yöntemi, bir değerin kümede olup olmadığını kontrol eder ve ortalama olarak, kümeye daha önce eklenmiş olan öğelerin çoğunu test etmekten daha hızlı bir yaklaşım kullanır. Özellikle, bir dizi setin boyutuna eşit bir uzunluğa sahip olduğunda, ortalama olarak Array.prototype.includes yönteminden daha hızlıdır.

```
console.log(weakMap); // WeakMap { <items unknown> }
console.log(map1); // Map(1) { { name: 'John' } => 'Value associated with John' }
let set = new Set()
	.add('red')
	.add('green')
	.add('blue');
console.log(set); // Set(3) { 'red', 'green', 'blue' }
set.add('red');
console.log(set); // Set(3) { 'red', 'green', 'blue' }
if (set.has('red')) { // using it before the add method improves performance
	set.add('brown');
}
console.log(set); // Set(4) { 'red', 'green', 'blue', 'brown' }
```

`set`'in bazı kullanım yerleri:

- **Tekrarlanan Değerleri Ortadan Kaldırmak:** Bir dizideki veya başka bir koleksiyonda tekrarlanan değerleri kaldırmak için kullanılabilir.
```
let numbers = [1, 2, 3, 4, 1, 2, 5];
let uniqueNumbers = new Set(numbers); // Repeated values are automatically removed
console.log([...uniqueNumbers]); // [1, 2, 3, 4, 5]
```

- **Eleman Varlığını Kontrol Etmek:** Bir elemanın set içinde olup olmadığını hızlı bir şekilde kontrol etmek için kullanılabilir.
```
let mySet = new Set([1, 2, 3]);
console.log(mySet.has(2)); // true
console.log(mySet.has(4)); // false
```

more details: https://exploringjs.com/impatient-js/ch_sets.html

