"use strict";
let monthlyInterest2 = 0;
class Account2 {
    constructor(accountNumber, balance) {
        this.accountNumber = accountNumber;
        this.balance = balance;
    }
    deposit() {
        this.balance += 1000000;
    }
    withdraw() {
        if (this.balance < 100) {
            console.log("Số dư tài khoản của bạn không đủ để rút");
        }
        else {
            this.balance -= 1000000;
        }
    }
    showBalance() {
        console.log("Số dư: ", this.balance);
    }
}
class SavingsAccount2 extends (Account2) {
    constructor(accountNumber, balance, interestRate) {
        super(accountNumber, balance);
        this.accountNumber = accountNumber;
        this.balance = balance;
        this.interestRate = interestRate;
    }
    calculateInterest() {
        monthlyInterest = this.balance / 100 * this.interestRate;
    }
}
class CheckingAccount extends (Account2) {
    constructor(accountNumber, balance, overdraftLimit) {
        super(accountNumber, balance);
        this.accountNumber = accountNumber;
        this.balance = balance;
        this.overdraftLimit = overdraftLimit;
    }
    withdraw() {
        if (this.balance + this.overdraftLimit < 1000000) {
            console.log("Số tiền vượt quá hạn mức cho phép");
        }
        else {
            this.balance -= 1000000;
        }
    }
}
let checkingAccount1 = new CheckingAccount("02134", 5000000, 1000000);
checkingAccount1.withdraw();
checkingAccount1.withdraw();
checkingAccount1.withdraw();
checkingAccount1.withdraw();
checkingAccount1.withdraw();
checkingAccount1.withdraw();
checkingAccount1.withdraw();
checkingAccount1.showBalance();
