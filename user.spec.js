const User = require("./user");

describe("User model", () => {
  it("can deposit money", () => {
    const user = new User();
    user.deposit(1000);
    expect(user.balance).toBe(1000);
  });

  it("can withdraw money", () => {
    const user = new User();
    user.deposit(1000);
    user.withdraw(100);
    expect(user.balance).toBe(900);
  });

  it("can print account statement", () => {
    const user = new User();
    user.deposit(1000);
    user.withdraw(100);
    expect(user.print()).toEqual(
      "date || credit || debit || balance\n" +
        "25/10/2022 || 1000 ||  || 1000\n" +
        "25/10/2022 ||  || 100 || 900\n"
    );
  });
});
