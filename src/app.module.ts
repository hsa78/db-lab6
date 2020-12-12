import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
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
          type: "sqlite",
          database: "./database.sqlite",
          synchronize: true,
          entities: [
            "dist/db/**/*.js"
          ],
          cli: {
            "entitiesDir": "src/db"
          }
        }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
