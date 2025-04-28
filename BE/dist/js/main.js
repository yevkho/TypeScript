"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
function add(a, b) {
    return a + b;
}
const logMsg = (message) => console.log(message);
logMsg("Hello!");
let subtract = function (c, d) {
    return c - d;
};
// interface mathFunction {
//   (a: number, b: number): number;
// }
let multiply = function (e, f) {
    return e * f;
};
//
const addAll = (a, b, c) => {
    if (typeof c !== "undefined") {
        return a + b + c;
    }
    return a + b;
};
const sumAll = (a, b, c = 0) => {
    return a + b + c;
};
// Rest Parameters
const total = (...nums) => {
    return nums.reduce((prev, curr) => prev + curr);
};
logMsg(total(1, 2, 3, 4, 5, 6, 7));
let a = "Hello";
let b = a;
let c = a;
let d = "world";
let e = "world";
const addOrConcat = (a, b, c) => {
    if (c === "add")
        return a + b;
    return "" + a + b;
};
let myVal = addOrConcat(2, 2, "concat");
// ojo!
let nextVal = addOrConcat(2, 2, "concat");
10;
// The Dom
const img = document.querySelector("img");
const myImg = document.getElementById("#img");
const nextImg = document.getElementById("#img");
// interface TransactionObj {
//   readonly [index: string]: number;
// }
const todaysTransactions = {
    Pizza: -10,
    Books: -5,
    Job: 50,
    Dave: 42,
};
console.log(todaysTransactions.Pizza);
console.log(todaysTransactions["Pizza"]);
let prop = "Pizza";
console.log(todaysTransactions[prop]);
const student = {
    name: "Doug",
    GPA: 3.5,
    classes: [100, 200],
};
// console.log(student.test);
for (const key in student) {
    console.log(`${key}: ${student[key]}`); // creates (and constrains to) union type of keys of Student (string literals)
}
//
Object.keys(student).map((key) => {
    console.log(student[key]);
});
//
const logStudentKey = (student, key) => {
    console.log(`Student ${key}: ${student[key]}`);
};
logStudentKey(student, "GPA");
logStudentKey(student, "name");
const monthlyIncomes = {
    salary: 500,
    bonus: 100,
    sidehustle: 250,
};
/// LESSON & - Generics
const stringEcho = (arg) => arg;
const echo = (arg) => arg;
const isObj = (arg) => {
    return typeof arg === "object" && !Array.isArray(arg) && arg !== null;
};
console.log(isObj({ name: "John" }));
//
const isTrue = (arg) => {
    if (Array.isArray(arg) && !arg.length) {
        return { arg, is: false };
    }
    if (isObj(arg) && !Object.keys(arg).length) {
        return { arg, is: false };
    }
    return { arg, is: !!arg };
};
console.log(isTrue({ name: "DAve" }));
const checkBoolValue = (arg) => {
    if (Array.isArray(arg) && !arg.length) {
        return { value: arg, is: false };
    }
    if (isObj(arg) && !Object.keys(arg).length) {
        return { value: arg, is: false };
    }
    return { value: arg, is: !!arg };
};
const processUser = (user) => {
    //
    return user;
};
console.log(processUser({ id: 1, name: "Dave" }));
// console.log(processUser({ name: "Dave" }));
//
const getUsersProperty = (users, key) => {
    return users.map((user) => user[key]);
};
const finalGrades = {
    Sarah: "B",
    Kelly: "D",
};
const gradeData = {
    Sarah: { assign1: 85, assign2: 83 },
    Kelly: { assign1: 67, assign2: 16 },
};
// Pick and Omit (on objects)
// Exclude and Extract (on union types)
// Nonnullable
// ReturnType
// type newAssign = { title: string; points: number };
// const createNewAssign = (title: string, points: number): newAssign => {
//   return { title, points };
// };
const createNewAssign = (title, points) => {
    return { title, points };
};
const tsAssign = createNewAssign("Utility Types", 100);
console.log(tsAssign);
const assignArgs = ["Generics", 100];
const tsAssign2 = createNewAssign(...assignArgs);
console.log(tsAssign2);
const fetchUsers = () => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield fetch("https://jsonplaceholder.typiconde.com/users")
        .then((res) => {
        return res.json();
    })
        .catch((err) => {
        if (err instanceof Error)
            console.log(err.message);
    });
    return data;
});
fetchUsers().then((users) => console.log(users));
