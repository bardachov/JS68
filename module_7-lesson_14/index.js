/**
 * debounce - викликає функцію коли пройшло N кіклькість мілісекнд після подіїї.
 * throttle - викликає функцию кожні N мілісекунд впродов дії події.
 * Обидва методи повертають нову функцію
 *
 * https://css-tricks.com/debouncing-throttling-explained-examples/
 */

const scrollAmountRef = document.querySelector('.scroll-amount');
const resizeAmountRef = document.querySelector('.resize-amount');

const throttledResize = _.throttle(() => {
  const currentAmount = +resizeAmountRef.textContent;
  resizeAmountRef.textContent = currentAmount + 1;
}, 1000);

window.addEventListener('resize', throttledResize);

// this two approaches equals
// window.addEventListener(
//   'scroll',
//   _.throttle(() => {
//     console.log('scroll');
//   }, 500)
// );

const userNameRef = document.getElementById('userName');
const userPwdRef = document.getElementById('userPassword');

const validate = ({ value, content }) => {
  if (value.length >= 10) {
    content.textContent = 'Too long';
  } else if (value.length === 0) {
    content.textContent = '';
  } else {
    content.textContent = 'Good';
  }
};

const debouncedNameInput = _.debounce((event) => {
  validate({
    value: event.target.value,
    content: event.target.nextElementSibling,
  });
}, 300);

const debouncedPwdInput = _.debounce((event) => {
  validate({
    value: event.target.value,
    content: event.target.nextElementSibling,
  });
}, 300);

userNameRef.addEventListener('input', debouncedNameInput);
userPwdRef.addEventListener('input', debouncedPwdInput);

//Q1

const galleryItems = [
  {
    title: 'Коник стрибунець',
    src: 'https://cdn.pixabay.com/photo/2022/11/07/00/27/grasshopper-7575278_1280.jpg',
  },
  {
    title: 'Коник стрибунець',
    src: 'https://cdn.pixabay.com/photo/2022/11/07/00/27/grasshopper-7575278_1280.jpg',
  },
  {
    title: 'Коник стрибунець',
    src: 'https://cdn.pixabay.com/photo/2022/11/07/00/27/grasshopper-7575278_1280.jpg',
  },
  {
    title: 'Коник стрибунець',
    src: 'https://cdn.pixabay.com/photo/2022/11/07/00/27/grasshopper-7575278_1280.jpg',
  },
  {
    title: 'Коник стрибунець',
    src: 'https://cdn.pixabay.com/photo/2022/11/07/00/27/grasshopper-7575278_1280.jpg',
  },
  {
    title: 'Коник стрибунець',
    src: 'https://cdn.pixabay.com/photo/2022/11/07/00/27/grasshopper-7575278_1280.jpg',
  },

  {
    title: 'Фрукт',
    src: 'https://cdn.pixabay.com/photo/2022/10/22/18/10/quince-7539818_1280.jpg',
  },

  {
    title: 'Фрукт',
    src: 'https://cdn.pixabay.com/photo/2022/10/22/18/10/quince-7539818_1280.jpg',
  },
  {
    title: 'Фрукт',
    src: 'https://cdn.pixabay.com/photo/2022/10/22/18/10/quince-7539818_1280.jpg',
  },
  {
    title: 'Фрукт',
    src: 'https://cdn.pixabay.com/photo/2022/10/22/18/10/quince-7539818_1280.jpg',
  },
  {
    title: 'Фрукт',
    src: 'https://cdn.pixabay.com/photo/2022/10/22/18/10/quince-7539818_1280.jpg',
  },
  {
    title: 'Фрукт',
    src: 'https://cdn.pixabay.com/photo/2022/10/22/18/10/quince-7539818_1280.jpg',
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
  {
    title: 'Dog',
    src: 'https://picsum.photos/id/237/200/300',
  },
  {
    title: 'Dog',
    src: 'https://picsum.photos/id/237/200/300',
  },
  {
    title: 'Dog',
    src: 'https://picsum.photos/id/237/200/300',
  },
  {
    title: 'Dog',
    src: 'https://picsum.photos/id/237/200/300',
  },
  {
    title: 'Dog',
    src: 'https://picsum.photos/id/237/200/300',
  },
];

const galleryContainer = document.querySelector('.gallery');

const imgElements = galleryItems
  .map((item) => {
    return `<li class="gallery__item"><img alt="${item.title}" class="lozad" data-src="${item.src}"/></li>`;
  })
  .join('');

galleryContainer.insertAdjacentHTML(
  'beforeend',
  '<ul>' + imgElements + '</ul>'
);

// const listGallery = document.createElement('ul');
// galleryContainer.append(listGallery);
// listGallery.insertAdjacentHTML('beforeend', imgElements);

// listGallery.innerHTML = imgElements;
// galleryContainer.insertAdjacentHTML('beforeend', listGallery);

const throttledScroll = _.throttle(() => {
  const currentAmount = +scrollAmountRef.textContent;
  scrollAmountRef.textContent = currentAmount + 1;
}, 500);

window.addEventListener('scroll', throttledScroll);

const observer = lozad();
observer.observe();
