// Создаём символ id с описанием (именем) "id"
let id = Symbol("id");

let id1 = Symbol("id");
let id2 = Symbol("id");

alert(id1 == id2); // false

// Если хотим вывести символ как строку, то необходимо явное преобразование
alert(id.toString());

// Или обратиться к описанию символа
alert(id.description);

