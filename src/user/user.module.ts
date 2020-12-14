import { Module } from '@nestjs/common';
import { UserServices } from './user.service';
import { UserController } from './user.controller';
import { APP_GUARD } from '@nestjs/core';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
@Module({
  imports: [],
  controllers: [UserController],
  providers: [UserServices,
    {
      provide: APP_GUARD,
      useClass: JwtAuthGuard,
    },],
  exports: [UserServices],
})
export class UserModule {}