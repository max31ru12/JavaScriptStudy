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








