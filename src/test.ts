let a: number;
let b: boolean;
let c: string;

let d: Array<string>;

// Generic Params
interface BasicUser<A = boolean> {
  name: string;
  surname: string;
  age: number;
  isAdmin: A;
  permissions?: string[];
}

const user: BasicUser = {
  name: "Rafael",
  surname: "Oliveira",
  age: 30,
  isAdmin: true,
};

const user2: BasicUser<number> = {
  name: "Evan",
  surname: "Noah",
  age: 31,
  isAdmin: 1,
  permissions: ['manager', 'operator', 'instructor']
};

// Generic Params
const usersArray: BasicUser[] = [user,user,user]

function getFirst<T>(arr: T[]): T {
    return arr[0];
}

getFirst<BasicUser>(usersArray);

type MathFunc = (a: number, b: number) => number;

const mul: MathFunc = (a, b) => a * b;

const add: MathFunc = (a, b) => a + b;
