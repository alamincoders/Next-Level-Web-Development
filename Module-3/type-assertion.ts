let result: any;

result = "10";

const getLength = (result as string).length; // 1st way to type assertion
const getLength2 = <string>result.length; // 2nd way
// console.log(getLength2);

function sendMessage(param: string | number): string | number | undefined {
  if (typeof param === "string") {
    return `We have ${param}`;
  }
  if (typeof param === "number") {
    return param;
  }
}

// const getMessage = sendMessage("10") as string; 
const getMessage = <string>sendMessage("10");
// const getMessage2 = sendMessage(10) as number;
const getMessage2 = <number>sendMessage(10);

type CustomMessage = {
  message: string;
};

try {
} catch (err) {
  console.log((err as CustomMessage).message);
}
