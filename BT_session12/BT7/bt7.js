"use strict";
let monthlyInterest = 0;
class Account {
    constructor(accountNumber, balance) {
        this.accountNumber = accountNumber;
        this.balance = balance;
    }
    deposit() {
        this.balance += 100;
    }
    withdraw() {
        if (this.balance < 100) {
            console.log("Số dư tài khoản của bạn không đủ để rút");
        }
        else {
            this.balance -= 100;
        }
    }
}
class SavingsAccount extends (Account) {
    constructor(accountNumber, balance, interestRate) {
        super(accountNumber, balance);
        this.accountNumber = accountNumber;
        this.balance = balance;
        this.interestRate = interestRate;
    }
    calculateInterest() {
        monthlyInterest = this.balance / 100 * this.interestRate;
    }
    showBalance() {
        console.log("Số dư: ", this.balance);
    }
}
let savingsAccount1 = new SavingsAccount("0291334", 1200000, 3.5);
savingsAccount1.showBalance();
savingsAccount1.withdraw();
savingsAccount1.calculateInterest();
console.log("lãi xuẩt:", monthlyInterest);
