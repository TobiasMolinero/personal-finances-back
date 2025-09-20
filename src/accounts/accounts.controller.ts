import { AccountsService } from './accounts.service';
import { CreateAccountDto } from './dto/create-account';
import { Controller, Get, Param, Post, Body, Patch, ParseIntPipe } from '@nestjs/common';
import { UpdateAccountDto } from './dto/update-account';

@Controller('accounts')
export class AccountsController {
    
    constructor(private readonly accountsService: AccountsService) {}

    @Get()
    getAll() {
        return this.accountsService.getAll();
    }

    @Get(':id')
    getOne(@Param('id', ParseIntPipe) id: number) {
        return this.accountsService.getOne(id);
    }

    @Post()
    create(@Body() account: CreateAccountDto) {
        return this.accountsService.create(account);
    }

    @Patch(':id')
    edit(@Param('id', ParseIntPipe) id: number, @Body() account: UpdateAccountDto) {
        return this.accountsService.edit(id, {...account});
    }
}
