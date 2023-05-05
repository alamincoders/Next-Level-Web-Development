class BankAccount {
  constructor(readonly name: string, private balance: number, public relationWith: string) {}
  getBalance() {
    console.log(`${this.name} Balance: ${this.balance}`);
  }
  addBalance(a: number): number {
    const newBalance: number = (this.balance = this.balance + a);
    return newBalance;
  }
}

class NewPersonAccount extends BankAccount {
  test() {
    // this.balance     --- protected used by get Balance
  }
}

const moriomBalance = new BankAccount("Moriom Akter Merry", 500, "Al Amin");

moriomBalance.addBalance(800);
moriomBalance.getBalance();
console.log(`${moriomBalance.name} is relation with ${moriomBalance.relationWith}`);
