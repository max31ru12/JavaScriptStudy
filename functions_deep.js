let massive = [1,2,3,4,5,6];

for (let i = 0; i < massive.length; i++) {
    console.log(massive[i]);
}

// Остаточные параметры (...args) - запишет все параметры в массив с именем args
function sumAll(...args) {
    let sum = 0;
    for (let arg of args) sum += arg;
    console.log(args);
    console.log(arguments[args.length]) // все параметры, передаваемые в функцию находятся в псевдомассиве arguments
    return sum;
}

console.log(`Sum all is ${sumAll(1,2,3,4,5)}`);

let residualParameters = function(first, second, ...others) {
    console.log(`first is: ${first}, second is: ${second}, others are ${others}`);
}

residualParameters(1,2,3,4,5,6,7);


// Функция Math.max() - берет максимальное число из списка чисел (не из массива)
example_list = [1,2,3,4];

console.log(Math.max(example_list)); // NaN
console.log(Math.max(...example_list)); // 4

// ... - оператор расширения может склеивать массивы
let arrOne = [1,2,3,4];
let arrTwo = [4,3,2,1];

let mergedArr = [...arrOne, 5, ...arrTwo];
console.log(mergedArr); // [1, 2, 3, 4, 5, 4, 3, 2, 1]


// Оператор Array.from преобразует перебираемый объект а массив
let greeting = "привет";
console.log(Array.from(greeting));
console.log(...greeting);




// Замыкания - это функция, которая запоминает свои внешние переменные
// В JavaScript все функции являются замыканиями

// Работа в локальными переменными
{
    let number = 123;
    let User = {name: "Max", username: "Max Max"};
}

// console.log(number); // Ошибка, переменная не видна в этом лексическом окружении


// Глобальный объект Window
window.console.log("5");

// Сделать информацию о текущем пользователе глобальной
window.CurrentUser = {
    name: 'Mike'
}

console.log(CurrentUser["name"]);


// Объекты функции
function SayHi() {
    console.log("Это фунция приветствия");
    SayHi.counter++;
}
// В JS функции - это объекты, поэтому можно сделать так:
console.log(SayHi.name); // имя функции
console.log(SayHi.length); // кол-во параметров функции в ее объявлении

// Можно добавить собственное св-во
SayHi.counter = 0;
SayHi();
SayHi();

console.log(SayHi.counter); // 2


// Named Function Expression (NFE)
let SayBye = function func(who) {
    if (who) {
        console.log(`Bye ${who}`);
    } else {
        func("Guest");
    }
}

SayBye(); // Bye Guest
SayBye('Mike'); // Bye Mike
// func(); - ошибка


 // new Function (специальный такой вот синтаксис)
let sayName = new Function('name', 'return(console.log(name))');

sayName('Mile');


// Планирование вызова (два метода)
// 1. setTimeout - вызов функции один раз через определенных интервал времени
// 2. setInterval - вызов функции регулярно, повторяя вызов через определнных интервал времени


let SayHello = (Imya) => {console.log(`Hello, ${Imya}`)}

// setInterval(func, delay, arg1, arg2 ...);
setInterval(SayHello, 10000, 'Peter');


// Желательный синтаксис
setTimeout(() => alert('Hello'), 2000)


// Отмена таймера
// let timerId = setTimeout(...);
// clearTimeout(timerId);

console.log(Date.now());


// Декораторы и переадресация вызова, call/apply, декораторы










