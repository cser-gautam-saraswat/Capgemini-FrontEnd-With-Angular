// Global Scope
let a = 10;

function test() {
  console.log(a); // 10
}

test();
console.log(a); // 10


//Function Scope
function demo() {
  let x = 20;
  console.log(x); // 20
}

demo();
// console.log(x); // Error

// Block Scope (let & const)

if (true) {
  let y = 30;
  const z = 40;
  console.log(y, z); // 30 40
}

// console.log(y); // ❌ Error
// console.log(z); // ❌ Error


// Special Case: var (No Block Scope)
if (true) {
  var v = 50;
}

console.log(v); // 50 😲