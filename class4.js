"use strict";
// Write a program that uses filter to remove all negative numbers from an array of numbers
// Given an array of numbers [1, 2, 3, 4, 5], use the map method to
// create a new array where each number is multiplied by 2.
// Given an array of strings ["apple", "banana", "cherry", "date", "grape"], use
// the filter method to create a new array containing only the fruits with more than 5 characters.
// Given an array of numbers [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], use
//the map and filter methods together to create a new array containing the squares of even numbers.
// Given an array of temperatures in Celsius [0, 10, 20, 30, 40], us
// e the map method to create a new array where each temperature is converted to Fahrenheit using the formula (Celsius * 9/5) + 32.
//Given an array of numbers [3, 6, 9, 12, 15, 18], use the
// map and filter methods together to create a new array containing the doubled values of odd numbers.
//Given an array of names ["Alice", "Bob", "Charlie", "David", "Emily"], use the
//forEach method to log each name with an exclamation mark at the end, e.g., "Alice!".-
// question no 2 
// Given an array of numbers [1, 2, 3, 4, 5], use the map method to
// create a new array where each number is multiplied by 2.
let num = [1, 2, 3, 4, 5];
const doubled = num.map(item => item * 2);
console.log(doubled); // [ 2, 4, 6, 8, 10 ]
// question no 3 
// Given an array of strings ["apple", "banana", "cherry", "date", "grape"], use
// the filter method to create a new array containing only the fruits with more than 5 characters.
let array = ["apple", "banana", "cherry", "date", "grape"];
let aaraylist = array.filter((item) => {
    let find = item.charAt(5);
    if (find) {
        console.log("list in map", item);
        return item;
    }
});
// question no 4 
// Given an array of numbers [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], use
//the map and filter methods together to create a new array containing the squares of even numbers.
let num1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let findSqr = num1.filter((f) => f % 2 == 0).map((item) => {
    return item * item;
});
console.log("even  sqr number", findSqr);
// question no 5 
// Given an array of temperatures in Celsius [0, 10, 20, 30, 40], us
// e the map method to create a new array where each temperature is converted to Fahrenheit using the formula (Celsius * 9/5) + 32.
const temp = [0, 10, 20, 30, 40];
const ArrList = temp.map((item) => {
    return (item * 9 / 5) + 32;
});
console.log("temparr", ArrList);
// Question no 6 
// Given an array of numbers [3, 6, 9, 12, 15, 18], use the
// map and filter methods together to create a new array containing the doubled values of odd numbers.
const originalArray = [3, 6, 9, 12, 15, 18];
const doubledOddNumbers = originalArray
    .filter(number => number % 2 !== 0) // Filter out odd numbers
    .map(number => number * 2); // Double the odd numbers
console.log(doubledOddNumbers);
// question no 7
//Given an array of names ["Alice", "Bob", "Charlie", "David", "Emily"], use the
//forEach method to log each name with an exclamation mark at the end, e.g., "Alice!"
let arrayName = ["Alice", "Bob", "Charlie", "David", "Emily"];
let IncludedName = arrayName.map((item) => {
    let addEx = `${item}!`;
    return `${item}!`;
});
console.log("new RR", ClipboardItem);
