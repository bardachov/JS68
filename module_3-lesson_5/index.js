console.log("Модуль 3. Заняття 1. Об'єкти");

// ## Example 1 - Основи об'єктів

// Напиши скрипт, який для об'єкта `user`, послідовно:

// - додає поле `mood` зі значенням `'happy'`
// - замінює значення `hobby` на `'skydiving'`
// - замінює значення `premium` на `false`
// - виводить вміст об'єкта `user` у форматі `ключ:значення` використовуючи
//   `Object.keys()` та `for...of`

// ### Код

// ```js
// const user = {
//   name: 'Mango',
//   age: 20,
//   hobby: 'html',
//   premium: true,
// };

// user.mood = 'happy';
// user.hobby = 'skydiving';
// user.premium = !user.premium;

// console.log(user)

// const userKeys = Object.keys(user);
// console.log(userKeys.length)

// for (const key of userKeys) {
//   console.log(`${key} : ${user[key]}`)
// }
// ```

// ## Example 2 - метод Object.values()

// У нас є об'єкт, де зберігаються зарплати нашої команди. Напишіть код для
// підсумовування всіх зарплат і збережіть результат у змінній sum. Повинно
// вийти 390. Якщо об'єкт `salaries` порожній, то результат має бути 0.

// ### Код

// ```js
// const salaries = {
//   John: 100,
//   Ann: 160,
//   Pete: 130,
// };

// let sum = 0;

// const salariesValues = Object.values(salaries);
// for (let value of salariesValues) {
//   sum += value
// }

// console.log(salariesValues, sum)

// ```

// ## Example 3 - Масив об'єктів

// Напишіть функцію `calcTotalPrice(stones, stoneName)`, яка приймає масив
// об'єктів та рядок з назвою каменю. Функція рахує і повертає загальну вартість
// каміння з таким ім'ям, ціною та кількістю з об'єкта

// ### Код
/**
 * 1. Створити функцію яка приймає обʼєктів і рядок(імя бажаного каменю)
 * 2. Знайти із масиву обʼєктів бажаний камень
 * 3. Порахувати його загальну вартість
 * 4. Повернути вартість із функції
 */

// ```js
const stones = [
  { name: 'Смарагд', price: 1300, quantity: 4 },
  { name: 'Діамант', price: 2700, quantity: 3 },
  { name: 'Сапфір', price: 400, quantity: 7 },
  { name: 'Щебінь', price: 200, quantity: 2 },
];

function calcTotalPrice (array, stoneName) {
  
  //1
  // let stone;

  // for (let item of array) {
  //   if (item.name === stoneName) {
  //     stone = item;
  //     break;
  //   }
  // }

  // if (!stone) return 0

  // return stone.price * stone.quantity  

  //2
  for (let item of array) {
    if (item.name === stoneName) {
      return item.price * item.quantity
    }
  }

  return 0
}

const result = calcTotalPrice(stones, 'Сапфір');
// console.log(result)
// ```

// ## Example 4 - Комплексні завдання

// Напиши скрипт управління особистим кабінетом інтернет банку. Є об'єкт `account`
// в якому необхідно реалізувати методи для роботи з балансом та історією
// транзакцій.

// ```js
// /*
//  * Типів транзакцій всього два.
//  * Можна покласти чи зняти гроші з рахунку.
//  */
const TransactionTypes = {
  DEPOSIT: 'deposit',
  WITHDRAW: 'withdraw',
};

let transactionId = 1;

// /*
//  * Кожна транзакція це об'єкт із властивостями: id, type та amount
//  */

const account = {
  // Поточний баланс рахунку
  balance: 0,

  // Історія транзакцій
  transactions: [],

  /*
   * Метод створює та повертає об'єкт транзакції.
   * Приймає суму та тип транзакції.
   */
  createTransaction(amount, type) {
    transactionId += 1;
    
    return {
      amount: amount,
      type: type,
      id: transactionId
    }
  },

  /*
   * Метод, що відповідає за додавання суми до балансу.
   * Приймає суму транзакції.
   * Викликає createTransaction для створення об'єкта транзакції
   * після чого додає його до історії транзакцій
   */
  deposit(amount) {
    this.balance += amount;
    const newTransaction = this.createTransaction(amount, TransactionTypes.DEPOSIT)
    this.transactions.push(newTransaction)
  },

  /*
   * Метод, що відповідає за зняття суми з балансу.
   * Приймає суму транзакції.
   * Викликає createTransaction для створення об'єкта транзакції
   * після чого додає його до історії транзакцій.
   *
   * Якщо amount більше ніж поточний баланс, виводь повідомлення
   * про те, що зняття такої суми не можливе, недостатньо коштів.
   */
  withdraw(amount) {
    this.balance -= amount;
    this.transactions.push(this.createTransaction(amount, TransactionTypes.WITHDRAW))
  },

  getMinTransaction() {
    let minAmount = this.transactions[0].amount;
    let minIndex = 0;
    
    for (let transaction of this.transactions) {
      
      const transactionKeys = Object.keys(transaction);

      for (let key of transactionKeys) {
        console.log(key, transaction[key])
      }
      
      if (transaction.amount < minAmount) {
        minAmount = transaction.amount;
        minIndex = this.transactions.indexOf(transaction);
      }
    }

    return this.transactions[minIndex]
  },

  /*
   * Метод повертає поточний баланс
   */
  getBalance() {
    return this.balance
  },

  printTransactions() {
    console.log(this.transactions)
  },

  /*
   * Метод шукає та повертає об'єкт транзакції по id
   */
  getTransactionDetails(id) {
    for (let item of this.transactions) {
      if (item.id === id) return item
    }

    return {}
  },

  /*
   * Метод повертає кількість коштів
   * певного типу транзакції з усієї історії транзакцій
   */
  getTransactionTotal(type) {
    let result = 0;
    
    for (let item of this.transactions) {
      if(item.type === type) {
        console.log(item)
        result += item.amount
      }
    }

    return result
  },
};
// ```

account.deposit(1000);
account.deposit(500);
account.deposit(300);

account.withdraw(100);
account.withdraw(400);
account.withdraw(50);
account.printTransactions();

const currentbalance = account.getBalance();
console.log('currentBalance = ', currentbalance)

const minTrans = account.getMinTransaction();
console.log("Min Transaction = ",minTrans)

// const transaction = account.getTransactionDetails(3);
// const transaction1 = account.getTransactionDetails(1);

// console.log(transaction)
// console.log(transaction1)

const totalDeposit = account.getTransactionTotal(TransactionTypes.DEPOSIT)
console.log(totalDeposit)

const totalWithdraw = account.getTransactionTotal(TransactionTypes.WITHDRAW)
console.log(totalWithdraw)


/**
 * питання
 */

/*
 * короткий запис властивостей
 */
const username = 'Mango';
const email = 'mango@mail.com';

const signupData = {
  username,
  email,
};

/*
 * обчислювальні властивості
 */

const inputName = 'color';
const inputValue = 'tomato';

const colorPickerData = {
  [inputName]: inputValue,
};

console.log(colorPickerData)

colorPickerData.color
colorPickerData['color']


function countProps(object = { name: "Mango", age: 2 }) {
// function countProps(object) {
  let propCount = 0;
  // Change code below this line
  for (const key in object) {
    if (object.hasOwnProperty(key)) {
      propCount += 1;
    }
  }
  // Change code above this line
  return propCount;
}

console.log(countProps({ name: "Mango", age: 2 }));
console.log(countProps({ mail: "poly@mail.com", isOnline: true, score: 500 }));

countProps()
// Чи вірно я розумію напис function countProps(object) це об'єкт який знакодиться у функції?
//і це можна замінити таким  написом?




// "Поясніть теорію МЕТОДИ ОБ""ЄКТІВ
// const bookShelf = {
//   books: ["The Last Kingdom", "Dream Guardian"],
  
//   // Це метод об'єкта
//   getBooks() {
//     return this.books
//     // console.log(""Цей метод буде повертати всі книги - властивість books"");
//   },
//   // Це метод об'єкта
//   addBook(bookName) {
//     this.books.push(bookName)
//     // console.log(""Цей метод буде додавати нову книгу у властивість books"");
//   },
// };

// // Виклики методів
// bookShelf.getBooks();
// bookShelf.addBook("Нова книга");


const bookShelf = {
  books: ["The Last Kingdom"],
  getBooks() {
    return this.books;
  },
  addBook(bookName) {
    this.books.push(bookName);
  },
  removeBook(bookName) {
    const bookIndex = this.books.indexOf(bookName);
    this.books.splice(bookIndex, 1);
  },
};

// console.log(bookShelf.getBooks()); // ["The Last Kingdom"]
// bookShelf.addBook("The Mist");
// bookShelf.addBook("Dream Guardian");
// console.log(bookShelf.getBooks()); // ['The Last Kingdom', 'The Mist', 'Dream Guardian']
// bookShelf.removeBook("The Mist");
// console.log(bookShelf.getBooks()); // ['The Last Kingdom', 'Dream Guardian']

// for (const key in object) {
//   object.hasOwnProperty
// }



const books = [ { title: "The Last Kingdom", author: "Bernard Cornwell", rating: 8.38, }, { title: "На березі спокійних вод", author: "Роберт Шеклі", rating: 8.51, }, ]; 
for (const book of books) {

  for (let key of Object.keys(book)) {
    console.log(key, book[key]); 
  }

  // for (const key in book) {
  //   console.log(key, book[key]); 
  // }
  
  
  // console.log(book.title); 
  // console.log(book.author);
  // console.log(book.rating); 
}	