import { Injectable } from '@nestjs/common';
import { CreateAccountDto } from './dto/create-account';
import { UpdateAccountDto } from './dto/update-account';

@Injectable()
export class AccountsService {

    private accounts = [
        {id: 1, name: "Efectivo", balance: 10000},
        {id: 2, name: "Mercado pago", balance: 15000},
        {id: 3, name: "Banco Macro", balance: 5000}
    ];

    getAll() {
        return this.accounts;
    }

    getOne(id: number) {
        return this.accounts.find(account => account.id === id);
    }

    create(account: CreateAccountDto) {
        const newAccount = {
            id: this.accounts.length + 1,
            name: account.name,
            balance: account.balance
        };

        this.accounts.push({
            ...account,
            id: this.accounts.length + 1 
        });
        return newAccount;
    }

    edit(id: number, account: UpdateAccountDto) {
        const accountIndex = this.accounts.findIndex(account => account.id === id);

        if(accountIndex === -1) return null;

        if(account.name) this.accounts[accountIndex].name = account.name;

        if(account.balance) this.accounts[accountIndex].balance = account.balance;

        return this.accounts[accountIndex];
    }
}
