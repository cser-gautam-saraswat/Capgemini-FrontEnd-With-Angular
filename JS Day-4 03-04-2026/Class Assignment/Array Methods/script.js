let arr = [10, 25, 35, 68];

arr.forEach(function(x) {
  console.log(x);
});

let mapArr = arr.map(function(x) {
  return x * 2;
});
console.log(mapArr);

let filterArr = arr.filter(function(x) {
  return x > 20;
});
console.log(filterArr);

let sum = arr.reduce(function(acc, x) {
  return acc + x;
}, 0);
console.log(sum);