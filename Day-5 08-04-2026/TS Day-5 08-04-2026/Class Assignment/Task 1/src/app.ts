type User = {
  name: string;
  age: number;
};

let u1: User = {
  name: "Gautam",
  age: 22
};

let person: [number, string, User] = [22, "Gautam", u1];

console.log(person);