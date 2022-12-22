console.log("Lesson 1")

// # Модуль 1. Заняття 1. Змінні, типи та оператори

// ## Example 1 - Математичні оператори

// Виведи на екран загальну кількість всіх яблук. 
// кількість хороших яблук.

// ```js
const apples = 470;
const badApples = 135;
const halfApples = 67;

const harmfulApples = badApples + halfApples;
console.log(harmfulApples);

const goodApples = apples - harmfulApples;
console.log(goodApples);
// ```

// ## Example 2 - Комбіновані оператори

// Заміни вираз перевизначення комбінованим оператором `+=`.

// ```js
let students = 100;
// students = students + 50;
students += 50;

console.log(students);
// ```

// ## Example 3 - Пріоритет операторів

// Розбери пріоритет операторів в інструкції привласнення значення змінної
// `result`.

// ```js
const result = 108 + 223 - 2 * 5;
console.log(result);
// ```

// ## Example 4 - Клас Math

// Напиши скрипт, який виводить у консоль заокруглені вгору/вниз і т.д. значення
// змінної `value`. Використовуй методи `Math.floor()`, `Math.ceil()` та
// `Math.round()`. Перевір що буде в консолі при значеннях `27.3` та `27.9`.

// ```js
const value = 27.7;
const rounded = Math.round(value);
const roundedDown = Math.floor(value);
const roundedUp = Math.ceil(value);
// ```
console.log("Math.round", rounded);
console.log("Math.roundedDown", roundedDown);
console.log("Math.roundedUp", roundedUp);

// ## Example 5 - Шаблонні рядки

// Склади фразу за допомогою шаблонних рядків `A has B bots in stock`, де A, B -
// змінні вставлені в рядок.

// ```js
const companyName = 'Cyberdyne Systems';
const repairBots = 150;
const defenceBots = 50;
const totalBots = repairBots + defenceBots;
const message = `${companyName} has ${totalBots} bots in stock`;
console.log(message); // "Cyberdyne Systems has 200 bots in stock"
// ```

// ## Example 6 - Методи рядків та чейнінг

// Напиши скрипт, який розраховує індекс маси тіла людини. Для цього
// необхідно розділити вагу в кілограмах на квадрат висоти людини у метрах.

// Вага та висота зберігаються у змінних `weight` та `height`, але не як числа, а в
// вигляді рядків (спеціально для завдання). Не цілі числа можуть бути задані у вигляді
// `24.7` або `24,7`, тобто як роздільник дробової частини може бути
// кома.

// Індекс маси тіла необхідно округлити до однієї цифри після коми;

/**
 * 1. Знайти квадрат зросту людини //Math.pow()
 * 2. Розділити вагу на квадрат зросту. // звичайне ділення
 * 3. Округлити фінальний результат
 * 
 * Зробили:
 * 1. Запитали користувача ввести значення ваги і зросту
 * 2. Замінили можливу кому на крапку
 * 3. Явно конвертували рядок в число
 * 4. Знайшли квадрат зросту
 * 5. Знайшли індекс маси тіла
 * 6. Форматували індекс маси тіла до одніє цифри після крапки
 * 7. Привели значення індексу маси тіла до числового типу
 */
// ```js

// let weight = '88,3';
// let height = '1.75';

// const weightInt = Number(prompt('Введіть вагу в кілограмах').replace(',','.'));
// const heightInt = Number(prompt('Введіть зріст в метрах').replace(',','.'));

// console.log("heightInt = ",heightInt)
// console.log("weightInt = ",weightInt)

// const heightPow = Math.pow(heightInt, 2);
// console.log(heightPow)

// const bmi = weightInt / heightPow;
// const roundedBmi = Number(bmi.toFixed(1));

// console.log(roundedBmi); // 28.8
// ```

// ## Example 7 - Оператори порівняння та приведення типів

// Яким буде результат виразів?
console.log('\n==============');
console.log(5 > 4); // true
console.log(10 >= '7'); // true. 
console.log('2' > '12'); // true. String порівнюються посимвольно по коду символа. Як отримати код символа https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/charAt
console.log('2' < '12'); // false
console.log('4' == 4); // true
console.log('6' === 6); // false. 
console.log('false' === false); // false
console.log(1 == true);  // true. 
console.log(1 === true); // false.
console.log('0' == false); //true.
console.log('0' === false); // false.
console.log('Papaya' < 'papaya'); // true.
const a = 'Papaya'.charCodeAt(0);
const b = 'papaya'.charCodeAt(0);
console.log(a,b)

console.log('Papaya' === 'papaya'); // false. 
console.log(undefined == null); // true.
console.log(undefined === null); // false.
// ```

// ## Example 8 - Логічні оператори

// Яким буде результат виразів?
// && - Оператор приводить всі операнди до типу Boolean, і повертає перший який дасть false. Або останній, якщо false нема
// || - Оператор приводить всі операнди до типу Boolean, і повертає перший який дасть true. Або останній, якщо true нема
console.log(true && 3); // 3
console.log(false && 3); // false
console.log(1 && null && 2); // null
console.log(true && 0 && 'kiwi'); // 0
// true //true
// 0 // false
// 'kiwi' // true

console.log(true || 3); // true
console.log(true || 3 || 4); // true
console.log(true || false || 7); // true
console.log(null || 2 || undefined); // 2

console.log((1 && null && 2) > 0); // false
// 1 // true
// null // false
// 2 // true
// null > 0
/**
 * 1. Виконується оператор в дужках (1 && null && 2) = null
 * 2. Виконуються порівняння null > 0
 */

console.log(2 && 3); // 3
console.log(null || (2 && 3) || 4); // 3
// 2 //true
// 3 //true
// 2 && 3 = 3

// null //false
// 3 // true
// 4 // true
/**
 * 1. Виконується оператор в дужках (2 && 3) = 3
 * 2. Виконується опеартор null || 3 || 4 = 3
 */



// ```

// ## Example 9 - Значення за замовчуванням та оператор нульового злиття

// Отрефактори код так, щоб у змінну `value` присвоювалося значення
// змінної `incomingValue`, якщо воно не рівне `undefined` або `null`. В
// іншому випадку має присвоюватися значення `defaultValue`. Перевір роботу
// скрипта для наступних значень змінної `incomingValue`: null, undefined, 0,
// false. Використовуй оператор `??` (nullish coalescing operator).

// ```js
const incomingValue = null;
const defaultValue = 10;
const value1 = incomingValue ?? defaultValue;

console.log(value1);
// ```

// ## Example 10 - Оператор % та методи рядків

// Напиши скрипт, який переведе значення `totalMinutes` (кількість хвилин) в
// рядок у форматі годин та хвилин `HH:MM`.

// - 70 покаже 01:10
// - 450 покаже 07:30
// - 1441 покаже 24:01

// ```js
const totalMinutes = 450;

const hours = Math.floor(totalMinutes/60);
const minutes = totalMinutes % 60;

const formatedTime = `${String(hours).padStart(2, '0')}:${minutes}`;
console.log(formatedTime);

const string = 'abc';
console.log(string.padStart(4, '5'))

// ```





// let clientCounter = 18;
// const maxClients = 25;

// while (clientCounter < maxClients) {
//   console.log(clientCounter);
//   clientCounter += 1;
// }


// let clientCounter = 18;
// const maxClients = 25;

// while (clientCounter < maxClients) {
//     clientCounter += 1;
//     console.log(clientCounter);
// }


// while (clientCounter < maxClients) {
//   console.log(clientCounter);
//   clientCounter += 1;
// }

// do {
//   console.log(clientCounter);
//   clientCounter += 1;
// } while(clientCounter < maxClients)