class User {
  constructor() {
    this.balance = 0;
    this.statement = [];
  }

  deposit(credit) {
    this.balance += credit;
    this.#save(credit, "");
  }

  withdraw(debit) {
    this.balance -= debit;
    this.#save("", debit);
  }

  print() {}

  #save(credit, debit) {
    const today = new Date()
    const statement = {
      date: today.toLocaleDateString("en-GB"),
      credit: credit,
      debit: debit,
      balance: this.balance,
    };
    this.statement.push(statement);
  }
}

module.exports = User;
