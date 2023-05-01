type CrushType = {
  c_name: string;
  age?: number;
  address: {
    village?: string;
  };
};

const crush1: CrushType = {
  c_name: "Moriom",
  age: 23,
  address: {
    village: "Adampur",
  },
};
const crush2: CrushType = {
  c_name: "Moriom",
  address: {
    village: "Adampur",
  },
};
const crush3: CrushType = {
  c_name: "Moriom",
  age: 23,
  address: {},
};
const crush4: CrushType = {
  c_name: "Moriom",
  address: {
    village: "Adampur",
  },
};

//
type CrushMarried = boolean;

const isMarried: CrushMarried = false;

//

type CourseType = string;

const course: CourseType = "Next Level";

// calculate any number any operation

type OperationType = (num1: number, num2: number) => number;

const calculate = (x: number, y: number, operator: OperationType) => {
  return operator(x, y);
};

calculate(5, 7, (x, y) => x + y);
calculate(5, 7, (x, y) => x - y);
calculate(5, 7, (x, y) => x * y);
calculate(5, 7, (x, y) => x / y);
