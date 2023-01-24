// "use strict"
console.log("# Модуль 5. Заняття 9. Контекст виклику функції та this");

// function foo() {
//   console.log(this)
// }

// const obj = {
//   name: "My object",
//   logCtx: foo,
//   logContext() {
//     console.log(this)
//   }
// }

// // obj.logCtx()
// // obj.logContext()

// foo.apply(obj, [1, 2]);
// foo.call(obj, 1, 2);

// const bindedFoo = foo.bind(1, 2);
// bindedFoo()































// ## Example 1 - Майстерня коштовностей

// Напишіть метод `calcTotalPrice(stoneName)`, який приймає назву каменю.
// повертає загальну вартість каменів з таким ім'ям, ціну за штуку, та кількість.

// ```js
const chopShop = {
  stones: [
    { name: 'Emerald', price: 1300, quantity: 4 },
    { name: 'Diamond', price: 2700, quantity: 3 },
    { name: 'Sapphire', price: 1400, quantity: 7 },
    { name: 'Ruby', price: 800, quantity: 2 },
  ],
  calcTotalPrice(stoneName) {
    const foundStone = this.stones.find(el => el.name === stoneName);
    if (!foundStone) return 0;

    return foundStone.price * foundStone.quantity
  },
};

// console.log(chopShop.calcTotalPrice('Emeradld')); // 5200
// console.log(chopShop.calcTotalPrice('Diamond')); // 8100
// console.log(chopShop.calcTotalPrice('Sapphire')); // 9800
// console.log(chopShop.calcTotalPrice('Ruby')); // 1600
// ```







// ## Example 2 - Телефонна книга

// Виконайте рефакторинг методів об'єкту `phonebook` щоб код запрацював.

// ```js
const phonebook = {
  contacts: [],
  add(contact) {
    const newContact = {
      list: 'default',
      ...contact,
      id: this.generateId(),
      createdAt: this.getDate(),
    };
    
    this.contacts.push(newContact);
  },
  generateId() {
    return '_' + Math.random().toString(36).substr(2, 9);
  },
  getDate() {
    return Date.now();
  },
};

// console.log(
//   phonebook.add({
//     name: 'Mango',
//     email: 'mango@mail.com',
//     list: 'friends',
//   }),
// );
// console.log(
//   phonebook.add({
//     name: 'Poly',
//     email: 'poly@hotmail.com',
//   }),
// );

// console.log(phonebook)
// ```






// ## Example 3 - Калькулятор

// Створіть об'єкт `calculator` з трьома методами:

// - `read(a, b)`- приймає два значення та зберігає їх як властивості об'єкта.
// - `add()` - повертає суму збережених значень.
// - `mult()` - перемножує збережені значення та повертає результат.

// ```js
const calculator = {
  read(a = 1, b = 100) {
    this.a = a;
    this.b = b
  },

  add() {
    return this.a + this.b
  },

  mult() {
    return this.a * this.b
  }
};

// const calc2 = {};
// calculator.read.apply(calc2, [5, 78])
// calculator.read.call(calc2, 5, 78);
// const bindedRead = calculator.read.bind(calc2, 5, 78);
// bindedRead()

// console.log(calc2, calculator)

// calculator.read(3, 4);
// console.log(calculator.add())
// console.log(calculator.mult())
// ```

// let something = 'Hello'

const cat = {
  catName: 'Fluffy',
  getName: () => {
    return this.catName
  }
}

// const { getName } = cat;
// console.log(getName());    

// console.log(cat.getName())


// const object = {
//   who: 'World',
//   greet() {
//     return `Hello, ${this.who}!`; //this - object
//   },
//   farewell: () => {
//     return `Goodbye, ${this.who}!`; // this - window
//   }
// };
// console.log(object.greet());
// console.log(object.farewell());

// console.log(number)
// console.log(abc)

// var number = 4;
// let abc = 'foo';

// var num = 2;
// num = 5;

// let num1 = 2;
// num1 = 5;
// console.log(num1)


// function callback() {
//   console.log(this.length); // What is logged?
// }

// const object = {
//   length: 5,
//   method(callback) {
//     callback();
//   }
// };

// object.method(callback, 1, 2);

// callback()





const objABC1 = {
  nickName: 'UserABC',
  getNickName({country, b, ...props}) {
    console.log(country, b, props)
    // console.log(
    //   `Hi, I'm ${this.nickName}, I'm from ${country} and have got ${b} followers`
    // );
  },
};

// objABC1.getNickName('Ukraine', 34534446); 
// objABC1.getNickName(34534446, 'Ukraine'); 
objABC1.getNickName({
  country: 'Ukraine',
  followers: 4345435,
  a: "a",
  b: 'b',
  c: 'c'
}); 


// const objDAB1 = {
//   nickName: 'UserDAB',
// };

// const objBAB1 = {
//   nickName: 'UserBAB',
// };



// objABC1.getNickName.call(objDAB1, 'Ukraine', 12000); 

// const arrDAB = ['Ukraine', 12000];
// objABC1.getNickName.call(objDAB1, ...arrDAB); 

// objABC1.getNickName.call(objBAB1, 'USA', 357689); 

// objABC1.getNickName.apply(objDAB1, ['Ukraine', 12000]); 
// objABC1.getNickName.apply(objBAB1, ['USA', 357689]); 

// const arrBAB = ['USA', 357689];
// objABC1.getNickName.apply(objBAB1, arrBAB); 

// const abcbind1 = objABC1.getNickName.bind(objDAB1, 'BIND COUNTRY', 789678);
// abcbind1()

// const bindedGetNick = objABC1.getNickName.bind(objDAB1);
// bindedGetNick('Australia', 1)