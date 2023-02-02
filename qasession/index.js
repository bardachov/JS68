// Q1
// const array = [1, 2, 5, 7, 3, 200];
// console.log([...array].map(array.pop, array));

//A1
// const params = [1, 2, 5, 7, 3, 200]; // не міняти вхідні дані

// const array = [...params];

// const reversedArr = params.map([].pop, array);
// const reversedArr = params.reverse();

// params.map([].pop, array); === params.map(array.pop, array)

// console.log('IN:', params);
// console.log('RES:', reversedArr);

//Q2
function makeSizer(size) {
  return function () {
    document.body.style.fontSize = size + 'px';
  };
}

makeSizer(24);

// var size12 = makeSizer(12);
// var size14 = makeSizer(14);
// var size16 = makeSizer(16);

// document.getElementById('size-12').onclick = size12;
// document.getElementById('size-14').onclick = size14;
// document.getElementById('size-16').onclick = size16;

//Q3
// class Animal {
//   #age = 10;

//   static hasName(obj) {
//     if (obj.name) return true;
//     return false;
//   }

//   constructor({ type, name }) {
//     (this.type = type), (this.name = name);
//   }

//   sayHi() {
//     console.log(
//       `${this.name} say Hi to you! I am ${this.#age} years old`
//     );
//   }
// }

// const rabbit = new Animal({ type: 'rabbit', name: 'Pushok' });
// const dog = new Animal({ type: 'dog', name: 'Sharik' });
// const dogZevs = new Animal({ type: 'dog' });

// rabbit.sayHi();
// dog.sayHi();

// console.log(Animal.hasName(dogZevs));

// Q4
const user = {
  name: 'John',
  sayHi() {
    console.log(`Hi, Mr ${this.name}`);
  },
  sayBye() {
    console.log(`Bye, Mr`);
  },
};

// user.sayHi(); //Hi, Mr John
// user.sayBye(); //Bye, Mr

// перший варіант виклику - виклик поза тернарним оператором.
// (user.name === 'John' ? user.sayHi : user.sayBye)();

// const method = user.name === 'John' ? user.sayHi : user.sayBye;
// method();

// user.name === 'John' ? user.sayHi() : user.sayBye(); // Hi, Mr John
// user.name === 'Jack' ? user.sayHi() : user.sayBye(); // Bye, Mr

// Q5

const countWords = (words) => {
  // 1
  // const result = {};
  // words.forEach((element) => {
  //   if (result[element]) {
  //     result[element] += 1;
  //   } else {
  //     result[element] = 1;
  //   }
  // });
  // return result;
  //2
  // return words.reduce((obj, item) => {
  //   obj.hasOwnProperty(item) ? (obj[item] += 1) : (obj[item] = 1);
  //   return obj;
  // }, {});

  //3
  return words.reduce((acc, val) => {
    acc[val] = (acc[val] || 0) + 1;
    return acc;
  }, {});
};

// const result = countWords([
//   'Apple',
//   'Banana',
//   'Banana',
//   'Orange',
//   'Orange',
//   'Orange',
//   'Orange',
// ]);
// console.log(result);

function wrapper() {
  let counter = 0;

  function inner() {
    counter += 1;
    return counter;
  }

  return inner;
}

// const func = wrapper();
// func();
// func();
// func();
// func();
// const count = func();
// console.log(count);

// const func2 = wrapper();
// const coun2 = func2();
// console.log(coun2);

// function addOne(number) {
//   return function (n) {
//     return number + n;
//   };
// }

// const add = addOne(10);
// const result = add(5);
// console.log(result);

function makePow(number, pow) {
  // if (pow > 1)
  // return number * makePow(number, pow - 1);
  // return number;
}

const res = makePow(5, 3);
console.log(res);

function pow(x, n) {
  if (n === 1) {
    return x;
  } else {
    return x * pow(x, n - 1);
  }
}

// alert(pow(2, 3)); // 8

// const array = ['banan', 'banan', 'apple'];

// /**
//  * 1. написати функцію
//  * 2. функція має приймати масив рядків
//  * 3 функція повертає обєкт з кількістю кожного слова
//  */

// const calculateWords = (array) => {
//   const result = {};

//   return result
// }

// Задача з codewars , чи є якесь рішення цієі задачі без використання Match?

// Complete the solution so that it splits the string into
// pairs of two characters.If the string contains an odd number
// of characters then it should replace the missing second character
// of the final pair with an underscore('_').

// Examples:

// * 'abc' => ['ab', 'c_']
// * 'abcdef' => ['ab', 'cd', 'ef']
/////////моє рішення

// new RegExp('.{1,2}') === /.{1,2}/;
("adsad'asdasd");

function solution(str) {
  var string = str;
  const strToArr = string.match(/.{1,2}/g);
  if (str === '') {
    return [];
  }

  for (let index = 0; index < strToArr.length; index++) {
    let elOfArr = strToArr[index];
    if (elOfArr.length < 2) {
      strToArr.pop(elOfArr);
      elOfArr = elOfArr + '_';
      strToArr.push(elOfArr);
    }
  }

  return strToArr;
}

solution('abc');

////рішення з codewars

function solution(str) {
  str.length % 2 && (str += '_');
  return str.match(/.{1,2}/g) || [];
}

/////////

// function solution(s){
// return (s+"_").match(/.{2}/g)||[]
// }
console.log(solution('abcdefj')); // ['ab', 'cd', 'ef', 'j_']
console.log(solution('')); // []
