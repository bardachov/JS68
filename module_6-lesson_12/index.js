/**
 * Створити модальне вікно яке буде відкриватися при кліку на кнопку всередині тега body.
 * Модальне вікно має закриватися при кліку на напівпрозорий оверлей,
 * та на іконку хрестика всередині модалки
 */

/**
 * 3. Створити форму реєстрації користувача за допомогою js де буде 2 поля 
    1. Поле логіна
    2. Поле пароль
    3. Захаркодити вірні логін і пароль в константах
 */

const credentials = {
  correctLogin: 'admin',
  correctPassword: '123qwerty',
};

const btnElem = document.querySelector('#myBtn');
const modalElem = document.querySelector('#myModal');
const modalContentElem = document.querySelector('.modal-content');
const closeModalBtn = document.querySelector('.close');

const newForm = createForm();
modalContentElem.append(newForm);

class Modal {
  constructor(element) {
    this.element = element;
  }

  open() {
    this.element.style.display = 'block';
  }

  close() {
    this.element.style.display = 'none';
    btnElem.removeEventListener('click', openModalHandler);
    btnElem.remove();
  }
}

const modal = new Modal(modalElem);

function createForm() {
  const formElem = document.createElement('form');
  const nameInput = document.createElement('input');
  const passwordInput = document.createElement('input');
  const submitBtn = document.createElement('button');

  nameInput.name = 'login';
  passwordInput.name = 'password';
  passwordInput.type = 'password';
  submitBtn.type = 'submit';
  submitBtn.textContent = 'Ok';

  formElem.append(nameInput);
  formElem.append(passwordInput);
  formElem.append(submitBtn);

  return formElem;
}

const openModalHandler = (event) => {
  modal.open();
};

const closeModalHandler = (event) => {
  console.log('target', event.target);
  console.log('currentTarget', event.currentTarget);

  if (event.currentTarget === event.target) {
    modal.close();
  }
};

btnElem.addEventListener('click', openModalHandler);
closeModalBtn.addEventListener('click', closeModalHandler);
modalElem.addEventListener('click', closeModalHandler);

/** Додати в модалку логіку закриття при натисканні на кнопку Escape */
document.addEventListener('keydown', (event) => {
  if (event.code === 'Escape') {
    modal.close();
  }
});

/**
 * 4. Додати логіку сабміта форми, при сабміті перевіряємо введені логін і пароль.
        1. Якщо логін і пароль співпадають - видаляємо форму з документа і показуємо **h2**  з написом **“Вхід успішний”**
        2. Якщо логі і пароль не співпадають з даними з констант в пункті 3с - показуємо під формою помилку червоним кольором **“Логін або пароль не вірні”**
 */
newForm.addEventListener('submit', (event) => {
  event.preventDefault();

  // const {
  //   elements: { login, password },
  // } = event.currentTarget;

  const data = {};
  const formData = new FormData(event.currentTarget);
  formData.forEach((value, name) => (data[name] = value));

  if (
    data.login === credentials.correctLogin &&
    data.password === credentials.correctPassword
  ) {
    newForm.remove();
    modalContentElem.insertAdjacentHTML(
      'beforeend',
      `<h2>Вхід успішний</h2>`
    );
  } else {
    newForm.insertAdjacentHTML(
      'beforeend',
      `<p style="color: red">Логін або пароль не вірні</p>`
    );
  }
});

/**QA */
//1
const select = document.querySelector('.pizza-select');
const textOutput = document.querySelector('.text-output');
const valueOutput = document.querySelector('.value-output');

setOutput();

select.addEventListener('change', setOutput);

function setOutput() {
  const selectedOptionValue = select.value;
  const selectedOptionIndex = select.selectedIndex;
  const selectedOptionText = select.options[selectedOptionIndex].text;

  textOutput.textContent = selectedOptionText;
  valueOutput.textContent = selectedOptionValue;
}

//2
// const textInput = document.querySelector('.text-input');
// const output = document.querySelector('.output');

// textInput.addEventListener('input', (event) => {
//   output.textContent = event.currentTarget.value;
// });

//3
const textInput = document.querySelector('.text-input');
const setFocusBtn = document.querySelector('[data-action="set"]');
const removeFocusBtn = document.querySelector(
  '[data-action="remove"]'
);

setFocusBtn.addEventListener('click', () => {
  textInput.focus();
});

removeFocusBtn.addEventListener('click', () => {
  textInput.blur();
});

textInput.addEventListener('focus', () => {
  textInput.value = 'This input has focus';
});

textInput.addEventListener('blur', () => {
  textInput.value = '';
});
