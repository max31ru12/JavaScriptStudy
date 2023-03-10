"use strict"

// Пустой объект (два способа создания)
let userOne = new Object();
let userTwo = {};


let userThree = {
    name: "John",
    age: 23
};

// Обращение к свойствам
console.log(`Имя пользователя: ${userThree.name}, его возраст: ${userThree.age}`);

// добавить свойство
userThree.isAdmin = false;
console.log(userThree.isAdmin);

// Удалить свойство
delete userThree.age;

// Свойство из нескольких слов
let userFour = {
    name: "Max",
    age: 21,
    "user's description": 'Default user'
};

// обращение через квадратные скобки
console.log(userFour["user's description"]);
console.log(userFour["name"]);


let fruit = "apple";

let bag = {
    // Имя свойства будет взято из переменной fruit
    [fruit]: 5,
}

console.log(bag.apple);


// Проверка существования свойства
console.log(bag.orange === undefined); // true, потому точто св-ва не существует

console.log("orange" in bag); // false, bag не имеет сво-ва orange


// Перебор свойств объекта
for (let key in bag) {
    console.log(key);
    console.log(bag[key]);
};


// Копирование объектов

// При копировании переменной объекта копируется ссылка, но сам объект не дублируется.
let user = {name: "Jonh"};
let admin = user; // Передаем ссылку на объект в переменную

admin["age"] = 23;
console.log(user.age); // В user теперь тоже есть св-во
console.log(user === admin); // Обе перменные ссылаются на один и тот же объект, поэтому true

let a = {}, b = {};
console.log(a === b); // Это два независимых объекта, false


// Создать такой же, но независимый объект (клон) - только в цикле for in (нет стандартного метода)
let newUser = {};
for (let key in user) {
    newUser[key] = user[key];
};

console.log(user);
console.log(newUser);

let newAdmin = {};
// Метод копирует св-ва объектов user, admin и тд в объект newAdmin
Object.assign(newAdmin, admin, user); //
console.log(newAdmin);

// Такое применение
let clone = Object.assign({}, user);
console.log(clone);


// Ключевое слово this
let User = {
    name: "John",
    age: 25,
    // Во-первых, эта штука будет эквивалентна sayHi: funtion() {alert('Hi')}
    sayHi() {
        // this - Это текущий объект
        alert(this.name);
    }
};

// Значение this вычисляется во время выполнения кода
let sayBye = function() {
    console.log(this.name);
};

let John = {name: "John"};
let Dave = {name: "Dave"};

John.f = sayBye;
Dave.f = sayBye;

// Это свойство вызываем как функцию
John.f();
Dave.f();


// Функция-конструктор 
function basket(name) {
    this.name = name;
    this.is_empty = false;
}

// Создаются два новых объекта с именами basketOne и basketTwo, они имеют свойства
let basketOne = new basket("Магнит");
let basketTwo = new basket("Пятерочка");




// Опциональная цепочка
let message = {
    toUser: "id 12345",
};

// При строгом режиме вызывает ошибку
console.log(message.fromUser);
// Тут приходит на помощь опциональная цепочка
console.log(message.fromUser?.name);

// Тут ошибка
// console.log(email?.fromUser);


// Например, ?.() используется для вызова функции, которая может не существовать
let userAdmin = {
    admin() {
      alert("Я админ");
    }
  };
  
  let userGuest = {};
  
  userAdmin.admin?.(); // Я админ
  
  userGuest.admin?.(); // ничего не произойдет (такого метода нет)


// Синтаксис ?.[] также работает, если мы хотим использовать скобки [] для доступа к свойствам вместо точки .


