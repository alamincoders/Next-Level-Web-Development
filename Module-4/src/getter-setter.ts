class BkashAccount {
  constructor(readonly name: string, private _balance: number, public relationWith: string) {}
  /*  getBalance() {
    console.log(`${this.name} Balance: ${this._balance}`);
  } */

  //   getters
  get balance() {
    return this._balance;
  }
  /*  addBalance(a: number): number {
    const newBalance: number = (this._balance = this._balance + a);
    return newBalance;
  } */

  // setters
  set deposit(a: number) {
    console.log((this._balance = this._balance + a));
  }
}

class NewAccount extends BkashAccount {
  test() {
    // this.balance     --- protected used by get Balance
  }
}

const alaminBalance = new BkashAccount("Moriom Akter Merry", 500, "Al Amin");

// alaminBalance.addBalance(800);
alaminBalance.deposit = 100;
// alaminBalance.getBalance();
console.log(`${alaminBalance.name} is relation with ${alaminBalance.relationWith}`);
console.log(alaminBalance.balance);
