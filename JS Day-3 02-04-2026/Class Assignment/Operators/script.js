// Arithmetic Operators
let a = 10, b = 5;

console.log("Arithmetic:");
console.log(a + b); 
console.log(a - b); 
console.log(a * b); 
console.log(a / b); 
console.log(a % b); 
console.log(a ** b); 

// Assignment Operators
let x = 10;
x += 5;
x -= 2;
x *= 3;
x /= 2;

console.log("Assignment:");
console.log(x);

// Comparison Operators
console.log("Comparison:");
console.log(10 == "10");   // true
console.log(10 === "10");  // false
console.log(10 != "10");   // false
console.log(10 !== "10");  
console.log(5 > 3);        
console.log(5 < 3);        
console.log(5 >= 5);       
console.log(5 <= 3);       

// Logical Operators
console.log("Logical:");
console.log(true && false); 
console.log(true || false); 
console.log(!true);         

// Ternary Operator
let age = 18;
let result = (age >= 18) ? "Adult" : "Minor";
console.log("Ternary:");
console.log(result);

// Type Operator
console.log("Type:");
console.log(typeof "Hello"); // string
console.log(typeof 100);     // number

// Bitwise Operators
console.log("Bitwise:");
console.log(5 & 1); 
console.log(5 | 1); 
console.log(5 ^ 1); 
console.log(~5);    
console.log(5 << 1); 
console.log(5 >> 1); 

// Special Operators
console.log("Special:");
let obj = {name: "Gautam"};
console.log("name" in obj); // true

let arr = [1,2,3];
console.log(arr instanceof Array); // true