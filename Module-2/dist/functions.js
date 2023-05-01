"use strict";
// normal function types declare
function addNormal(x, y) {
    return x + y;
}
// arrow function types declare
const addArrow = (x, y) => x + y;
// array methods declare
const arr = [1, 2, 3, 4, 5];
const newArr = arr.map((num) => num * num);
// console.log(newArr);
// objects functions types declare
const person = {
    name: "John",
    role: "Developer",
    balance: 5,
    getBalance(money) {
        return this.balance + money;
    },
};
// person.getBalance("5"); --- error message: Argument of type 'string' is not assignable to parameter of type 'number'. ----
person.getBalance(5);
// -----------------------------------
// default parameters
function addNormal2(x, y = 10) {
    // always last argument to set default parameters
    return x + y;
}
addNormal2(5);
// spread operator
const myMaleFr = ["Ariful", "Sabbir"];
const newFr = ["Nur", "Rofiqul"];
myMaleFr.push(...newFr);
// console.log(myMaleFr);
// rest operators
const greetFr = (...friends) => {
    friends.forEach((fr) => console.log(`Hi ${fr}, How are you?`));
};
// greetFr("Kashim", "Ariful", "Torikul", "Mahbub", "Sumaya");
// Array and object destructuring operators
const myArray = [5, 2, 5, 1, 3];
//index:----0---------1---,...
const [bestNumber, secondary] = myArray;
// console.log(bestNumber, secondary);
// object
const myFrObj = {
    nameFr: "Kashim",
    country: "Bangladesh",
};
// ------------- name ellis's
const { nameFr, country: city } = myFrObj;
// console.log(nameFr, city);
