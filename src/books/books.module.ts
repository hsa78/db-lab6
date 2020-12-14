import { Module } from '@nestjs/common';
import { BooksService } from './books.service';
import {BooksController} from './books.controller';
import { APP_GUARD } from '@nestjs/core';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
@Module({
  imports: [],
  controllers: [BooksController],
  providers: [BooksService,
    {
      provide: APP_GUARD,
      useClass: JwtAuthGuard,
    },
  ],
})
export default class BooksModule {}