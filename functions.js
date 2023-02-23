// Синстаксис, голбальные и локальные перменные
function showMessage() {
    let name = 'Вася'; // Локальная перменная (не видна вне функции)
    console.log(`Привет, ${name}`); 
    console.log(`Твоя фамилия ${lastName}`); // Глобальная переменная (видна везде)
    userName = 'Hello, max'
}

let lastName = 'Пупкин';

let userName = 'max';
console.log('Сейчас переменная userName равна max')

showMessage();

console.log(`После вызова функции userName поменяла значение на ${userName}`);


// Передача аргументов
function SendMessage(toUser, message = 'Это значение по умолчанию') {
    console.log(`Message to ${toUser} is: ${message}`);
}

SendMessage(prompt('Enter username'), 'Hello');
// Тут в перменную message передается значение по умолчанию
SendMessage(prompt('Enter username'));


// Возврат значения
function sum(a = null, b = null){
    console.log('Здесь будет вычисляться сумма')
    // Длинный return заключается в скобки
    return (a + b); // return без значения приведет к выходу из функции, возвращает undefined
}

console.log(sum(1, 4))


