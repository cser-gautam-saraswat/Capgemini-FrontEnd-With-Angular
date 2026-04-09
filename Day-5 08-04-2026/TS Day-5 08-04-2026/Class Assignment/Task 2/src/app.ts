function processNumbers(
  a: number,
  b: number,
  callback: (x: number, y: number) => number
): number {
  return callback(a, b);
}

// Callback Functions
const add = (x: number, y: number): number => x + y;
const multiply = (x: number, y: number): number => x * y;
const subtract = (x: number, y: number): number => x - y;


console.log(processNumbers(10, 5, add));       
console.log(processNumbers(10, 5, multiply));  
console.log(processNumbers(10, 5, subtract));  