import { Body, Controller, Get, ParseIntPipe, Post, Put, Header, Delete } from '@nestjs/common';
import {BooksService} from './books.service';
import CreateBookDto from './dto/create-book.dto';
import {ApiResponse,ApiBearerAuth, ApiQuery } from '@nestjs/swagger';
import BookDto from './dto/book.dto';


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

      @Put('update')
      @ApiResponse({ status:200, description:'update existing book' }) 
      async update(@Body() book: BookDto) {
        return this.booksServices.update(book);
      }
      
      @Delete('delete')
      @ApiResponse({ status:200, description:'delete book' }) 
      @Header('Content-Type', 'application/json')
      async delete(@Body() id: number) {
        return this.booksServices.delete(id);
      }
}
