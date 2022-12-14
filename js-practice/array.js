'use strict';

// Array
const arr1 = new Array();
const arr2 = [1, 2];

// 2. looping over an array
const fruits = ['π', 'π'];
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

// b. for of
for (let fruit of fruits) {
    console.log(fruit);
}

// c. forEach
// thisArg? μ΄λ κ² λμ΄ μλ κ²μ λ£μ§ μμλ λλ μΈμ
// forEach(callbackfn: (value: T, index: number, array: T[]) => void, thisArg?: any): void;
fruits.forEach((fruit, index) => {console.log(fruit, index);})

// 3. Add, Del, Copy
fruits.push('π', 'π', 'π');
fruits.pop();

// unshift: add an item to the begining
// shift : remove an item from the beginning
// however, shift is so slow
fruits.unshift('π');
console.log("unshift lemon : ", fruits);
fruits.shift();
console.log("shift fruits : ", fruits);

// 4. remove an item by index position
// splice (startIdx, amount, items1, items2) -> κΌ¬μμ λ¬Άλ€.
console.log("current fruits : ", fruits);
fruits.splice(1, 2); // index 1λΆν° 2κ°μ λ°μ΄ν°λ₯Ό μ§μ, splice(1) index 1λΆν° λͺ¨λ  data μ§μ
console.log("splice (1,2) : ", fruits);
fruits.splice(1, 1, 'π₯­', 'π'); // index 1λΆν° 1κ° μ§μ°κ³ , λ€μκΊΌ μΆκ°


// 5. concat two arrays
const fruits2 = ['π', 'π'];
const newFruits = fruits.concat(fruits2);
console.log('concat newFruits : ', newFruits);
console.log('fruits : ', fruits);

// 6. Searching
console.log(fruits.indexOf('π')); // -1 : not exist, κ°μ₯ μ²« λ²μ§Έ μΈλ±μ€
console.log(fruits.lastIndexOf('π')); // λ§μ§λ§ μΈλ±μ€
console.log(fruits.includes('π')) // true, false


