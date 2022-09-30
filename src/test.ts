let a: number;
let b: boolean;
let c: string;

let d: Array<string>;

type Permissions = 'admin' | 'user' | 'manager'

// Generic Params
type BasicUser<A = boolean, P = string[]> = {
  name: string;
  surname: string;
  age: number;
  isAdmin: A;
  permissions?: P[];
}

type AdvancedUser = {
    account: number;
}

// Intersection Params
type FullUser<A = boolean, P = string[]> = BasicUser<A, P> & AdvancedUser

const user: FullUser<boolean, Permissions> = {
  name: "Rafael",
  surname: "Oliveira",
  age: 30,
  isAdmin: true,
  account: 100,
  permissions: ['admin', 'user', 'manager']
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
