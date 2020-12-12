import { Body, Controller, Get, ParseIntPipe, Post, Put } from '@nestjs/common';
import {BooksService} from './books.service';
import CreateBookDto from './dto/create-book.dto';


@Controller('books')
export class BooksController {
    constructor(private readonly booksServices: BooksService) {}

    //'postBook()' will handle the creating of new Book
      @Post('post')
      postBook( @Body() book: CreateBookDto) {
        return this.booksServices.insert(book);
      }
    // 'getAll()' returns the list of all the existing books in the database
      @Get()
      getAll() {
        return this.booksServices.getAllBooks();
      }
}
