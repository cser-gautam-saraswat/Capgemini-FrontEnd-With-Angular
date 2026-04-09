"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let age = 22;
let userName = "Gautam";
let isActive = true;
let nothing = null;
let notDefined = undefined;
let numbers = [1, 2, 3];
let person = ["Gautam", 22];
let user = {
    name: "Gautam",
    age: 22
};
let value = 10;
value = "hello";
let data = "test";
function greet() {
    console.log("Hello");
}
function error() {
    throw new Error("Error");
}
let id = 101;
var Role;
(function (Role) {
    Role[Role["Admin"] = 0] = "Admin";
    Role[Role["User"] = 1] = "User";
})(Role || (Role = {}));
let role = Role.Admin;
let u1 = {
    name: "Gautam",
    age: 22
};
console.log(age, userName, isActive, numbers, person, user, value, data, id, role, u1);
