// 1. Function Declaration
function greet() {
  console.log("Hello");
}
greet();

// 2. Function with Parameters & Return
function add(a, b) {
  return a + b;
}
console.log(add(2, 3));

// 3. Function Expression
const sayHi = function() {
  console.log("Hi");
};
sayHi();

// 4. Arrow Function
const multiply = (a, b) => a * b;
console.log(multiply(4, 5));

// 5. Default Parameters
function welcome(name = "Guest") {
  console.log("Welcome " + name);
}
welcome();
welcome("Gautam");

// 6. Anonymous Function
setTimeout(function() {
  console.log("Executed after 1 sec");
}, 1000);

// 7. Callback Function
function processUser(name, callback) {
  callback(name);
}

processUser("Gautam", function(n) {
  console.log("Hello " + n);
});