let monthlyInterest2 = 0
class Account2 {
    protected accountNumber:string
    protected balance:number
    constructor(accountNumber:string,balance:number){
        this.accountNumber = accountNumber
        this.balance = balance
    }
    deposit():void{
        this.balance += 1000000
    }
    withdraw():void{
        if(this.balance < 100){
            console.log("Số dư tài khoản của bạn không đủ để rút")
        }else{
        this.balance -= 1000000
        }
    }
    showBalance(){
        console.log("Số dư: ",this.balance);
    }
}
class SavingsAccount2 extends(Account2){
    private interestRate:number
    constructor(accountNumber:string,balance:number,interestRate:number){
        super(accountNumber,balance)
        this.accountNumber = accountNumber
        this.balance = balance
        this.interestRate = interestRate
    }
    calculateInterest():void{
        monthlyInterest = this.balance / 100 * this.interestRate 
    }
}
class CheckingAccount extends(Account2){
    private overdraftLimit:number
    constructor(accountNumber:string,balance:number,overdraftLimit:number){
        super(accountNumber,balance)
        this.accountNumber = accountNumber
        this.balance = balance
        this.overdraftLimit = overdraftLimit  
    } 
    withdraw():void{
        if(this.balance + this.overdraftLimit < 1000000){
            console.log("Số tiền vượt quá hạn mức cho phép")
        }else{
        this.balance -= 1000000
        }
    }   
}
let checkingAccount1 = new CheckingAccount("02134",5000000,1000000)
checkingAccount1.withdraw();
checkingAccount1.withdraw();
checkingAccount1.withdraw();
checkingAccount1.withdraw();
checkingAccount1.withdraw();
checkingAccount1.withdraw();
checkingAccount1.withdraw();
checkingAccount1.showBalance();


