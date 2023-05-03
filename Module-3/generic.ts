interface IUser {
  name: string;
  age: number;
}

function getObj<T>(obj: T) {
  return obj;
}

const user: IUser = {
  name: "Al Amin",
  age: 20,
};

const result = getObj(user);
