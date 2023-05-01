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

// -----------------------------------

// default parameters
function addNormal2(x: number, y: number = 10): number {
  // always last argument to set default parameters
  return x + y;
}

addNormal2(5);

// spread operator
const myMaleFr: string[] = ["Ariful", "Sabbir"];
const newFr: string[] = ["Nur", "Rofiqul"];

myMaleFr.push(...newFr);
// console.log(myMaleFr);

// rest operators

const greetFr = (...friends: string[]): void => {
  friends.forEach((fr: string) => console.log(`Hi ${fr}, How are you?`));
};

// greetFr("Kashim", "Ariful", "Torikul", "Mahbub", "Sumaya");

// Array and object destructuring operators

const myArray: number[] = [5, 2, 5, 1, 3];
//index:----0---------1---,...
const [bestNumber, secondary] = myArray;
// console.log(bestNumber, secondary);

// object
const myFrObj: {
  nameFr: string;
  country: string;
} = {
  nameFr: "Kashim",
  country: "Bangladesh",
};
// ------------- name ellis's
const { nameFr, country: city } = myFrObj;
// console.log(nameFr, city);
