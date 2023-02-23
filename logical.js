// оператор ИЛИ (||)

console.log( true || true );   // true
console.log( false || true );  // true
console.log( true || false );  // true
console.log( false || false ); // false

// Возвращает первое значение true или последнее false
console.log(1 || 2 || 3); // вернет 1
console.log(null || 4 || null || 1); // 4
console.log(null || 0 || undefined); // undefined

// Сокращенное вычисление
let x;
let z;

console.log(16 || (x = 1)); // 16, сначала вернется 16Б а x = 1 вычисляться уже не будет
console.log(x) // undefined
console.log((y = 7) || 44); // 7, сначала вычислится y = 7, а затем вернется это значение
console.log(y); // 7




// Оператор И (&&)

console.log( true && true );   // true
console.log( false && true );  // false
console.log( true && false );  // false
console.log( false && false ); // false

// Находит первое ложное или последнее истинное
console.log(1 && null); // null
console.log(18 && 5 && 8) // 8

// Использование &&

let num = 123;

(num > 0) && console.log(`your number ${num} greater than zero`); // Если num больше 0, то выполнится console.log



// Оператор НЕ (!)
console.log( !true ); // false
console.log( !0 ); // true

// Двойное НЕ (!!) 
// Для преобразования к логическому типу
console.log(!!"NUMBER") ; // true
alert( !!null ); // false




// Оператор нулевого слияния (??)
let a = null;
let b = undefined;
let c = 'not null or undefined';
let d = 'asdasdad';

console.log('');
// Возвращает второе значение, если первое null или undefined
console.log(a ?? b); // undefined
console.log(b ?? a); // null


// let m = 1 && 2 ?? 3; // Синтаксическая ошибка



