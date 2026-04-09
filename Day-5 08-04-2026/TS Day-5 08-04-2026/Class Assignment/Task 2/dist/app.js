"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function processNumbers(a, b, callback) {
    return callback(a, b);
}
// Callback Functions
const add = (x, y) => x + y;
const multiply = (x, y) => x * y;
const subtract = (x, y) => x - y;
console.log(processNumbers(10, 5, add));
console.log(processNumbers(10, 5, multiply));
console.log(processNumbers(10, 5, subtract));
