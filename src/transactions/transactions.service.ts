import { Injectable } from '@nestjs/common';
import { CreateTransactionDto } from './dto/create-transaction.dto';
import { UpdateTransactionDto } from './dto/update-transaction.dto';

@Injectable()
export class TransactionsService {

  private transactions = [
    {id: 1, id_account: 1, account: 'Efectivo', id_category: 1, category: 'Comida', amount: 1000, date: new Date('2025-09-20'), description: ''},
    {id: 2, id_account: 1, account: 'Efectivo', id_category: 2, category: 'Transporte', amount: 800, date: new Date('2025-09-20'), description: 'Pago de estacionamiento'},
    {id: 3, id_account: 2, account: 'Mercado pago', id_category: 3, category: 'Salario', amount: 10000, date: new Date('2025-09-20'), description: ''}
  ];

  getAll() {
    return this.transactions;
  }

  getOne(id: number) {
    return this.transactions.find(transaction => transaction.id === id);
  }

  create(transaction: CreateTransactionDto) {
    const newTransaction = {
      id: this.transactions.length + 1,
      id_account: transaction.id_account,
      account: 'cuenta',
      id_category: transaction.id_category,
      category: 'categoria',
      amount: transaction.amount,
      date: transaction.date,
      description: transaction.description || ''
    }

    this.transactions.push(newTransaction)

    return newTransaction;
  }

  update(id: number, transaction: UpdateTransactionDto) {
    const transactionIndex = this.transactions.findIndex(transaction => transaction.id === id);

    if(transactionIndex === -1) return 'No se encontro la transacción';

    if(transaction.id_account) this.transactions[transactionIndex].id_account = transaction.id_account;
    if(transaction.id_category) this.transactions[transactionIndex].id_category = transaction.id_category;
    if(transaction.amount) this.transactions[transactionIndex].amount = transaction.amount;
    if(transaction.date) this.transactions[transactionIndex].date = transaction.date;
    if(transaction.description) this.transactions[transactionIndex].description = transaction.description;

    return this.transactions[transactionIndex];
  }

  remove(id: number) {
    const transactionIndex = this.transactions.findIndex(transaction => transaction.id === id);

    if(transactionIndex === -1) return 'No se encontro la transacción';

    this.transactions.splice(transactionIndex, 1);

    return 'Transacción eliminada correctamente';
  }
}
