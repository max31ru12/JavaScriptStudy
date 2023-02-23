"use strict"; // Явно активирую изменения, которые были сделаны в 2009 году

// alert('привет мир!');  Выводит сообщение в браузере

// Переменные

let message; // Объявление (создание) переменной

message = 'Hello'; // Сохранить строку Hello в переменную message

let messageTwo = 'Hello'; // Объявляем переменную и сразу задаем значение

let user = 'John', age = 25, mes = 'Hello'; // Несколько переменнух в одной строке

const myBirthday = '31.07.2001'; // Создание константы



// Типы данных

// Тип number - это целые и ыещественные числа
let n = 123; // тип number
n = 123.123; // Это тоже тип number

// Специальные числовые значения
// Infinity, -Infinity, NaN

console.log(1/0); // Infinity
console.log( Infinity ); // Infinity
console.log('asd'/4); // Nan - вычислительная ошибка или неопределенная мат. операция

// символ "n" в конце означает, что это BigInt
const bigInt = 1234567890123456789012345678901234567890n;

//  string - строка
let str = "Привет";
let str2 = 'Одинарные кавычки тоже подойдут';
let phrase = `Обратные кавычки позволяют встраивать переменные ${str}`; 

// boolean - булевый тип
let TrNum = true;
let FlNum = false;

// Значение null - "ничего" или же "пусто"

let myAge = null; // значение неизвестно

// Значение undefined - значение не было присвоено

let myNewAge;

console.log(myNewAge); // Выведет undefined

// Тип object - особенный (о нем позже)

// typeof - проверить тип (и оператор и функция работают одинаково)

typeof 10; // number

typeof(10); // number

console.log(typeof(10n)); // bigint




// alert, prompt и confirm

alert('Привет, это модальное окно'); // Модальное окно - можно взаимодействовать на странице только после нажатия ОК

// result = prompt(title, [default]); [] - параметр необязательный
// То, что введет пользователь, будет передано в переменную result
// Если нажать кнопку ОТМЕНА, то result будет равен null
let result = prompt('Это сообщение выводится в модальном окне', 'Это дефолтное значение, которое уже записано в панели ввода');


// confirm - модальное окно (ДА или НЕТ)
let isBoss = confirm("Ты здесь главный?");



// Строковое преобразование

let value = true;
value = String(value); // теперь это строка 'true'

// Численное преобразование

alert( "6" / "2" ); // 3, строки преобразуются в числа

let strt = "123";
strt = Number(str);
console.log(typeof(strt)); // Number

// true -> 1, false -> 0, Undefined -> Nan, null -> 0

// Лгоическое преобразование

console.log(Boolean("1")); // true
console.log(Boolean(1)); // true
console.log(Boolean("0")); // true
console.log(Boolean(0)); // false


// Сложение строк

// Так работает только со сложением
console.log("1" + 2); // "12"
console.log(2 + "1"); // "21"
console.log(2 + 2 + "1"); // "41" а не "221"

// Вычитание
console.log(6 - "2");// 4, '2' привеодится к числу
console.log('6' / '2'); // 3, оба операнда приводятся к числам

// Унарный оператор сложения

// Не влияет на числа
let x = 1;
alert( +x ); // 1

let y = -2;
alert( +y ); // -2

// Преобразует не числа в числа
alert( +true ); // 1
alert( +"" );   // 0


// Про оператор присваивания (он возвращает значение)

let c = 30 - (a = 6 + 4);
console.log(a); // 10
console.log(c); // 20

// let a, b, c
// a = b = c = 5 (так тоже можно)

// Можно как в Python
let ab = 5;
ab += 6; // a = 11
ab *= 4; // a = 24
ab += 4 + 6; // 15

// Инкремент/декремент

let counter_1 = 0;
counter_1++; // увеличить на единицу
counter_1--; // Уменьшит на единицу

let counter = 1;
let a_1 = ++counter; // (*)
alert(a_1); // 2

let counter_2 = 1;
let a_2 = counter++; // (*) меняем ++counter на counter++

alert(a_2); // 1



// Побитовые операторы

// AND(и) ( & )
// OR(или) ( | )
// XOR(побитовое исключающее или) ( ^ )
// NOT(не) ( ~ )
// LEFT SHIFT(левый сдвиг) ( << )
// RIGHT SHIFT(правый сдвиг) ( >> )
// ZERO-FILL RIGHT SHIFT(правый сдвиг с заполнением нулями) ( >>> )


// Оператор "запятая"
let ac = (1 + 2, 3 + 4);

alert( ac ); // 7 (результат вычисления 3 + 4)





