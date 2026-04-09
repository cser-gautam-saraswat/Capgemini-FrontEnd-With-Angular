let age: number = 22;
let userName: string = "Gautam";
let isActive: boolean = true;
let nothing: null = null;
let notDefined: undefined = undefined;

let numbers: number[] = [1, 2, 3];
let person: [string, number] = ["Gautam", 22];

let user: { name: string; age: number } = {
  name: "Gautam",
  age: 22
};

let value: any = 10;
value = "hello";

let data: unknown = "test";

function greet(): void {
  console.log("Hello");
}

function error(): never {
  throw new Error("Error");
}

let id: number | string = 101;

enum Role {
  Admin,
  User
}

let role: Role = Role.Admin;

type User = {
  name: string;
  age: number;
};

let u1: User = {
  name: "Gautam",
  age: 22
};

console.log(age, userName, isActive, numbers, person, user, value, data, id, role, u1);