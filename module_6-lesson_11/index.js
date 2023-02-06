// Example 1. Створити список технологій що вивчаються на курсі Fullstack за допомогою js
const technologies = ['HTML', 'CSS', 'JavaScript', 'React', 'Node'];

const container = document.querySelector('#main-container');
const ulEl = document.createElement('ul');

// const techElements = technologies
//   .map((el) => `<li>${el}</li>`)
//   .join('');

technologies.forEach((technologyItem) => {
  // const liEl = document.createElement('li');
  // liEl.textContent = technologyItem;
  // ulEl.append(liEl)

  const liEl = `<li>${technologyItem}</li>`;
  ulEl.insertAdjacentHTML('afterbegin', liEl);
});

// const techElements = technologies.reduce(
//   (acum, el) => (acum += `<li>${el}</li>`),
//   ''
// );

// ulEl.innerHTML = techElements;

container.append(ulEl);

//Example 2. Створити кілька кнопок на основі масива з обєктами використовуючи createElement
const colors = [
  {
    label: 'red',
    color: '#FF0000',
  },
  {
    label: 'green',
    color: '#00FF00',
  },
  {
    label: 'blue',
    color: '#0000FF',
  },
  {
    label: 'yellow',
    color: '#FFFF00',
  },
];

const buttonsContainer = document.createElement('div');
buttonsContainer.classList = 'btn-container';
buttonsContainer.classList.add('visible', 'green');
// buttonsContainer.classList = 'btn-container-new';

colors.forEach(({ color, label }) => {
  const btnEl = document.createElement('button');
  btnEl.textContent = label;
  btnEl.style.backgroundColor = color;
  btnEl.style.margin = '10px';
  btnEl.style.padding = '10px';

  buttonsContainer.append(btnEl);
});

container.append(buttonsContainer);

//3. Створити сайт з такою розміткою використовуючи лише JS в html файлі має бути пусто
const data = {
  title: '- Michel Legrand -',
  imgUrl:
    'https://i.discogs.com/LGcISJRXQR30Q--KBtFgh8nf5bAY-UT9PfVp4mPM4_8/rs:fit/g:sm/q:90/h:788/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9BLTg0MjM2/LTE0Nzc2ODIxNDgt/NDUyOC5qcGVn.jpeg',
  imgCaption: 'Michel Legrand conducting his orcherstra.',
  facts: [
    'He was born in Paris, France on February 24<sup>th</sup>, 1932',
    'His father was himself a conductor and composer, and his mother, who was Armenian, was the sister of a conductor',
    'His sister was a Soprano and a member of the Swingle Singers',
    'Along his career, he composed more than two hundred film and television scores',
    'He was also a Jazz player and worked with giants like Miles Davis or Stan Getz',
    'He won a huge amount of awards, including Oscars, Grammy Awards and Golden Globes',
    'He died of sepsis during the night of the 25<sup>th</sup> to 26<sup>th</sup> January 2019 in the American Hospital of Paris',
    'He was interred at the P&egrave;re Lachaise Cemetery in Paris, France',
  ],
};

const asideContainer = document.querySelector('#article');

//1 Створти елемент
const title = document.createElement('h1');
const figure = document.createElement('figure');
const image = document.createElement('img');
const caption = document.createElement('figcaption');

//2 Модифікувати елемент
title.textContent = data.title;
title.setAttribute('id', 'title');

figure.setAttribute('id', 'img-div');

image.setAttribute('id', 'image');
image.src = data.imgUrl;
image.alt = data.imgCaption;

caption.id = 'img-caption';
caption.textContent = data.imgCaption;

//3 Додати елемент в DOM
asideContainer.append(title);
figure.append(image, caption);
asideContainer.append(figure);

asideContainer.insertAdjacentHTML(
  'beforeend',
  `<article id="tribute-info">
        <div id="intro">
            <p>&bull; Michel Legrand (1932 - 2019) was a famous French musician. &bull;</p>
        </div>
        <div class="test"><p>1</p></div>
        <div class="test"><p>2</p></div>
        <div class="test"><p>3</p></div>
        <div class="test"><p>4</p></div>
        <p><u>Here are some major facts about him:</u></p>
        <ul>
            ${data.facts.reduce(
              (acum, factItem) => (acum += `<li>${factItem}</li>`),
              ''
            )}
        </ul>
        <blockquote id="quote">
            <p>Writing is a mental thing, while playing is essentially a physical feeling.</p>
            <cite>-- Michel Legrand</cite>
        </blockquote>
        <hr>
        <p>To find out more about him, feel free to have a look at his biography on <a id="tribute-link"
                href="https://en.wikipedia.org/wiki/Michel_Legrand" target="_blank">Wikipedia</a>.</p>
    </article>`
);

const article = document.querySelector('#tribute-info');

console.log(article.firstChild); // текст
console.log(article.firstElementChild); // елемент

const elementsTest = document.querySelectorAll('.item');

elementsTest.forEach((element) => {
  console.log('Elemnt', element.firstElementChild);
  // console.log(`Elemnt: ${element.firstElementChild}`);
});
