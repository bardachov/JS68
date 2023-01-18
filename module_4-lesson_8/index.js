console.log("# Модуль 4. Заняття 8. Перебираючі методи масиву");

// ## Колекція об'єктів для всіх прикладів з автомобілями

const cars = [
  { make: 'Honda', model: 'CR-V', type: 'suv', amount: 14, price: 24045, onSale: true },
  { make: 'Honda', model: 'Accord', type: 'sedan', amount: 2, price: 22455, onSale: true },
  { make: 'Mazda', model: 'Mazda 6', type: 'sedan', amount: 8, price: 24195, onSale: false },
  { make: 'Mazda', model: 'CX-9', type: 'suv', amount: 7, price: 31520, onSale: true },
  { make: 'Toyota', model: '4Runner', type: 'suv', amount: 19, price: 34210, onSale: false },
  { make: 'Toyota', model: 'Sequoia', type: 'suv', amount: 16, price: 45560, onSale: false },
  { make: 'Toyota', model: 'Tacoma', type: 'truck', amount: 4, price: 24320, onSale: true },
  { make: 'Ford', model: 'F-150', type: 'truck', amount: 11, price: 27110, onSale: true },
  { make: 'Ford', model: 'Fusion', type: 'sedan', amount: 13, price: 22120, onSale: true },
  { make: 'Ford', model: 'Explorer', type: 'suv', amount: 6, price: 31660, onSale: false }
];

// ## Example 1 - Метод map
// створи функцію яка повертає масив моделей (поле model) всіх
// автомобілів.

// 1
// const getModels = carsArray => {
//   const result = carsArray.map(carItem => {
//     return carItem.model
//   })

//   return result
// }

// 2
const getModels = carsArray => carsArray.map(({model}) => model)

// console.log(getModels(cars))






// ## Example 2 - Метод map
// створи функцію яка повертає нову колекцію з урахуванням знижки.
// функція приймає два параметри, перший то є колекція обʼєктів(авто), 
// другий то є коефіцієнт знижки (20% = 0.2)

//1
// const applySale = (carsArray, sale) => {
//   const result = carsArray.map(car => {
    
//     const obj = {
//       ...car,
//       price: car.price - (car.price * sale)
//     }
    
//     return obj
//   });

//   return result
// }

//2
const applySale = (carsArray, sale) => carsArray.map(car => {
  return {
    ...car,
    price: car.price - (car.price * sale)
  }
})

// console.table(applySale(cars, 0.2))





// ## Example 3 - Метод filter
// Створити функцію яка повертає колекцію авто, ціна яких
// менша за передане значення

// const filterCars = (carsArr, threshold) => {
//   const result = carsArr.filter(el => {
//     if (el.price < threshold) {
//       return true
//     }
//   });

//   return result
// };
// const filterCars = (carsArr, threshold) => carsArr.filter(({price}) => price < threshold)

// console.table(filterCars(cars, 24000));






// ## Example 4 - Метод filter
// Створи функцію яка повертає масив автомобілів властивість
// onSale яких true.

//1
const getCarsOnSale = carsArr => carsArr.filter(el => el.onSale);

//2
// function getCarsOnSale(carsArr) {
//   const result = carsArr.filter( el => {
//     if(el.onSale === true) {
//       return true
//     }
//   })

//   return result
// }


// console.table(getCarsOnSale(cars))






// ## Example 5 - Метод find
// Створи функцію яка повертає авто за назвою моделі
//1
// const getCarByModel = (carsArr, model) => carsArr.find(el => el.model === model);

//2 Пошук авто виключно за моделю
// function getCarByModel(carsArr, model) {
//   const result = carsArr.find(function(el) {
//     if(el.model === model) {
//       return true
//     }
//   });

//   return result
// }

// console.log(getCarByModel(cars, 'Fusion'));


// Пошук авто за властивістю
// function getCarByProp(carsArr, prop, value) {
//   const result = carsArr.find(function(el) {
//     if(el[prop] === value) {
//       return true
//     }
//   });

//   return result
// }

// console.log(getCarByProp(cars, 'amount', 14));







// ## Example 6 - Метод sort
// Нехай функція `sortByAscendingAmount` повертає новий масив автомобілів відсортований за 
// зростанням `amount`.

// ```js
//1
// const sortByAscendingAmount = cars => {

//   return [...cars].sort((itm1, itm2) => {
//     // if (a.amount > b.amount) return 1;
//     // if (a.amount < b.amount) return -1;

//     // return 0

//     return itm1.amount > itm2.amount ? 1 : -1
//   })

// };

//2
// const sortByAscendingAmount = cars => [...cars].sort((a,b) => itm1.amount > itm2.amount ? 1 : -1)

//3
// const sortByAscendingAmount = cars => [...cars].sort((a,b) => a.amount - b.amount)
// console.table(sortByAscendingAmount(cars));


// const numbers = [34, 20, 54, 1, 0];

// numbers.sort((a,b) => {
//   if (a > b) return 1;
//   if (a < b) return -1;

//   return 0
// })

// ```






// ## Example 7 - Метод sort

// Нехай функція `sortByModel` повертає новий масив автомобілів відсортований
// за назвою моделі в алфавітному та зворотному алфавітному порядку, в залежності від
// значення параметра `order`.

// ```js
const sortByModel = (cars, order) => {
  
  //good
  // if(order === 'asc') {
  //   return [...cars].sort((a, b) => {
  //     if(a.model > b.model) return 1;
  //     if(a.model < b.model) return -1;
  //     return 0
  //   })
  // } else if (order === 'desc') {
  //   return [...cars].sort((a, b) => {
  //     if(a.model > b.model) return -1;
  //     if(a.model < b.model) return 1;
  //     return 0
  //   })
  // }

  // bad
  // return [...cars].sort((a, b) => {
  //   console.log('check')
  //   if (order === 'desc') {
  //     if(a.model > b.model) return -1;
  //     if(a.model < b.model) return 1;
  //   } else if (order === 'asc') {
  //     if(a.model > b.model) return 1;
  //     if(a.model < b.model) return -1;
  //   }
  // })
};

// console.table(sortByModel(cars, 'asc'));
// console.table(sortByModel(cars, 'desc'));
// ```






// ## Example 8 - Метод reduce

// Нехай функція `getTotalAmount` повертає загальну кількість автомобілів (значення
// властивостей `amount`).

// ```js
const getTotalAmount = cars => {

  return cars.reduce((acum, car, i, arr) => {
    
    if (i === 0) {
      acum.carsTotal = 0;
      acum.totalOnSale = 0;
    }
    
    acum.carsTotal += car.amount;
    
    // acum.totalOnSale += car.onSale ? 1 : 0;
    car.onSale ? acum.totalOnSale += 1 : null;

    return acum

  }, {})

};

console.log(getTotalAmount(cars));
// ```








// ## Example 9 - Ланцюжки методів

// Нехай функція `getAvailableCarNames` повертає масив моделей автомобілів, але
// тільки тих, які зараз на розпродажі.

// ```js
//1
// const getModelsOnSale = cars => cars.filter(el => el.onSale).map(el => el.model);

//2
const getModelsOnSale = cars => {
  cars
  .filter(el => el.onSale)
  .map(el => el.model)
}

console.table(getModelsOnSale(cars));
// ```








// ## Example 10 - Ланцюжки методів

// Нехай функція `getSortedCarsOnSale` повертає масив автомобілів на розпродажі
// (Властивість onSale), відсортованих за зростанням ціни.

// ```js
// const getSortedCarsOnSale = cars => cars.filter(el => el.onSale).sort((a, b) => a.price - b.price);

const getSortedCarsOnSale = cars => {
  return cars
  .filter(el => el.onSale)
  .sort((itm1, itm2) => {
    if(itm1.price > itm2.price) return 1
    if(itm1.price < itm2.price) return -1
    return 0
  })
}

// console.table(getSortedCarsOnSale(cars));

// ```


/** Питання */
// const allCourses = ['математика', 'физика', 'информатика', 'математика', 'физика', 'биология'];
// const uniqueCourses = allCourses.filter((course, index, array) => array.indexOf(course) === index);

[100,34,20,500].sort((a, b) => {
  return a - b
})


// const tweets = [
//   { id: "000", likes: 5, tags: ["js", "nodejs"] },
//   { id: "001", likes: 2, tags: ["html", "css"] },
//   { id: "002", likes: 17, tags: ["html", "js", "nodejs"] },
//   { id: "003", likes: 8, tags: ["css", "react"] },
//   { id: "004", likes: 0, tags: ["js", "nodejs", "react"] },
// ];

// Пройдемо по всіх елементах колекції і додамо значення властивості tags
// до акумулятора, початкове значення якого вкажемо порожнім масивом [].
// На кожній ітерації пушимо в акумулятор усі елементи tweet.tags і повертаємо його.
// const tags = tweets.reduce((allTags, tweet) => {
//   allTags.push(...tweet.tags);

//   return allTags;
// }, []);

// console.log(tags);





// Мабуть, збирання тегів - не одиночна операція, тому напишемо функцію
// для збирання тегів з колекції
// const getTags = tweets =>
//   tweets.reduce((allTags, tweet) => {
//     allTags.push(...tweet.tags);

//     return allTags;
//   }, []);

// console.log(getTags(tweets));

// Після того, як ми зібрали всі теги з постів, добре б було порахувати кількість унікальних тегів в масиві. І знову reduce стане в пригоді.

const tweets = [
  { id: "000", likes: 5, tags: ["js", "nodejs"] },
  { id: "001", likes: 2, tags: ["html", "css"] },
  { id: "002", likes: 17, tags: ["html", "js", "nodejs"] },
  { id: "003", likes: 8, tags: ["css", "react"] },
  { id: "004", likes: 0, tags: ["js", "nodejs", "react"] },
];

const getTags = tweets =>
  tweets.reduce((allTags, tweet) => {
    allTags.push(...tweet.tags);

    return allTags;
  }, []);

const tags = getTags(tweets);;

const uniqueCallback = (sum, tag, i, arr) => {
  if (arr.indexOf(tag) === i) sum += 1
  return sum
}
const uniqueTagsAmount = tags.reduce(uniqueCallback, 0);








// Винесемо callback-функцію окремо, а в reducе передамо посилання на неї.
// Це стандартна практика, якщо callback-функція досить велика.

// Якщо в об'єкті-акумуляторі acc відсутня своя властивість з ключем tag,
// то створюємо її і записуємо їй значення 0.
// В іншому випадку збільшуємо значення на 1.
// const getTagStats = (acc, tag) => {
//   if (!acc.hasOwnProperty(tag)) {
//     acc[tag] = 0;
//   }

//   acc[tag] += 1;

//   return acc;
// };

// Початкове значення акумулятора - це порожній об'єкт {}
const countTags = tags => tags.reduce((acc, tag) => {
  if (!acc[tag]) {
    acc[tag] = 0;
  }

  acc[tag] += 1;

  return acc;
}, {});

const tagCount = countTags(tags);
console.log(tagCount);






// function printContactsInfo({ names, phones }) {
//   const nameList = names.split(',');
//   const phoneList = phones.split(',');

//   console.log(nameList[2], phoneList[2])

//   nameList.forEach((name, i) => {
//     console.log(`${nameList[i]}:${phoneList[i]}`);
//   })
// }

// printContactsInfo({
//   names: 'Jacob,William,Solomon,Artemis',
//   phones: '89001234567,89001112233,890055566377,890055566300',
// });


const array = ['Jacob','William','Solomon','Artemis'];
console.log(array[2])