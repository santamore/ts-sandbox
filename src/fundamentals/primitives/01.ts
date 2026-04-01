// Примеры различных базовых типов TypeScript с использованием всех примеров:

// string: строковые значения, например имя или приветствие
const greeting: string = "Привет, мир!";
console.log("string example:", greeting); // Выведет: Привет, мир!

// number: числовые значения, например возраст или цена
const age: number = 25;
const price: number = 199.99;
console.log("number example (age):", age); // Выведет: 25
console.log("number example (price):", price); // Выведет: 199.99

// boolean: логические значения, true или false — например, для проверки условий
const isAwesome: boolean = true;
const isAvailable: boolean = false;
console.log("boolean example (isAwesome):", isAwesome); // Выведет: true
console.log("boolean example (isAvailable):", isAvailable); // Выведет: false

// null: значение «ничего», например отсутствие значения
const emptyValue: null = null;
console.log("null example:", emptyValue); // Выведет: null

// undefined: переменная, которой не присвоено значение
const notAssigned: undefined = undefined;
console.log("undefined example:", notAssigned); // Выведет: undefined

// symbol: уникальное и неизменяемое примитивное значение, часто используется как уникальный ключ
const uniqueId: symbol = Symbol("id");
const anotherSymbol: symbol = Symbol();
console.log("symbol example (uniqueId):", uniqueId.toString());
console.log("symbol example (anotherSymbol):", anotherSymbol.toString());

// bigint: целые числа произвольной длины, например для очень больших значений
const bigNumber: bigint = 9007199254740993n; // больше, чем Number.MAX_SAFE_INTEGER
console.log("bigint example:", bigNumber);

// object: непримитивные значения, к примеру, объекты с данными
const person: object = { имя: "Анна", возраст: 30 };
console.log("object example:", person);

// unknown: типобезопасный аналог any
let mysteriousValue: unknown = "Неизвестное значение";
console.log("unknown example (string):", mysteriousValue);
mysteriousValue = 2024;
console.log("unknown example (number):", mysteriousValue);

// void: возврат из функции, которая ничего не возвращает
function logMessage(message: string): void {
    console.log("void example:", message);
}
logMessage("Это сообщение функции, которая ничего не возвращает");
