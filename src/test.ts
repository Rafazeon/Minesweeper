let a: number;
let b: boolean;
let c: string;

let d: Array<string>;

type Pms = 'admin' | 'user' | 'manager'

type TuplePermission = [Pms, Pms]

// Generic Params
type BasicUser<A = boolean, P = TuplePermission> = {
  name: string;
  surname: string;
  age: number;
  isAdmin: A;
  permissions?: P;
}

type AdvancedUser = {
    account: number;
}

// Intersection Params
type FullUser<A = boolean, P = string[]> = BasicUser<A, P> & AdvancedUser

const user: FullUser<boolean, TuplePermission> = {
  name: "Rafael",
  surname: "Oliveira",
  age: 30,
  isAdmin: true,
  account: 100,
  permissions: ['admin', 'user']
};

// Generic Params
const usersArray: FullUser[] = [user,user,user]

function getFirst<T>(arr: T[]): T {
    return arr[0];
}

getFirst<FullUser>(usersArray);

type MathFunc = (a: number, b: number) => number;

const mul: MathFunc = (a, b) => a * b;

const add: MathFunc = (a, b) => a + b;
