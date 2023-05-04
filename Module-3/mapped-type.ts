type PersonType = {
  name: string;
  age: number;
};

type NewPersonType = { [P in keyof PersonType]: PersonType[P] };
