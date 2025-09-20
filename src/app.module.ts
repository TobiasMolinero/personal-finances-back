import { Module } from '@nestjs/common';
import { AccountsModule } from './accounts/accounts.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    AccountsModule,
    TypeOrmModule.forRoot({
      
    })
  ],
})
export class AppModule {}
