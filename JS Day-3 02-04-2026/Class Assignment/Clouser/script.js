function outer() {
  let a = 10;

  return function inner() {
    console.log(a);
  };
}

let res = outer();
res(); // 10