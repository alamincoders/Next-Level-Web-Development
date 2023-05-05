class PersonPoly {
  takeNap() {
    console.log("I am sleeping 8 hours per day");
  }
}

class Student extends PersonPoly {
  takeNap(): void {
    console.log("I am sleeping 10 hours per day");
  }
}

class Developer extends PersonPoly {
  takeNap(): void {
    console.log("I am sleeping 5 hours per day");
  }
}
class NightGuard extends PersonPoly {
  takeNap(): void {
    console.log("I am sleeping 3 hours per day");
  }
}

function getNap(param: PersonPoly) {
  param.takeNap();
}

const personpoly1 = new PersonPoly();
const personpoly2 = new Student();
const personpoly3 = new Developer();
const personpoly4 = new NightGuard();

/* getNap(personpoly1);
getNap(personpoly2);
getNap(personpoly3);
getNap(personpoly4); */

// another example

class Shape {
  getShape(): number {
    return 0;
  }
}

class Circle extends Shape {
  constructor(public radius: number) {
    super();
  }
  getShape(): number {
    return Math.PI * this.radius * this.radius;
  }
}

class Rectangle extends Shape {
  constructor(public width: number, public height: number) {
    super();
  }
  getShape(): number {
    return this.width + this.height;
  }
}

function makeShape(param: Shape): void {
  console.log(param.getShape());
}

/* makeShape(new Shape());
makeShape(new Circle(10));
makeShape(new Rectangle(20, 56));
 */
