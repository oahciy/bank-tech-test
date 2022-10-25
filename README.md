# bank-tech-test
## How to interact via Node
1. Run these two commands in sequence.
``` Javascript
const User = require("./user");
const user = new User();
```
2. Functions
``` Javascript
// to deposit money
user.deposit(amount);
// to withdraw money
user.withdraw(amount);
// to check balance
user.balance;
// to print statement
user.print();
```
