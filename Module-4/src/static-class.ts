class Add {
  static add: number = 0;

  static Increment() {
    return (Add.add = Add.add + 1);
  }
  static Decrement() {
    return (Add.add = Add.add - 1);
  }
}
console.log(Add.Increment());
console.log(Add.Increment());
console.log(Add.Decrement());
