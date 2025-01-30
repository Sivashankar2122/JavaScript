class BankAcount{
    #balance;//private field
    
    constructor(inizialBalance){
        this.#balance = inizialBalance;
    }

    deposit(amount){
        if(amount > 0){
            this.#balance += amount;
            console.log(`Deposited: ${amount}. New balance: ${this.#balance}`);
        }else{
            console.log('Invalid amount');
        }
    }

    withdraw(amount){
        if(amount > 0 && this.#balance >= amount){
            this.#balance -= amount;
            console.log(`Withdrawn: ${amount}. New balance: ${this.#balance}`);
        }else{
            console.log('Insufficient funds or Invalid amount');
        }
    }

    getBalance(){
        return this.#balance;
    }
};


let savings = new BankAcount(1000);
 savings.deposit(1000);
savings.withdraw(500);
savings.withdraw(10000);
console.log(savings.getBalance());
