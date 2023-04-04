'use strict'

// примитив - данные примитивного типа
// String, number, boolean, symbol, null, undefinded, BigInt


let str = 'Hello';
// В момент str.toUpperCase - создается объект, который знает значение str, дальше к объекту применяется метод
console.log( str.toUpperCase() );

let num = 1.1234;
// округляет до двух знаков после запятой
console.log( num.toFixed(2) );


// Способы записи числа
let millionSimple = 1000000;
let millionExp = 1e6;
let ms = 1e-6; // миллисекунда



// Шестнадцатеричные, двоичные и восьмеричные числа

console.log( 0xff ); // 255(10)
console.log(0xFF);

console.log(0b11111111); // 255 в 2-системе
console.log(0o377); // 255  в 8-системе

console.log(0b11111111 === 0o377);


// Метод ToString
let number = 255;
console.log(number); // число
console.log( number.toString() ); // строка
console.log( number.toString(16) ) // строка в 16-системе - ff


// IsNaN - приводит значение в число и проверяет, равно ли оно NaN
console.log(isNaN(NaN)); //true
console.log(isNaN('str')); //true
console.log( NaN === NaN ); // false, так как NaN не равно ничему, даже самому себе


console.log( parseInt('100px') ); // 100
console.log( parseFloat('12.5em') ); // 12.5

console.log( parseInt('12.3') ); // 12, вернётся только целая часть
console.log( parseFloat('12.3.4') ); // 12.3, произойдёт остановка чтения на второй точке




// Строки

// Длина строки
console.log('abc'.length);

let word = 'Привет';
// Получение первого символа строки 
console.log(word[0]);
console.log(word.at(0));

// Получение последнего символа
console.log(word[word.length - 1]);
console.log(word.at(-1) );



