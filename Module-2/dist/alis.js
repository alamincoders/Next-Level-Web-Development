"use strict";
const crush1 = {
    c_name: "Moriom",
    age: 23,
    address: {
        village: "Adampur",
    },
};
const crush2 = {
    c_name: "Moriom",
    address: {
        village: "Adampur",
    },
};
const crush3 = {
    c_name: "Moriom",
    age: 23,
    address: {},
};
const crush4 = {
    c_name: "Moriom",
    address: {
        village: "Adampur",
    },
};
const isMarried = false;
const course = "Next Level";
const calculate = (x, y, operator) => {
    return operator(x, y);
};
calculate(5, 7, (x, y) => x + y);
calculate(5, 7, (x, y) => x - y);
calculate(5, 7, (x, y) => x * y);
calculate(5, 7, (x, y) => x / y);
