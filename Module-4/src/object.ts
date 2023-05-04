class Person {
  // parameters properties   -- public
  /* name: string;
  age: number;
  experience: number;
  expert: string[]; */
  constructor(public name: string, public age: number, public experience: number, public expert: string[]) {}
  isEmployee() {
    console.log(`This is ${this.name}. He is ${this.experience} years of experience. He is expert in ${this.expert}.`);
  }
}

const interviewer = new Person("Al Amin", 20, 2, ["Javascript", "Typescript", "React", "Vue"]);
const interviewer2 = new Person("Moriom", 22, 5, ["Love", "Relationship"]);

interviewer.isEmployee();
interviewer2.isEmployee();
