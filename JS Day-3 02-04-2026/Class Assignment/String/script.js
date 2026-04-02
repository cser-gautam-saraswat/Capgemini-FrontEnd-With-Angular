// Creating Strings
let str1 = "Hello";
let str2 = 'World';
let name = "Gautam";

// String Interpolation
console.log(`Hi ${name}`);

// Length
console.log(str1.length);

// Access Characters
console.log(str1[0]);
console.log(str1.charAt(1));

// Case Conversion
let text = "JavaScript";
console.log(text.toUpperCase());
console.log(text.toLowerCase());

// Slice & Substring
console.log(text.slice(0, 4));
console.log(text.substring(0, 4));

// Replace
console.log(text.replace("Java", "Type"));

// Includes, StartsWith, EndsWith
console.log(text.includes("Script"));
console.log(text.startsWith("Java"));
console.log(text.endsWith("Script"));

// Trim
let space = "   Hello   ";
console.log(space.trim());

// Split
let sentence = "a,b,c";
console.log(sentence.split(","));

// Repeat
console.log("Hi ".repeat(3));

// Immutable Check
let str = "Hello";
str[0] = "Y";
console.log(str);

// Convert to String
let num = 100;
console.log(String(num));
console.log(num.toString());