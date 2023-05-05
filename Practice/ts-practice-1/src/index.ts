function Log<T>(message: T): void {
  console.log(message);
}

const username: string = "Al Amin";
Log(username);

// number
const phone: number = 251;
Log(typeof phone);

// boolean
const isMarried: boolean = true;

Log(isMarried);

// null
const isNull: null = null;
Log(isNull);

// undefined
const isUndefined: undefined = undefined;
Log(isUndefined);

// tuple
const cupule: [string, string] = ["Al Amin", "Moriom"];
Log(cupule);

// array
const arr: number[] = [2, 5, 36, 8];
Log(arr);
const obj: string[] = ["Al Amin", "Moriom", "Foysal Mahbub"];
Log(obj);

// Object type
type UserType = {
  name: string;
  age?: number;
};

const User: UserType = {
  name: "John",
};

console.log(User);
