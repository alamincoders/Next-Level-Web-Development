"use strict";
// union type
const nobDeveloper = {
    name: "Al Amin",
};
const jnDeveloper = {
    name: "Al Amin",
    experience: 1,
    expertise: "Javascript",
};
const newDeveloper = {
    name: "Al Amin",
    experience: 1,
    expertise: "Javascript",
    //   level: 2,  error
};
//intersection type
const nextLevelDeveloper = {
    name: "Al Amin",
    experience: 1,
    expertise: "Javascript",
    level: 2,
    level3: "junior",
};
//  enum
// enum type not recommended for professional applications
var Level;
(function (Level) {
    Level["Junior"] = "Junior";
    Level["Mid"] = "Mid";
    Level["Senior"] = "Senior";
})(Level || (Level = {}));
const nextLevelDeveloper2 = {
    name: "Al Amin",
    experience: 1,
    expertise: "Javascript",
    level: 2,
    level2: Level.Junior,
};
