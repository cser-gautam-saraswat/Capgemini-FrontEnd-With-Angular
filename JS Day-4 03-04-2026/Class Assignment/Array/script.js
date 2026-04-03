let arr = [10, 20, 30, 40];

console.log(arr);
console.log(arr[0]);
console.log(arr.length);

arr.push(50);
console.log(arr);

arr.pop();
console.log(arr);

arr.unshift(5);
console.log(arr);

arr.shift();
console.log(arr);

console.log(arr.includes(20));
console.log(arr.indexOf(30));

let newArr = arr.slice(1, 3);
console.log(newArr);

arr.splice(1, 1, 25);
console.log(arr);

let arr2 = [60, 70];
let merged = arr.concat(arr2);
console.log(merged);

arr.reverse();
console.log(arr);

arr.sort();
console.log(arr);



let str = arr.join("-");
console.log(str);

let splitArr = str.split("-");
console.log(splitArr);