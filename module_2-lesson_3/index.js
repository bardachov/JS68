console.log('Lesson 3');

//Питання 
// const clients = ["Mango", "Poly", "Ajax", 1,2,3,4,5,6,7,8,8,6,5,4,57,,5756,765,75,7,645,64];
// const lastElementIndex = clients.length - 1;

// console.log(lastElementIndex); // 2
// console.log(clients[lastElementIndex]); // "Ajax"


// const someArray = ["Mango", "Ajax", "Poly"];

// for (const user of someArray) {
//   console.log(user);
// }

// const string = "javascript";

// for (const character of string) {
//   console.log(character);
// }

// ТАК РОБИТИ НЕ ТРЕБА!
const a = ['Mango', 'Ajax'];
const b = a;
const c = a + b;
// const v = c;


// c.push('Hi');
// v.push('hello');
// b.push('I am b');

// console.log(a)
// console.log(b)
// console.log(c)
// console.log(v)

// Includes приймає тільки один аргумент
a.includes('Mango'); // will work
a.includes('Mango', 'Ajax') // will not work.

const message = "I love JavaScript a lot";
// const lowMessage = message.toLowerCase();
// result = lowMessage.includes('spam') || lowMessage.includes('sale');

// 1.
const characters = message.split('').join(' ').split(' ');
// console.log(characters);

//2.
// const words = message.split(' ');
// console.log(words)



// # Модуль 2. Заняття 3. Масиви

// ## Example 1 - Базові операції з масивом

// 1. Створіть масив `genres` з елементами «Jazz» та «Blues».
// 2. Додайте «Рок-н-рол» до кінця.
// 3. Виведіть у консоль перший елемент масиву.
// 4. Виведіть у консоль останній елемент масиву. 
    //Код повинен працювати для масиву
//    довільної довжини.
// 5. Видаліть перший елемент та виведіть його в консоль.
// 6. Вставте «Country» та «Reggae» на початок масиву.

// ```js
const genres = ['Jazz', 'Blues'];
genres.push('Рок-н-рол');
const lastIndex = genres.length - 1;

// console.log(genres[0]);
// console.log(genres[lastIndex]);

const firsElem = genres.shift();
// console.log(firsElem)

genres.unshift('Country', 'Reggae');
console.log(genres);
// ```

// ## Example 2 - Масиви та рядки

// Напиши скрипт для обчислення площі прямокутника зі сторонами, значення
// яких зберігаються у змінній `values` у вигляді рядка. Значення гарантовано
// розділені пробілом.

/**
 * 1. розділити раядок на значення сторін прямокутника. split
 * 2. перемножити значення
 */
// ```js
const values = '8 11';

const sizesArray = values.split(' ');
console.log(sizesArray);

const square = sizesArray[0] * sizesArray[1];
console.log(square)
// ```

// ## Example 3 - Перебір масиву

// Напиши скрипт для перебору масиву `fruits` циклом `for`. Для кожного елемента
// масиву виведи в консоль рядок у форматі `номер_елемента: значення_елемента`.
// Нумерація елементів повинна починатися з `1`.

// ```js
const fruits = ['🍎', '🍇', '🍑', '🍌', '🍋'];
// номер_елемента: значення_елемента = 1: '🍎'

// for (let item of fruits) {
//   const index = fruits.indexOf(item) + 1;
//   console.log(`${index}: ${item}`)
// }

// for (let i = 0; i < fruits.length; i += 1) {
//   console.log(`${i+1}: ${fruits[i]}`)
// }

// ```

// ## Example 4 - Масиви та цикли

// Напиши скрипт, який виводить у консоль ім'я та телефонний номер користувача. У
// змінних `names` та `phones` зберігаються рядки імен та телефонних номерів,
// розділені комами. Порядковий номер імен та телефонів у рядках вказують на
// відповідність. Кількість імен та телефонів гарантовано однакова.

/**
 * 1. Розділити раядки на масиви. split
 * 2. Перебрати один з масивів. З доступом до індекса for
 * 3. Отримати по індексу імʼя і відповідний телефон
 */
// ```js
const names = 'Jacob,William,Solomon,Artemis';
const phones = '89001234567,89001112233,890055566377,890055566300';

const namesArray = names.split(',');
const phonesArray = phones.split(',');

for (let i = 0; i < namesArray.length; i += 1) {
  console.log(`${namesArray[i]}: ${phonesArray[i]}`)
}
// ```

// ## Example 5 - Масиви та рядки

// Напиши скрипт, який виводить у консоль усі слова рядка крім першого і
// останнього. Результуючий рядок не повинен починатися або закінчуватися
// символ пробілу. Скрипт повинен працювати для будь-якого рядка.

// ```js
const string = '    Welcome to the future. Be Happy!   ';
const stringArray = string.trim().split(' ');

stringArray.pop()
stringArray.shift()

const result = stringArray.join(' ')
console.log(result)
// ```

// ## Example 6 - Масиви та рядки

// Напиши скрипт, який «розгортає» рядок (зворотний порядок букв) і виводить
// його в консоль.

// ```js
const string1 = 'Welcome to the future';

//1
// const stringarray = string1.split('').reverse();
// console.log(stringarray.join(''))

//2
// let resultStr = '';
// for (let i = string1.length - 1; i >= 0; i -= 1 ) {
//   resultStr += string1[i]
// }
// console.log(resultStr)

// ```

// ## Example 7 - Сортування масиву із циклом

// Напиши скрипт сортування масиву рядків в алфавітному порядку за першою літерою
// елемента.

// ```js
const langs = ['python', 'javascript', 'c++', 'haskel', 'php', 'ruby'];
langs.sort()
console.log(langs)
// ```

// ## Example 8 - Пошук елемента

// Напиши скрипт пошуку найменшого числа у масиві. Код повинен працювати для
// будь-якого масиву чисел. Використовуй цикл для розв'язання задачі.

// ```js
const numbers = [2, 17, 94, 1, -10, 23, 37];

let min = numbers[0];
for(let i = 1; i < numbers.length; i += 1) {
  if (min > numbers[i]) {
    min = numbers[i]
  }
}

console.log(min); // 1
// ```