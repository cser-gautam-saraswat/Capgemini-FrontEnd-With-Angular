// 1. Basic Function
function add(a: number, b: number): number {
  return a + b;
}

// 2. Arrow Function
const multiply = (a: number, b: number): number => {
  return a * b;
};

// 3. Void Function
function greet(name: string): void {
  console.log("Hello " + name);
}

// 4. Optional Parameter
function greetUser(name: string, age?: number): void {
  console.log(name, age);
}

// 5. Default Parameter
function greetWithDefault(name: string, age: number = 18): void {
  console.log(name, age);
}

// 6. Function with Object Type
type User = {
  name: string;
  age: number;
};

function getUser(user: User): string {
  return user.name;
}

// 7. Function Type Variable
let addFn: (a: number, b: number) => number;
addFn = (x, y) => x + y;

// 8. Rest Parameters
function sum(...nums: number[]): number {
  return nums.reduce((acc, val) => acc + val, 0);
}

// 9. Function Overloading
function combine(a: number, b: number): number;
function combine(a: string, b: string): string;
function combine(a: any, b: any): any {
  return a + b;
}

// 10. Generic Function
function identity<T>(value: T): T {
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
console.log(identity<string>("TypeScript"));
console.log(identity<number>(123));
