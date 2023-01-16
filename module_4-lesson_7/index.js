console.log("Модуль 4. Заняття 7. Коллбеки. Стрілочні функції. forEach");

/** Приклади з кахуту */

// function foo (fn) {
//   fn()
// }

function logger(message) {
  // console.log(arguments)
  return true
}

// const logger = message => {
//   console.log(arguments)
//   return message
// }

// const logger = (a, b) => a + b
// const logger = (message, a) => message;
// const logger = (a, b) => {
//   return a + b
// }

// foo(logger)
// logger()




// ## Example 1 - Коллбек функції

// Напишіть наступні функції:

// - `createProduct(obj, callback)` - приймає об'єкт товару без id, а також
//   коллбек. Функція створює об'єкт товару, додаючи йому унікальний ідентифікатор у
//   властивість `id` та викликає коллбек передаючи йому створений об'єкт.
// - `logProduct(product)` - колббек приймаючий об'єкт продукту і логуючий його в
//   консоль
// - `logTotalPrice(product)` - колббек, що приймає об'єкт продукту і логіює загальну 
//   вартість товару в консоль


/**
 * 1. Додати до обʼєкта ID
 * 2. Передати обʼєкт в колбек
 */
function createProduct (obj, callback) {
  const object = {
    ...obj,
    id: Date.now()
  }

  callback(object)
}

function logProduct (product) {
  // console.log(product)
}

function logTotalPrice(product) {
  // console.log(product.price * product.quantity)
}

function doubleQuantity({quantity}) {
  // console.log(quantity * 2)
}

const product = { name: 'Tomato', price: 10, quantity: 43 };
createProduct(product, doubleQuantity)

createProduct({ name: '🍎', price: 30, quantity: 3 }, logProduct);
createProduct({ name: 'Tomato', price: 10, quantity: 43 }, logTotalPrice)
















// ## Example 2 - Коллбек функції

// Додайте в об'єкт `account` методи `withdraw(amount, onSuccess, onError)` та
// `deposit(amount, onSuccess, onError)`, де перший параметр це сума операції, а
// другий та третій - коллбеки.

// Метод `withdraw` викликає onError якщо amount більше TRANSACTION_LIMIT або
// this.balance, і onSuccess в іншому випадку.

// Метод `deposit` викликає onError якщо amount більше TRANSACTION_LIMIT або менше
// або дорівнює нулю, і onSuccess в іншому випадку.

// ```js
// const TRANSACTION_LIMIT = 1000;

// const account = {
//   username: 'Jacob',
//   balance: 400,
//   withdraw(amount, onSuccess, onError) {
//     if (amount > TRANSACTION_LIMIT || amount > this.balance) {
//       onError({
//         message: "сталась біда. Ліміт перевищено або грошей нема",
//         status: "ERROR"
//       })
//     } else {
//       onSuccess({
//         status: "OK",
//         message: "Операція withdraw успішна"
//       })
//     }
//   },
//   deposit(amount, onSuccess, onError) {
//     if (amount <= 0 || amount > TRANSACTION_LIMIT) {
//       onError({
//         message: "Deposit не вдався. Бо сума менше або дорівнює нуль. Або ліміт перевищено",
//         status: "ERROR DEPOSIT"
//       })
//     } else {
//       onSuccess({
//         message: 'Все гуд'
//       })
//     }
//   }
// };

// function handleSuccess({message, status = "OK"}) {
//   console.log(`${status}: ${message}`)
// }

// function handleError({message, status}) {
//   console.log(`${status}: ${message}`)
// } 

// account.withdraw(2000, handleSuccess, handleError);
// account.withdraw(600, handleSuccess, handleError);
// account.withdraw(300, handleSuccess, handleError);
// account.deposit(1700, handleSuccess, handleError);
// account.deposit(0, handleSuccess, handleError);
// account.deposit(-600, handleSuccess, handleError);
// account.deposit(600, handleSuccess, handleError);
// ```






// ## Example 3 - Коллбек функції

// Напишіть функцію `each(array, callback)`, яка першим параметром очікує
// масив, а другим - функцію, яка застосовується до кожного елемента масиву.
// Функція each повинна повернути новий масив, елементами якого будуть результати
// виклику коллбека.

/**
 * 1. створити новий пустий результуючий масив
 * 2. Запустити цикл по масиву.
 * 3. Викликати колбек на кожній ітераціїї циклу. Передавши поточний елемент
 * 4. Додати результат колбеку в результуючий масив
 * 5. Повернути результуючий масив
 */

// function each(array, callback) {
//   const result = [];

//   for(let element of array) {
//     //1
//     // const el = callback(element);
//     // result.push(el)
    
//     //2
//     result.push(callback(element))
//   }

//   return result
// }

// ```js

// const numbers = [64, 49, 36, 25, 16];

// const newNumbers = each(numbers, function (value) {
//   return value * 2;
// });

// console.log(newNumbers)

// console.log(
//   each([64, 49, 36, 25, 16], function (value) {
//     return value * 2;
//   }),
// );
// console.log(
//   each([64, 49, 36, 25, 16], function (value) {
//     return value - 10;
//   }),
// );
// console.log(
//   each([64, 49, 36, 25, 16], function (value) {
//     return Math.sqrt(value);
//   }),
// );
// console.log(
//   each([1.5, 2.1, 16.4, 9.7, 11.3], function (value) {
//     return Math.ceil(value);
//   }),
// );
// console.log(
//   each([1.5, 2.1, 16.4, 9.7, 11.3], function (value) {
//     return Math.floor(value);
//   }),
// );

// const users = [{
//   name: "artem",
//   age: 30
// }];

// const res = each(users, function (user) {
//   return {
//     ...user,
//     name: user.name.toUpperCase()
//   }
// });

// console.log(res)

// ```

// ## Example 4 - Стрілочні функції

// Виконайте рефакторинг коду за допомогою стрілочних функцій.

// ```js

const fnName = arg => {return 'a'};

// const createProduct = (partialProduct, callback) => {
//   const product = { id: Date.now(), ...partialProduct };
//   callback(product);
// }

// function logProduct(product) {
//   console.log(product);
// }
// =
// const logProduct = product => console.log(product)

// function logTotalPrice(product) {
//   console.log(product.price * product.quantity);
// }
//=
// const logTotalPrice = product => console.log(product.price * product.quantity)

// createProduct({ name: '🍎', price: 30, quantity: 3 }, logProduct);
// createProduct({ name: '🍋', price: 20, quantity: 5 }, logTotalPrice);
// ```













// ## Example 5 - Стрілочні функції

// Виконайте рефакторинг коду за допомогою стрілочних функцій.

// ```js
const TRANSACTION_LIMIT = 1000;

const account = {
  username: 'Jacob',
  balance: 400,
  withdraw(amount, onSuccess, onError) {
    if (amount > TRANSACTION_LIMIT) {
      onError(`Amount should not exceed ${TRANSACTION_LIMIT} credits`);
    } else if (amount > this.balance) {
      onError(`Amount can't exceed account balance of ${this.balance} credits`);
    } else {
      this.balance -= amount;
      onSuccess(`Account balance: ${this.balance}`);
    }
  },
  deposit(amount, onSuccess, onError) {
    if (amount > TRANSACTION_LIMIT) {
      onError(`Amount should not exceed ${TRANSACTION_LIMIT} credits`);
    } else if (amount <= 0) {
      onError(`Amount must be more than 0 credits`);
    } else {
      this.balance += amount;
      onSuccess(`Account balance: ${this.balance}`);
    }
  },
};

// function handleSuccess(message) {
//   console.log(`✅ Success! ${message}`);
// }
// function handleError(message) {
//   console.log(`❌ Error! ${message}`);
// }

// const handleSuccess = message => console.log(`✅ Success! ${message}`);
// const handleError = message => console.log(`❌ Error! ${message}`);


// account.withdraw(2000, handleSuccess, handleError);
// account.withdraw(600, handleSuccess, handleError);
// account.withdraw(300, handleSuccess, handleError);
// account.deposit(1700, handleSuccess, handleError);
// account.deposit(0, handleSuccess, handleError);
// account.deposit(-600, handleSuccess, handleError);
// account.deposit(600, handleSuccess, handleError);
// ```

// ## Example 6 - Інлайн стрілочні функції

// Виконайте рефакторинг коду за допомогою стрілочних функцій.

// ```js
function each(array, callback) {
  const newArr = [];
  for (const el of array) {
    newArr.push(callback(el));
  }
  return newArr;
}

// console.log(
//   each([64, 49, 36, 25, 16], value => value * 2),
// );
// console.log(
//   each([64, 49, 36, 25, 16], value => value - 10),
// );
// console.log(
//   each([64, 49, 36, 25, 16], function (value) {
//     return Math.sqrt(value);
//   }),
// );
// console.log(
//   each([1.5, 2.1, 16.4, 9.7, 11.3], function (value) {
//     return Math.ceil(value);
//   }),
// );
// console.log(
//   each([1.5, 2.1, 16.4, 9.7, 11.3], function (value) {
//     return Math.floor(value);
//   }),
// );

// const res = each(users, user => {
//   return {
//     ...user,
//     name: user.name.toUpperCase()
//   }
// });
//==
// const users = [{
//   name: "artem",
//   age: 30
// }];

// console.log(each(users, user => ({
//     ...user,
//     name: user.name.toUpperCase()
//   })
// ))

// ```



// ## Example 7 - Метод forEach

// Виконайте рефакторинг коду за допомогою методу `forEach` та стрілочні функції.

// ```js
function logItems(items) {
  console.log(items);
  
  //1
  // const fn = (item, index) => {
  //   console.log(`${index + 1} - ${item}`);
  // }
  // items.forEach(fn)

  //2 
  items.forEach( el => console.log(el))

  // for (let i = 0; i < items.length; i += 1) {
  //   console.log(`${i + 1} - ${items[i]}`);
  // }
}

// logItems(['Mango', 'Poly', 'Ajax']);
// logItems(['🍎', '🍇', '🍑', '🍌', '🍋']);
// ```


















// ## Example 8 - Метод forEach

// Виконайте рефакторинг коду за допомогою методу `forEach` та стрілочні функції.

// ```js
function printContactsInfo({ names, phones }) {
  const nameList = names.split(',');
  const phoneList = phones.split(',');
  
  nameList.forEach((name, i) => {
    // console.log(`${name}: ${phoneList[i]}`);
    console.log(`${nameList[i]}: ${phoneList[i]}`);
  })

  // for (let i = 0; i < nameList.length; i += 1) {
  //   console.log(`${nameList[i]}: ${phoneList[i]}`);
  // }
}


// [{
//   name: "user",
//   age: 123
// }].forEach(({age}) => console.log(age))

// printContactsInfo({
//   names: 'Jacob,William,Solomon,Artemis',
//   phones: '89001234567,89001112233,890055566377,890055566300',
// });
// ```















// ## Example 9 - Метод forEach

// Виконайте рефакторинг коду за допомогою методу `forEach` та стрілочні функції.

// ```js
function calсulateAverage(...args) {
  let total = 0;
  
  args.forEach( arg => total += arg)

  // for (let i = 0; i < args.length; i++) {
  //   total += args[i];
  // }

  return total / args.length;
}

console.log(calсulateAverage(1, 2, 3, 4)); // 2.5
console.log(calсulateAverage(14, 8, 2)); // 8
console.log(calсulateAverage(27, 43, 2, 8, 36)); // 23.2
// ```