function calculateCircleArea(circleRadius: number): number {
    const area: number = 3.14 * circleRadius ** 2;
    return area;
}

const areaResult1: number = calculateCircleArea(4);
console.log(areaResult1);

// *ЗАМЫКАНИЕ*

function createMultiplier(n: number)  {
    return function(x: number) {
        return x * n;
    }
}

const double = createMultiplier(2);
const triple = createMultiplier(3);

console.log(double(5));
console.log(triple(6));


// *ЦИКЛЫ*

// Дано число N. Выведи все числа от 1 до N включительно.

const N: number = 5;

for (let i = 1; i <= N; i +=1) {
    console.log(i);
}

// Дано число N. Найди сумму всех чисел от 1 до N.

const N: number = 5;
let sum: number = 0;

for (let i = 1; i <=N; i +=1) {
    sum = sum + i;
}

console.log(sum);

// Дано число N. Нужно посчитать, сколько в нём цифр.

let N: number = 1234;
let count: number = 0;
while (N > 0) {
    N = Math.floor(N / 10);
    count = count + 1;
}

console.log(count);

// Дано N. Выведи все чётные числа от 1 до N.

let N: number = 10;

for (let i = 1; i <= N; i += 1) {
    if (i % 2 === 0){
        console.log(i);
    }
}

// Дано N. Посчитай, сколько чисел от 1 до N являются нечётными.

let N: number = 10;
let count: number = 0;

for (let i = 1; i <= N; i += 1) {
    if (i % 2 !== 0) {
        count = count + 1;
    }
}
console.log(count);

// Дано число N. Найди сумму всех его цифр.

let N: number = 1234;
let sum: number = 0;

while (N > 0) {
    let digit = N % 10;
    sum = sum + digit;
    N = Math.floor(N / 10);
}

console.log(sum);

// Найти максимальную цифру в числе

let N: number = 5382;
let max: number = 0;

while(N > 0) {
    const digit = N % 10;
    if (digit > max) {
        max = max + digit;
    }
    N = Math.floor(N / 10);
}
console.log(max);

// *МАССИВЫ* 

// Есть массив чисел. Добавь в конец число 10, затем удали последний элемент. Что получилось?

const nums = [1, 2, 3, 4, 5];

nums.push(10)
nums.pop();

// Дан массив чисел. Верни новый массив, где каждое число умножено на 3.

const nums2 = [2, 5, 8, 1];

const triple = nums2.map(n => n * 3);

// Отфильтруй массив — оставь только числа больше 4.

const nums3 = [1, 7, 3, 9, 2, 6];

const moreThanFour = nums3.filter(n => n > 4);

//  Дан массив имён. Добавь в конец имя 'Дима', затем верни новый массив, где каждое имя написано заглавными буквами.

const names = ['аня', 'боря', 'вася'];

names.push('Дима');

const upperCase = names.map(n => n.toUpperCase());

// Дан массив пользователей. Отфильтруй только активных.

const users = [
  { name: 'Аня', active: true },
  { name: 'Боря', active: false },
  { name: 'Вася', active: true },
  { name: 'Галя', active: false },
];

const activeUsers = users.filter(u => u.active);

// Дан массив цен. Верни новый массив цен со скидкой 20%. Затем отфильтруй — оставь только те, что дешевле 500 рублей.

const prices = [300, 800, 450, 1200, 199];

const discount = prices.map(p => p * 0.8);

const cheaperThanFiveHundred = discount.filter(p => p < 500);

//  Дан массив строк. Отфильтруй только те, длина которых больше 4 символов, затем переведи каждую в верхний регистр

const words = ['кот', 'слон', 'ёж', 'тигр', 'медведь', 'лев'];

const moreThanFive = words.filter(w => w.length > 4);

const upperCase = moreThanFive.map(w => w.toUpperCase());

// Дан массив чисел. Удали последний элемент, затем верни новый массив — только чётные числа, каждое умноженное на 2.

const nums = [3, 6, 7, 4, 8, 5];

nums.pop();

const evenNums = nums.filter(n => n % 2 === 0);

const doubleNums = evenNums.map(n => n * 2);

// Дан массив товаров. Верни массив строк вида "Название — X руб.", но только для товаров, которые есть в наличии.

const goods = [
  { name: 'Чай', price: 150, inStock: true },
  { name: 'Кофе', price: 300, inStock: false },
  { name: 'Сок', price: 120, inStock: true },
  { name: 'Вода', price: 50, inStock: false },
];

const goodsInStock = goods.filter(g => g.inStock);

const nameAndValue = goodsInStock.map(item => `${item.name} — ${item.price} руб.`);

// Дан массив студентов с оценками. Нужно:

// оставить только тех, кто сдал (средняя оценка ≥ 4)
// добавить в конец массива студента { name: 'Юля', grades: [5, 5, 4] }
// вернуть массив имён сдавших студентов

const students = [
  { name: 'Аня', grades: [5, 4, 5] },
  { name: 'Боря', grades: [3, 2, 3] },
  { name: 'Вася', grades: [4, 4, 3] },
  { name: 'Галя', grades: [2, 3, 2] },
];

students.push({ name: 'Юля', grades: [5, 5, 4] });

const passed = students.filter(s => {
    const sum = s.grades.reduce((acc, cur) => acc + cur, 0);
    const average = sum / s.grades.length;
    return average >= 4;
})
.map(s => s.name);