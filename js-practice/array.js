'use strict';

// Array
const arr1 = new Array();
const arr2 = [1, 2];

// 2. looping over an array
const fruits = ['🍇', '🍎'];
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

// b. for of
for (let fruit of fruits) {
    console.log(fruit);
}

// c. forEach
// thisArg? 이렇게 되어 있는 것은 넣지 않아도 되는 인자
// forEach(callbackfn: (value: T, index: number, array: T[]) => void, thisArg?: any): void;
fruits.forEach((fruit, index) => {console.log(fruit, index);})

// 3. Add, Del, Copy
fruits.push('🍓', '🍑', '🍇');
fruits.pop();

// unshift: add an item to the begining
// shift : remove an item from the beginning
// however, shift is so slow
fruits.unshift('🍋');
console.log("unshift lemon : ", fruits);
fruits.shift();
console.log("shift fruits : ", fruits);

// 4. remove an item by index position
// splice (startIdx, amount, items1, items2) -> 꼬아서 묶다.
console.log("current fruits : ", fruits);
fruits.splice(1, 2); // index 1부터 2개의 데이터를 지움, splice(1) index 1부터 모든 data 지움
console.log("splice (1,2) : ", fruits);
fruits.splice(1, 1, '🥭', '🍏'); // index 1부터 1개 지우고, 뒤에꺼 추가


// 5. concat two arrays
const fruits2 = ['🍍', '🍉'];
const newFruits = fruits.concat(fruits2);
console.log('concat newFruits : ', newFruits);
console.log('fruits : ', fruits);

// 6. Searching
console.log(fruits.indexOf('🍓')); // -1 : not exist, 가장 첫 번째 인덱스
console.log(fruits.lastIndexOf('🍓')); // 마지막 인덱스
console.log(fruits.includes('🍉')) // true, false


