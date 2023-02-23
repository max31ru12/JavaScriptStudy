// Цикл while

let i = 3;

while (i > 0) {
    console.log(i);
    i--;
}


// Другой формат записи того же цикла
// while (i != 0) тут без скобок, потому что всего одна строка в теле цикла
i = 3;
while (i) console.log(i--);


// do ... while
// do { body } while (condition)
// Такой подход позволяет выполнить один раз тело цикла даже если условие заведомо ложно
i = 0;
do {
    console.log(i--);
} while (i > 0);





// Цикл for

// for (начало; условие; шаг) {}
for (let j = 0; j < 5; j++) {
    console.log(`Сейчас j равно ${j}`);
}

//alert(j); // 5, не будет работать если есть слово let, без него сработает 


// Перывание цикла с помощью break
let sum = 1;

while (sum) {
    // let value = +prompt('Введите число'); // Объявил переменную локально
    value = +prompt('Введите число'); // Объявил переменную глобально

    // Пока value != 0
    if (!value) break;

    sum += value;
}

console.log(`sum is ${sum}, value is ${value}`);


// Переход к следующей итерации continue
for (let i = 0; i < 10; i++) {

    // если true, пропустить оставшуюся часть тела цикла
    if (i % 2 == 0) continue;
  
    console.log(i); // 1, затем 3, 5, 7, 9
  }


// Метки для break/continue

outer: for (i = 0; i < 10; i++) {
    for (j = 0; j < 5; j++) {
        if (i === 5 && j === 3) break outer; // В этом месте заканчивает работу та часть цикла, где есть метка outer
    }
}

console.log(`Значение i = ${i}, значение j = ${j}`);


// Аналогично работает с continue




// Switch case

let m = 1 + 5;

switch (m) {
    case 1:
        console.log(`a = ${m}, Успех`);
        break;
    case 6:
        console.log(`a = ${m}, Успех`);
        // Если не поставить break, то проверки case будут игнорироваться, а тело остальное выполняться
    case 5:
        console.log(`a = ${m}, Успех`);
        break;
    // ниже это группировка case
    case 8:
    case 7:
        console.log(`a = ${m}, Успех`)
        break;
    default:
        console.log('Неправильно!');
}










