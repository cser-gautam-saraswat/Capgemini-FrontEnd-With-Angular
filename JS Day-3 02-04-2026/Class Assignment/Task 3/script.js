function calculator(operator) {
  if (operator === "+") {
    return function(a, b) {
      return a + b;
    };
  }

  if (operator === "-") {
    return function(a, b) {
      return a - b;
    };
  }

  if (operator === "*") {
    return function(a, b) {
      return a * b;
    };
  }

  if (operator === "/") {
    return function(a, b) {
      return a / b;
    };
  }

  return function() {
    return "Invalid Operator";
  };
}

const add = calculator("+");
const multiply = calculator("*");

console.log(add(10, 5));       // 15
console.log(multiply(10, 5));  // 50


// Higher Order Function (takes function as argument)
function calculatorHigherOrder(operation) {
  return function(a, b) {
    return operation(a, b);
  };
}

function add(a, b) {
  return a + b;
}

function multiply(a, b) {
  return a * b;
}

const addFn = calculatorHigherOrder(add);
const multiplyFn = calculatorHigherOrder(multiply);

console.log(addFn(10, 5));       // 15
console.log(multiplyFn(10, 5));  // 50