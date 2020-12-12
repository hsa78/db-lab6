import { Body, Controller, Get, ParseIntPipe, Post, Put, Header } from '@nestjs/common';
import {BooksService} from './books.service';
import CreateBookDto from './dto/create-book.dto';
import {ApiResponse,ApiBearerAuth, ApiQuery } from '@nestjs/swagger';


@Controller('books')
export class BooksController {
    constructor(private readonly booksServices: BooksService) {}

    //'postBook()' will handle the creating of new Book
      @Post('post')
      @ApiResponse({ status:200, description:'create new book' }) 
      @Header('Content-Type', 'application/json') 
      postBook( @Body() book: CreateBookDto) {
        return this.booksServices.insert(book);
      }
    // 'getAll()' returns the list of all the existing books in the database
      @Get()
      @ApiResponse({ status:200}) 
      getAll() {
        return this.booksServices.getAllBooks();
      }
}
