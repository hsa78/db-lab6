import { Module } from '@nestjs/common';
import GenreServices from './genre.service';
import GenreController from './genre.controller';
import { APP_GUARD } from '@nestjs/core';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
@Module({
  imports: [],
  controllers: [GenreController],
  providers: [GenreServices,
    {
      provide: APP_GUARD,
      useClass: JwtAuthGuard,
    },],
})
export default class GenreModule {}