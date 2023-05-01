// normal function types declare

function addNormal(x: number, y: number): number {
  return x + y;
}
// arrow function types declare
const addArrow = (x: number, y: number): number => x + y;

// array methods declare
const arr = [1, 2, 3, 4, 5];

const newArr = arr.map((num: number): number => num * num);
// console.log(newArr);

// objects functions types declare

const person: {
  name: string;
  role: string;
  balance: number;
  getBalance(money: number): number;
} = {
  name: "John",
  role: "Developer",
  balance: 5,
  getBalance(money: number): number {
    return this.balance + money;
  },
};

// person.getBalance("5"); --- error message: Argument of type 'string' is not assignable to parameter of type 'number'. ----

person.getBalance(5);
