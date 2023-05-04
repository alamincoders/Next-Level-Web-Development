// common

class CompanyPerson {
  name: string;
  age: number;
  role: string;

  constructor(name: string, age: number, role: string) {
    this.name = name;
    this.age = age;
    this.role = role;
  }

  makeSleep(hours: number): string {
    return `This ${this.name} is sleeping on ${hours} hours.`;
  }
}

// employees

class Employee extends CompanyPerson {
  constructor(name: string, age: number, role: string) {
    super(name, age, role);
  }
}
const employee1 = new Employee("Al Amin", 20, "Frontend Web Developer");
// employee1.

// boos
class Boss extends CompanyPerson {
  designation: string;

  constructor(name: string, age: number, role: string, designation: string) {
    super(name, age, role);
    this.designation = designation;
  }
  getBossAddress(address: string): string {
    return `My Boss address is ${address}`;
  }
}

const boss1 = new Boss("Nur Alom", 25, "CEO of Nur Soft", "Lead Web Team");

// boss1.
