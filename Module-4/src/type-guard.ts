// keyof guard

type AddType = string | number;

function add(x: AddType, y: AddType): void {
  if (typeof x === "number" && typeof y === "number") {
    console.log(x + y);
  } else if (typeof x === "string" && typeof y === "string") {
    console.log(parseFloat(x) + parseFloat(y));
  } else {
    console.log("Invalid");
  }
}

/* add(5, 6);
add(5, 7);
add("5", "7.15");
add("50", 5); */

// in guard;
type EmployeeType = {
  name: string;
};

type BossType = {
  name: string;
  role: string;
  experience: number;
};

const employee_1: EmployeeType = { name: "Employee" };
const boss_1: BossType = { name: "Employee", role: "Hiring Manager", experience: 5 };

function check_employee(user: EmployeeType | BossType): string {
  if ("role" in user) {
    return `Dear, ${user.role}`;
  } else {
    return `I am Web instructor and my name is ${user.name}`;
  }
}

/* console.log(check_employee(employee_1));
console.log(check_employee(boss_1)); */

// instanceof guard

class Animal {
  constructor(public name: string, public species: string) {}

  makeSound() {
    console.log("I am Default Sound!");
  }
}

class Cow extends Animal {
  constructor(name: string, species: string) {
    super(name, species);
  }
  cowSound() {
    console.log("Hamba Hamba!");
  }
}
class Tiger extends Animal {
  constructor(name: string, species: string) {
    super(name, species);
  }
  tigerSound() {
    console.log("I am tiger sound!");
  }
}

//
function isCow(animal: Animal): animal is Cow {
  return animal instanceof Cow;
}
function isTiger(animal: Animal): animal is Tiger {
  return animal instanceof Tiger;
}

// guard
function getAnimal(animal: Animal) {
  if (isCow(animal)) {
    return animal.cowSound();
  } else if (isTiger(animal)) {
    return animal.tigerSound();
  } else {
    return animal.makeSound();
  }
}

const animal1 = new Cow("Raza", "cow");
const animal2 = new Tiger("Cheyer", "tiger");

getAnimal(animal1);
getAnimal(animal2);
