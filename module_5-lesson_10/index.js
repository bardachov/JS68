console.log("# Модуль 5. Заняття 10. Прототипи та класи");

// Кахут

// class Animal {
//   #privateProp = 'Secure';
//   #printPrivateMessage() {
//     console.log('private message')
//   }

//   static printMessage() {
//     console.log('static method')
//   }

//   constructor(name) {
//     // this = {} // imlicitly
    
//     this.name = name
//     //....

//     // return this // implicitly
//   }

//   printHello() {
//     console.log(this.name + ' hello')
//   }
// }

// const rabbit = new Animal('Bunny');
// rabbit.printMessage()

// Animal.printMessage()

















// ## Example 1 - Блогер

// Напиши клас `Blogger` для створення об'єкта блогера з наступними властивостями:

// - `email` - пошта, рядок
// - `age` - вік, число
// - `numberOfPosts` - кількість постів, число
// - `topics` - масив тем на яких спеціалізується блогер

// Клас чекає один параметр - об'єкт налаштувань з однойменними властивостями.

// Додай метод `getInfo()`, який, повертає рядок:
// `User ${пошта} is ${вік} years old and has ${кількість постів} posts`.

// Додай метод `updatePostCount(value)`, який у параметрі `value` приймає
// кількість постів, які потрібно додати користувачеві.

// 1. створюємо клас з конструктором і обʼєктом параметрів
class Blogger {
  constructor({email, age, numberOfPosts, topics} = {}) {
    this.email = email;
    this.age = age;
    this.numberOfPosts = numberOfPosts;
    this.topics = topics;
  }

  staticgetInfo() {
    return `User ${this.email} is ${this.age} years old and has ${this.numberOfPosts} posts`
  }

  updatePostCount(value) {
    this.numberOfPosts += value
  }
}

const blogger = new Blogger({
  email: 'mango@mail.com',
  age: 24,
  numberOfPosts: 20,
  topics: ['tech', 'cooking']
});

// console.log(blogger)

// console.log(blogger.getInfo());
// blogger.updatePostCount(10);
// console.log(blogger.getInfo());


// ```js
// const mango = new User({
//   name: 'mango@mail.com',
//   age: 24,
//   numberOfPosts: 20,
//   topics: ['tech', 'cooking'],
// });
// console.log(mango.getInfo()); // User mango@mail.com is 24 years old and has 20 posts
// mango.updatePostCount(5);
// console.log(mango.getInfo()); // User mango@mail.com is 24 years old and has 25 posts

const poly = new Blogger({
  email: 'poly@mail.com',
  age: 19,
  numberOfPosts: 17,
  topics: ['sports', 'gaming', 'health'],
});
// console.log(poly.getInfo()); // User poly@mail.com is 19 years old and has 17 posts
// poly.updatePostCount(4);
// console.log(poly.getInfo()); // User poly@mail.com is 19 years old and has 21 posts
// ```






// ## Example 2 - Сховище

// Напиши клас `Storage` який створює об'єкти для керування складом товарів.
// При виклику отримуватиме один аргумент - початковий масив товарів і записуватиме
// його властивість `items`.

// Додай методи класу:

// - `getItems()` - повертає масив товарів.
// - `addItem(item)` - отримує новий товар і додає його до поточних.
// - `removeItem(item)` - отримує товар і, якщо він є, видаляє його з поточних.

class Storage {
  constructor(goods) {
    this._items = goods
  }

  getItems() {
    return this._items
  }

  addItem(item) {
    this._items.push(item)
  }

  removeItem(item) {
    const index = this._items.indexOf(item);

    if(index > -1) {
      this._items.splice(index, 1)
    }
  }
}


// // ```js
// const storage = new Storage(['🍎', '🍋', '🍇', '🍑']);
// const items = storage.getItems();
// console.table(items); // [ '🍎', '🍋', '🍇', '🍑' ]

// storage.addItem('🍌');
// // console.table(storage.items); // [ '🍎', '🍋', '🍇', '🍑', '🍌' ]

// storage.removeItem('🍋');
// console.table(storage.getItems()); // [ '🍎', '🍇', '🍑', '🍌' ]
// // ```

// const courses = new Storage(['html', 'css', 'js', 'node']);
// console.table(courses.getItems())








// ## Example 3 - User

// Напиши клас `User` який створює об'єкт із властивостями `login` та `email`.
// Оголоси приватні властивості `#login` та `#email`, доступ до яких зроби через
// гетер та сетер `login` та `email`.

const permission = true;

class User {
  #login;
  #email;

  constructor({login, email}) {
    this.#login = login;
    this.#email = email;
  }

  get login() {
    if (permission) {
      return this.#login
    }
    
    return "нєєєє)"
  }

  set login(value) {
    if(value.length < 5) {
      this.#login = value
    }
  }
}


// ```js
const mango = new User({
  login: 'Mango',
  email: 'mango@dog.woof',
});

// console.log(mango.login); // Mango
// mango.login = 'dodo';
// console.log(mango.login); // Mangodoge

// const poly = new User({
//   login: 'Poly',
//   email: 'poly@mail.com',
// });

// console.log(poly.login); // Poly
// poly.login = 'Polycutie';
// console.log(poly.login); // Polycutie
// ```







// ## Example 4 - Нотатки

// EXAMPLE items = [
//   {
//     text: 'asdsadsa',
//     priority: 'LOW'
//   },
//   {
//     text: 'asdsadsa',
//     priority: 'LOW'
//   }
// ]

// Напиши клас `Notes` який керує колекцією нотаток у властивості `items`.
// Замітка це об'єкт із властивостями `text` та `priority`. Додай класу статичну
// властивість `Priority`, у якому зберігатиметься об'єкт із пріоритетами.



class Notes {
  static defaultText = "ororororoor oro ro or o"
  static Priority = {
    LOW: 'low',
    NORMAL: 'normal',
    HIGH: 'high'
  }  

  constructor() {
    this.items = []
  }

  addNote(note) {
    this.items.push(note)
  }

  removeNote(text) {
    const index = this.items.findIndex(el => el.text === text);
    this.items.splice(index, 1);
  }
}

// ```js
// {
//   LOW: 'low',
//   NORMAL: 'normal',
//   HIGH: 'high'
// }
// ```

// Додай методи `addNote(note)`, `removeNote(text)` та
// `updatePriority(text, newPriority)`.

// ```js
const myNotes = new Notes();
console.log(myNotes)

myNotes.addNote({ 
  text: Notes.defaultText, 
  priority: Notes.Priority.LOW 
});

console.log(myNotes.items);

myNotes.addNote({
  text: 'Моя друга замітка',
  priority: Notes.Priority.NORMAL,
});
console.log(myNotes.items);

myNotes.removeNote('Моя друга замітка');
console.log(myNotes.items);

// myNotes.updateNote('Моя друга замітка', Notes.Priority.HIGH);
// console.log(myNotes.items);
// ```







// ## Example 5 - Toggle

// Напишіть клас `Toggle` який приймає об'єкт налаштувань `{isOpen: boolean}` і
// оголошує одну властивість `on` - стан вкл/викл (true/false). За замовчуванням
// значення властивості `on` повинно бути `false`.

class Toggle {
  constructor({isOpen = false} = {}) {
    this.on = isOpen;
  }

  toggle() {
    this.on = !this.on;
  }
}

// ```js
const firstToggle = new Toggle({ isOpen: true });
console.group('firstToggle');
console.log(firstToggle.on);
firstToggle.toggle();
console.log(firstToggle.on);
console.groupEnd('firstToggle');

const secondToggle = new Toggle();
console.group('secondToggle');
console.log(secondToggle.on);
secondToggle.toggle();
console.log(secondToggle.on);
console.groupEnd('secondToggle');