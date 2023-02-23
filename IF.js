// Оператор ветвления if

let year = 2015;

// Условие с одной инструкцией
if (year === 2015) console.log('Правильно!');

// Условие с несколькими интрукциями
if (year == 2015) {
    console.log('Hello');
    console.log('Your conditions are true');
}

if (year == 2015) {
    alert(`Правильно, сейчас ${year} год!`);
} else {
    alert(`Вообще нихуя не правильно, сейчас ${year} год`);
}

if (year == 2015) {
    console.log(`Сейчас ${year} год!`);
} else if (year > 2015) {
    console.log('Это слишком поздно');
} else {
    console.log(`Этот год меньше, чем ${year} год`);
}

// Тернарный оператор ? (имеет три аргумента)
let age = 18;

// Если условие выполнено, то значение1, ЕСЛИ НЕТ - ТО ЗНАЧЕНИЕ 2
// ПЕРМЕННАЯ      = УСЛОВИЕ   ? ЗНАЧЕНИЕ1: ЗНАЧЕНИЕ2    
let accessAllowed = (age > 18)? true: false;

console.log(accessAllowed);

// Несколько ?
let message = (age < 3)? 'Привет, малыщ': 
    (age < 18)? 'Привет!': 
    (age < 100)? 'Здравствуйте!': 
    'Какой необычный возраст';


// Использование ? вместо if else
let company = "Netscape";

(company == "Netscape")? console.log('Правильно!'): console.log(`Неправильно, JavaScript создала компания ${company}`);





