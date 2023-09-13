class BankAccount {
  #accountNumber;
  #balance;
  #accountHolderName;

  constructor(accNumber, balance, accHolderName) {
    this.#accountNumber = accNumber;
    this.#balance = balance;
    this.#accountHolderName = accHolderName;
  }

  depositAmount(amount) {
    this.#balance += amount;
  }

  withdrawAmount(amount) {
    this.#balance -= amount;
  }

  getBalanceAmount() {
    return this.#balance;
  }
}

class CheckingAccount extends BankAccount {
  constructor(accNumber, balance, accHolderName) {
    super(accNumber, balance, accHolderName);
  }

  deposit(amount) {
    this.depositAmount(amount);
  }

  withdraw(amount) {
    this.withdrawAmount(amount);
  }
}

class SavingsAccount extends BankAccount {
  constructor(accNumber, balance, accHolderName) {
    super(accNumber, balance, accHolderName);
  }

  deposit(amount) {
    this.depositAmount(amount);
  }

  withdraw(amount) {
    if (amount > this.getBalanceAmount()) {
      return "Withdrawal failed. Insufficient balance.";
    } else this.withdrawAmount(amount);
  }

}

//Creating saving account
const savingsAccount = new SavingsAccount(100, 1000, "John");
console.log(
  "Saving account created. Balance is : " + savingsAccount.getBalanceAmount()
);

//Depositing 4000 in savingsAccount
savingsAccount.deposit(4000);

console.log(
  "Deposited 4000 in savings account. Balance is : " +
    savingsAccount.getBalanceAmount()
);
//Withdrawing 500 from savings account
savingsAccount.withdraw(500);
console.log(
  "Withdrew 500 from savings account. Balance is : " +
    savingsAccount.getBalanceAmount()
);

//Creating checking account
const checkingAccount = new CheckingAccount(101, 5000, "Mary");
//Depositing 2000 in savingsAccount
checkingAccount.deposit(2000);

console.log(
  "Deposited 2000 in checking account. Balance is : " +
    checkingAccount.getBalanceAmount()
);

checkingAccount.withdraw(1500);
console.log(
  "Withdrew 1500 from checking account. Balance is : " +
    checkingAccount.getBalanceAmount()
);
