"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// 1. Basic Function
function add(a, b) {
    return a + b;
}
// 2. Arrow Function
const multiply = (a, b) => {
    return a * b;
};
// 3. Void Function
function greet(name) {
    console.log("Hello " + name);
}
// 4. Optional Parameter
function greetUser(name, age) {
    console.log(name, age);
}
// 5. Default Parameter
function greetWithDefault(name, age = 18) {
    console.log(name, age);
}
function getUser(user) {
    return user.name;
}
// 7. Function Type Variable
let addFn;
addFn = (x, y) => x + y;
// 8. Rest Parameters
function sum(...nums) {
    return nums.reduce((acc, val) => acc + val, 0);
}
function combine(a, b) {
    return a + b;
}
// 10. Generic Function
function identity(value) {
    return value;
}
// Usage
console.log(add(2, 3));
console.log(multiply(2, 3));
greet("Gautam");
greetUser("Gautam");
greetWithDefault("Gautam");
console.log(getUser({ name: "Gautam", age: 22 }));
console.log(addFn(5, 5));
console.log(sum(1, 2, 3, 4));
console.log(combine(10, 20));
console.log(combine("Hello ", "Gautam"));
console.log(identity("TypeScript"));
console.log(identity(123));
