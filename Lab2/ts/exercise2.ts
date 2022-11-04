interface IAccount {
    money: number;
    deposit(value: number): void;
};
interface IMyself {
    name: string;
    bankAccount: IAccount;
    hobbies: string[];
};

let bankAccount: IAccount = {
    money: 2000,
    deposit(value: number): void {
        this.money += value;
    }
};
let myself: IMyself = {
    name: "John",
    bankAccount: bankAccount,
    hobbies: ["Violin", "Cooking"]
};

myself.bankAccount.deposit(3000);
console.log(myself);