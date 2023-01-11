console.log("Модуль 3 Заняття 6. Деструктуризація та rest/spread");

/** Кахут */
// const user = {
//   username: "Grut"
//   //... 100
// }

// const {username} = user

// function foo({username} = {}) {
//   console.log(username)
// }

// foo()
/** ---------------- */


// ## Example 1 - Деструктуризація

// Перепиши функцію так, щоб вона приймала один об'єкт параметрів замість набору
// незалежних аргументів.

// ```js
function calcBMI({weight, height}) {
  const numericWeight = Number(weight.replace(',', '.'));
  const numericHeight = Number(height.replace(',', '.'));
  return Number((numericWeight / numericHeight ** 2).toFixed(1));
}

const user = {
  weight: '88,3',
  height: '1.75',
}

// // Було
// console.log(calcBMI('88,3', '1.75'));
// // console.log(calcBMI('68,3', '1.65'));
// // console.log(calcBMI('118,3', '1.95'));

// // Очікується
// console.log(
//   calcBMI({
//     weight: '88,3',
//     height: '1.75',
//   }),
// );
// console.log(
//   calcBMI({
//     weight: '68,3',
//     height: '1.65',
//   }),
// );
// console.log(
//   calcBMI({
//     weight: '118,3',
//     height: '1.95',
//   }),
// );
// ```

// ## Example 2 - Деструктуризація

// Перепиши функцію так, щоб вона приймала один об'єкт параметрів замість набору
// незалежних аргументів.

// ```js

// const userA = {
//   name: 'John',
//   surname: 'Smith',
//   age: 24
// }

// function printUser({name, surname, age = 'unknow'} = {}) {
//   console.log(`User is ${name} ${surname}, his age is ${age}`)
// }

// function hello(hey = 'No argument') {
//   console.log(hey)
// }

// printUser(userA)
// printUser()

// hello('asdsadsad')
// hello()


// function hello() {
//   console.log('hello')
// }
// hello(1,2,34,55)


// function printContactsInfo({names = '', phones = ''} = {}) {
//   console.log(names, phones)
//   const nameList = names.split(',');
//   const phoneList = phones.split(',');
  
//   for (let i = 0; i < nameList.length; i += 1) {
//     console.log(`${nameList[i]}: ${phoneList[i]}`);
//   }
// }

// // Було
// // printContactsInfo(
// //   'Jacob,William,Solomon,Artemis',
// //   '89001234567,89001112233,890055566377,890055566300',
// // );

// printContactsInfo()

// // Очікується
// printContactsInfo({
//   // names: 'Jacob,William,Solomon,Artemis',
//   phones: '89001234567,89001112233,890055566377,890055566300',
// });
// ```

// ## Example 3 - Глибока деструктуризація

// Перепиши функцію так, щоб вона приймала один об'єкт параметрів замість набору
// незалежних аргументів.

// ```js
// function getBotReport(companyName, repairBots, defenceBots) {
//   return `${companyName} has ${repairBots + defenceBots} bots in stock`;
// }

function getBotReport({
    companyName,
    bots: {
      repair: repairBots,
      defence: defenceBots
    }
  }) {
  return `${companyName} has ${repairBots + defenceBots} bots in stock`;
}

const boatCompany = {
  companyName: 'Cyberdyne Systems',
  bots: {
    repair: 150,
    defence: 50,
  },
}

// // Було
// console.log(getBotReport('Cyberdyne Systems', 150, 50));

// // Очікується
// console.log(getBotReport(boatCompany)); // "Cyberdyne Systems has 200 bots in stock"
// ```

// ## Example 4 - Деструктуризація

// Напиши функцію, що приймає об'єкт параметрів із властивостями
// `companyName` та `stock` та виводить звіт про кількість товарів на складі будь-якої
// компанії.

// ```js
function getStockReport({companyName, stock}) {
  let stockAmount = 0;
  
  console.log(companyName);
  console.log(stock)
  
  const stockValues = Object.values(stock);
  console.log(stockValues);

  for (const value of stockValues) {
    stockAmount += value
  }

  return `${companyName} has ${stockAmount} bots`
}

const company1 = {
  companyName: 'Cyberdyne Systems',
  stock: {
    repairBots: 150,
    defenceBots: 50,
    defenceBots2: 50,
    defenceBots1: 50,
  },
};

// const report = getStockReport(company1);
// console.log(report)

// console.log(
//   getStockReport({
//     companyName: 'Cyberdyne Systems',
//     stock: {
//       repairBots: 150,
//       defenceBots: 50,
//     },
//   }),
// ); // "Cyberdyne Systems has 200 items in stock"

// console.log(
//   getStockReport({
//     companyName: 'Belacci',
//     stock: {
//       shoes: 20,
//       skirts: 10,
//       hats: 5,
//     },
//   }),
// ); // "Belacci has 35 item in stock"
// ```

// ## Example 5 - Операція spread

// Доповни функцію `createContact(partialContact)` так, щоб вона повертала новий
// об'єкт контакту з доданими властивостями `id` та `createdAt`, а також `list` зі
// значенням "default" якщо в `partialContact` немає такої властивості.

// ```js
//1
function createContact({name, email, list = 'default'}) {
  
  return {
    name,
    email,
    list,
    id: generateId(),
    createdAt: Date.now(),
  }
}

//2
function createContact(partialContact) {
  return {
    list: 'default',
    ...partialContact,
    id: generateId(),
    createdAt: Date.now(),
  };
}

// const contact1 = {
//   name: 'Mango',
//   email: 'mango@mail.com',
//   list: 'friends',
// }

// const newContact = createContact(contact1);
// console.log(newContact)

// console.log(
//   createContact({
//     name: 'Mango',
//     email: 'mango@mail.com',
//     list: 'friends',
//   }),
// );
// console.log(
//   createContact({
//     name: 'Poly',
//     email: 'poly@hotmail.com',
//   }),
// );

function generateId() {
  return '_' + Math.random().toString(36).substr(2, 9);
}
// ```

// ## Example 6 - Операція rest

// Напиши функцію `transformUsername(user)` так, щоб вона повертала новий об'єкт із властивістю
// `fullName`, замість `firstName` та `lastName`.

// ```js
function transformUsername({firstName, lastName, friends, ...props}) {

  return {
    ...props,
    fullName: `${firstName} ${lastName}`
  }
}

const user1 = {
  id: 1,
  firstName: 'Jacob',
  lastName: 'Mercer',
  email: 'j.mercer@mail.com',
  friendCount: 40,
  friends: {
    Anton: 'best',
    Ivan: 'so so'
  }
}

const newUser = transformUsername(user1);
console.log(newUser)

// console.log(
//   transformUsername({
//     id: 1,
//     firstName: 'Jacob',
//     lastName: 'Mercer',
//     email: 'j.mercer@mail.com',
//     friendCount: 40,
//   }),
// );

// console.log(
//   transformUsername({
//     id: 2,
//     firstName: 'Adrian',
//     lastName: 'Cross',
//     email: 'a.cross@hotmail.com',
//     friendCount: 20,
//   }),
// );
// ```



//Ліво - rest
function multiply(...args) {
  const name = 'Artem';
  console.log(args); // массив всех аргументов

  return {
    
  }
}

//Право - spread
const third = { 
  propB: 20,
  ...first, 
  ...second 
};

console.log(third); // { propA: 5, propB: 10, propC: 15 }

