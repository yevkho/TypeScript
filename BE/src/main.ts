// LESSON 4
type stringOrNumberArray = (string | number)[];

interface Guitarist {
  name?: string;
  active: boolean;
  albums: stringOrNumberArray;
}

function add(a: number, b: number): number {
  return a + b;
}

const logMsg = (message: any) => console.log(message);

logMsg("Hello!");

let subtract = function (c: number, d: number): number {
  return c - d;
};

type mathFunction = (a: number, b: number) => number;
// interface mathFunction {
//   (a: number, b: number): number;
// }

let multiply: mathFunction = function (e, f) {
  return e * f;
};

//
const addAll = (a: number, b: number, c?: number): number => {
  if (typeof c !== "undefined") {
    return a + b + c;
  }
  return a + b;
};

const sumAll = (a: number, b: number, c: number = 0): number => {
  return a + b + c;
};

// Rest Parameters
const total = (...nums: number[]): number => {
  return nums.reduce((prev, curr) => prev + curr);
};

logMsg(total(1, 2, 3, 4, 5, 6, 7));

/// LESSON 5
type One = string;
type Two = string | number;
type Three = "hello";

let a: One = "Hello";
let b = a as Two;
let c = a as Three;

let d = <One>"world";
let e = <string | number>"world";

const addOrConcat = (
  a: number,
  b: number,
  c: "add" | "concat"
): number | string => {
  if (c === "add") return a + b;
  return "" + a + b;
};

let myVal: string = addOrConcat(2, 2, "concat") as string;
// ojo!
let nextVal: number = addOrConcat(2, 2, "concat") as number;

10 as unknown as string;

// The Dom

const img = document.querySelector("img")!;
const myImg = document.getElementById("#img") as HTMLImageElement;
const nextImg = <HTMLImageElement>document.getElementById("#img");

// img.src;
// myImg.src;

/// LESSON 6 - Index Signatures
interface TransactionObj {
  readonly [index: string]: number;
  Pizza: number;
  Books: number;
  Job: number;
}
// interface TransactionObj {
//   readonly [index: string]: number;
// }

const todaysTransactions: TransactionObj = {
  Pizza: -10,
  Books: -5,
  Job: 50,
  Dave: 42,
};

console.log(todaysTransactions.Pizza);
console.log(todaysTransactions["Pizza"]);

let prop = "Pizza";
console.log(todaysTransactions[prop]);

// todaysTransactions.Pizza = 40

///
interface Student {
  //   [key: string]: string | number | number[] | undefined;
  name: string;
  GPA: number;
  classes?: number[];
}

const student: Student = {
  name: "Doug",
  GPA: 3.5,
  classes: [100, 200],
};

// console.log(student.test);

for (const key in student) {
  console.log(`${key}: ${student[key as keyof Student]}`); // creates (and constrains to) union type of keys of Student (string literals)
}

//
Object.keys(student).map((key) => {
  console.log(student[key as keyof typeof student]);
});

//
const logStudentKey = (student: Student, key: keyof Student): void => {
  console.log(`Student ${key}: ${student[key]}`);
};

logStudentKey(student, "GPA");
logStudentKey(student, "name");

//

// interface Incomes {
//   [key: string]: number;
// }

type Streams = "salary" | "bonus" | "sidehustle";

type Incomes = Record<Streams, number>;

const monthlyIncomes: Incomes = {
  salary: 500,
  bonus: 100,
  sidehustle: 250,
};

/// LESSON & - Generics
const stringEcho = (arg: string): string => arg;

const echo = <T>(arg: T): T => arg;

const isObj = <T>(arg: T): boolean => {
  return typeof arg === "object" && !Array.isArray(arg) && arg !== null;
};

console.log(isObj({ name: "John" }));

//

const isTrue = <T>(arg: T): { arg: T; is: boolean } => {
  if (Array.isArray(arg) && !arg.length) {
    return { arg, is: false };
  }
  if (isObj(arg) && !Object.keys(arg as keyof T).length) {
    return { arg, is: false };
  }

  return { arg, is: !!arg };
};

console.log(isTrue({ name: "DAve" }));

//

interface BoolCheck<T> {
  value: T;
  is: boolean;
}

const checkBoolValue = <T>(arg: T): BoolCheck<T> => {
  if (Array.isArray(arg) && !arg.length) {
    return { value: arg, is: false };
  }
  if (isObj(arg) && !Object.keys(arg as keyof T).length) {
    return { value: arg, is: false };
  }

  return { value: arg, is: !!arg };
};

/// - narrowing of generic type

interface HasID {
  //   [key: string]: any;
  id: number;
}

const processUser = <T extends HasID>(user: T): T => {
  //
  return user;
};

console.log(processUser({ id: 1, name: "Dave" }));
// console.log(processUser({ name: "Dave" }));

//
const getUsersProperty = <T extends HasID, K extends keyof T>(
  users: T[],
  key: K
): T[K][] => {
  return users.map((user) => user[key]);
};

// see video fro passing large user object to the function with several rop level properties, including íd'

// LESSON 9 - Utility Types

// Partial

// Required and Readonly

// Record
type Students = "Sarah" | "Kelly";
type LetterGrades = "A" | "B" | "C" | "D" | "U";

const finalGrades: Record<Students, LetterGrades> = {
  Sarah: "B",
  Kelly: "D",
};

//

interface Grades {
  assign1: number;
  assign2: number;
}

const gradeData: Record<Students, Grades> = {
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

const createNewAssign = (title: string, points: number) => {
  return { title, points };
};

type NewAssign = ReturnType<typeof createNewAssign>;

const tsAssign: NewAssign = createNewAssign("Utility Types", 100);
console.log(tsAssign);

// Parameters
type AssignParams = Parameters<typeof createNewAssign>;

const assignArgs: AssignParams = ["Generics", 100];

const tsAssign2: NewAssign = createNewAssign(...assignArgs);
console.log(tsAssign2);

// Awaited - helps us with the return type of a Promise
interface User {
  id: number;
  name: string;
  username: string;
  email: string;
}

const fetchUsers = async (): Promise<User[]> => {
  const data = await fetch("https://jsonplaceholder.typiconde.com/users")
    .then((res) => {
      return res.json();
    })
    .catch((err) => {
      if (err instanceof Error) console.log(err.message);
    });
  return data;
};

// type FetchUsersReturnType = ReturnType<typeof fetchUsers>;
type FetchUsersReturnType = Awaited<ReturnType<typeof fetchUsers>>;

fetchUsers().then((users) => console.log(users));

/// LESSON 11 - TS Project (Classes)

export interface ListItem {
  id: string;
  item: string;
  checked: boolean;
}

export interface List {
  list: ListItem[];
  load(): void;
  save(): void;
  addItem(itemObj: ListItem): void;
}
