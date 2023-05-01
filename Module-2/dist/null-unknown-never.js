"use strict";
// null type
const GiveFridayParty = (fr) => {
    if (fr === null) {
        console.log("Please give today party any one");
    }
    else {
        console.log(`Today Party money provided by ${fr}`);
    }
};
// GiveFridayParty(null);
// unknown type
const getSeconds = (hour) => {
    if (typeof hour === "number") {
        const seconds = hour * 60 * 60;
        console.log(seconds);
    }
    if (typeof hour === "string") {
        const [seconds, text] = hour.split(" ");
        const convertedSecond = parseFloat(seconds) * 60 * 60;
        console.log(convertedSecond);
    }
    else {
        console.log("Invalid type ");
    }
};
// getSeconds(15);
// getSeconds("8 Hour");
// getSeconds(true);
// never types
const throwError = (message) => {
    throw new Error(message);
};
// throwError("Error is mortal");
