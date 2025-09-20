import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe } from '@nestjs/common';
import { TransactionsService } from './transactions.service';
import { CreateTransactionDto } from './dto/create-transaction.dto';
import { UpdateTransactionDto } from './dto/update-transaction.dto';

@Controller('transactions')
export class TransactionsController {
  constructor(private readonly transactionsService: TransactionsService) {}

  @Get()
  getAll() {
    return this.transactionsService.getAll();
  }

  @Get(':id')
  getOne(@Param('id', ParseIntPipe) id: number) {
    return this.transactionsService.getOne(id);
  }

  @Post()
  create(@Body() transaction: CreateTransactionDto) {
    return this.transactionsService.create(transaction);
  }

  @Patch(':id')
  update(@Param('id', ParseIntPipe) id: number, @Body() transaction: UpdateTransactionDto) {
    return this.transactionsService.update(id, transaction);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.transactionsService.remove(id);
  }
}
