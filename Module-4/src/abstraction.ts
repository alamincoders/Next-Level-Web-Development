// interface

interface IGadget {
  getGadget(): void;
  addGadget(): void;
  removeGadget(): void;
}

class Gadget implements IGadget {
  constructor(public name: string) {}
  getGadget(): void {
    console.log("I am getting gadget");
  }
  addGadget(): void {
    console.log("I am adding gadget");
  }
  removeGadget(): void {
    console.log("I am removing gadget");
  }
}

const gadget1 = new Gadget("Iphone");
// gadget1.

// abstract class

abstract class Shop {
  constructor(public name: string) {}
  abstract getGadget2(): void;
  abstract removeGadget2(): void;
  addGadget2(): void {
    console.log("I am adding gadget");
  }
}

//

class Gadget2 extends Shop {
  constructor(name: string) {
    super(name);
  }
  getGadget2(): void {
    console.log("I am getting gadget");
  }
  removeGadget2(): void {
    console.log("I am removing gadget");
  }
}

const gadget2 = new Gadget2("Laptop");
