import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import UserEntity from './db/user.entity';
import { AuthService } from './auth/auth.service';
import { JwtService, JwtModule } from '@nestjs/jwt';



@Module({
  imports: [UserModule ,
        TypeOrmModule.forFeature(
        [UserEntity],
        ),

        TypeOrmModule.forRoot({
          type: "postgres",     
          host: "localhost",     
          port: 5432,     
          username: "postgres",
          password: "hena1378",     
          database: "todos",     
          entities: [
            "dist/db/**/*.js"
          ],     
          synchronize: true 
        }),

        AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
