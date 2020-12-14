import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import UserEntity from './db/user.entity';
import BooksModule from './books/books.module';
import GenreModule from './genre/genre.module';
import BookEntity from './db/book.entity';
import GenreEntity from './db/genre.entity';



@Module({
  imports: [UserModule ,
            BooksModule,
            GenreModule,
        TypeOrmModule.forFeature(
        [UserEntity, BookEntity , GenreEntity],
        ),

        TypeOrmModule.forRoot({
          type: "postgres",     
          host: "localhost",     
          port: 5432,     
          username: "postgres",
          password: "hena1378",     
          database: "bookstore",     
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
