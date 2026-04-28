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

Дано число N. Выведи все числа от 1 до N включительно.

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