/** CALCULATOR */

// 1. Отримати елемент контейнера(форма). Повішати слухач input
// 2. Взяти значення кількості і оновити його в DOM
// 3. Взяти значення інпутів, перемножити
// 4. Додали в DOM елемент для відобрадення результів(1 раз)

const formElem = document.querySelector('.form');
const quantityElem = document.querySelector('.amount');

formElem.insertAdjacentHTML(
  'beforeend',
  `<div>Загальна вартість <code id="resultVal"></code> ГРН</div>`
);

const resultValueElem = document.getElementById('resultVal');

const formHandler = () => {
  const {
    elements: { price, quantity },
  } = formElem;

  quantityElem.textContent = quantity.value;

  const result = quantity.value * price.value;
  resultValueElem.textContent = result.toFixed(2);
};

formElem.addEventListener('input', formHandler);

// https://developer.mozilla.org/en-US/docs/Web/API/Window#events
window.addEventListener('DOMContentLoaded', formHandler);

/** GALLERY */
const images = [
  {
    title: 'Коник стрибунець',
    src: 'https://cdn.pixabay.com/photo/2022/11/07/00/27/grasshopper-7575278_1280.jpg',
  },
  {
    title: 'Фрукт',
    src: 'https://cdn.pixabay.com/photo/2022/10/22/18/10/quince-7539818_1280.jpg',
  },
  {
    title: 'Люди',
    src: 'https://cdn.pixabay.com/photo/2022/11/05/22/43/against-light-7572922_1280.jpg',
  },
  {
    title: 'Годиник',
    src: 'https://cdn.pixabay.com/photo/2022/11/06/13/36/architecture-7574031_1280.jpg',
  },
  {
    title: 'Метро',
    src: 'https://cdn.pixabay.com/photo/2022/10/31/17/57/subway-7560452_1280.jpg',
  },
  {
    title: 'Хмари',
    src: 'https://cdn.pixabay.com/photo/2022/10/24/09/54/switzerland-7543063_1280.jpg',
  },
];

const modalcontainerElem = document.querySelector(
  '.image-modal-overlay'
);
const modalContentElem = document.querySelector('.image-modal');
const imagesContainer = document.querySelector('.images-gallery');

const imgElemtens = images.reduce((acum, item) => {
  return (acum += `<img src="${item.src}" title="${item.title}" alt="${item.title}" />`);
}, '');

imagesContainer.insertAdjacentHTML('beforeend', imgElemtens);

imagesContainer.addEventListener('click', (event) => {
  //1
  if (event.target.nodeName !== 'IMG') return;

  //2
  // if (event.target === event.currentTarget ) return;

  modalContentElem.textContent = event.target.title;
  modalcontainerElem.classList.add('visible');
});

document.addEventListener('keydown', (e) => {
  if (e.code === 'Escape') {
    modalcontainerElem.classList.remove('visible');
  }
});

/** freeCodeCamp  */
// Setup
const recordCollection = {
  2548: {
    albumTitle: 'Slippery When Wet',
    artist: 'Bon Jovi',
    tracks: ['Let It Rock', 'You Give Love a Bad Name'],
  },
  2468: {
    albumTitle: '1999',
    artist: 'Prince',
    tracks: ['1999', 'Little Red Corvette'],
  },
  1245: {
    artist: 'Robert Palmer',
    tracks: [],
  },
  5439: {
    albumTitle: 'ABBA Gold',
  },
};

//перший варіант не працює records[id].hasOwnPropery("tracks")
// Пропущена буква t
updateRecords(recordCollection, 2468, 'tracks', 'Free');
function updateRecords(records, id, prop, value) {
  records[id].has;

  // if (prop !== 'tracks' && value !== '') {
  //   records[id][prop] = value;
  // } else if (
  //   prop === 'tracks' &&
  //   records[id].hasOwnProperty('tracks') === false
  // ) {
  //   records[id][prop] = [value];
  // } else if (prop === 'tracks' && value !== '') {
  //   records[id][prop].push(value);
  // } else if (value === '') {
  //   delete records[id][prop];
  // }
  // return records;
}

//  другий варіант працює

// function updateRecords(records, id, prop, value) {
//   if (prop !== "tracks" && value !== "") {
//     records[id][prop] = value;
//   } else if (
//     prop === "tracks" &&
//     value !== "" &&
//     records[id].hasOwnProperty("tracks") === false
//   ) {
//     records[id][prop] = [value];
//   } else if (prop === "tracks" && value !== "") {
//     records[id][prop].push(value);
//   } else if (value === "") {
//     delete records[id][prop];
//   }
//   return records;
// }

// console.log(updateRecords(recordCollection, 5439, "artist", "ABBA"));
// console.log(
//tracks should have the string Take a Chance on Me as the last and only element.
// console.log(updateRecords(recordCollection, 2548, "artist", "")); //artist should not be set
// console.log(
//   updateRecords(recordCollection, 1245, "tracks", "Addicted to Love")
// ); //tracks should have the string Addicted to Love as the last element.
// console.log(updateRecords(recordCollection, 2468, 'tracks', 'Free')); //tracks should have the string 1999 as the first element.
//pdateRecords(recordCollection, 2468, "tracks", "Free"), //tracks tracks should not be set

// console.log(
//   updateRecords(recordCollection, 5439, "tracks", "Take a Chance on Me")
// );

// console.log(
//   updateRecords(recordCollection, 1245, "tracks", "Take a Chance on Me")
// );

// console.log(updateRecords(recordCollection, 2548, "tracks", ""));
