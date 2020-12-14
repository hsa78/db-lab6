import { Body, Controller, Get, ParseIntPipe, Post, Put, Header } from '@nestjs/common';
import { UserServices } from './user.service';
import CreateUserDto from './dto/create-user.dto';
import {ApiResponse,ApiBearerAuth, ApiQuery } from '@nestjs/swagger';
import { Public } from 'src/auth/public';

@Controller('users')
export class UserController {
  constructor(private readonly usersServices: UserServices) {}

//'postUser()' will handle the creating of new User
  @Post('post')
  @ApiResponse({ status:200, description:'create new user' }) 
  @Header('Content-Type', 'application/json') 
  @Public()
  postUser( @Body() user: CreateUserDto) {
    return this.usersServices.insert(user);
  }
// 'getAll()' returns the list of all the existing users in the database
  @Get()
  @ApiResponse({ status:200, description:'show all users' }) 
  getAll() {
    return this.usersServices.getAllUsers();
  }

//'getBooks()' return all the books which are associated with the user 
// provided through 'userID' by the request  
  @Get('books')
  @ApiResponse({ status:200, description:'return all the books which are associated with the user' }) 
  @ApiQuery({
    name:'userID', 
    required:true, 
    type:Number, 
  })  
  getBooks( @Body('userID', ParseIntPipe) userID: number ) {
    return this.usersServices.getBooksOfUser(userID);
  }
}