import { Controller, Post, Header, Body, Delete, Put } from '@nestjs/common';
import { TodoService } from './todo.service';
import { ApiResponse } from '@nestjs/swagger';
import { Public } from 'src/auth/public';
import CreateTaskDto from './dto/create-task.dto';
import CreateCategoryDto from './dto/create-category.dto';
import CreateTagDto from './dto/create-tag.dto';
import UpdateTaskDto from './dto/update-task.dto';
import UpdateItemDto from './dto/update-item.dto';

@Controller('todo')
export class TodoController {
    constructor(private readonly todoService: TodoService) {}

  @Post('task/insert')
  @ApiResponse({ status:200, description:'create new task' }) 
  @Header('Content-Type', 'application/json') 
  @Public()
  postTask( @Body() task: CreateTaskDto) {
    return this.todoService.insertTask(task);
  }

  @Post('category/insert')
  @ApiResponse({ status:200, description:'create new category' }) 
  @Header('Content-Type', 'application/json') 
  @Public()
  postCategory( @Body() category: CreateCategoryDto) {
    return this.todoService.insertCategory(category);
  }

  @Post('tag/insert')
  @ApiResponse({ status:200, description:'create new tag' }) 
  @Header('Content-Type', 'application/json') 
  @Public()
  postTag( @Body() tag: CreateTagDto) {
    return this.todoService.insertTag(tag);
  }

  @Delete('task/delete')
  @ApiResponse({ status:200, description:'delete existing task' }) 
  @Header('Content-Type', 'application/json') 
  @Public()
  deleteTask( @Body() detail: {taskId: number}) {
    return this.todoService.deleteTask(detail.taskId);
  }

  @Delete('item/delete')
  @ApiResponse({ status:200, description:'delete existing item' }) 
  @Header('Content-Type', 'application/json') 
  @Public()
  deleteItem( @Body() detail: {itemId: number}) {
    return this.todoService.deleteItem(detail.itemId);
  }

  @Put('task/update')
  @ApiResponse({ status:200, description:'update existing task' }) 
  @Header('Content-Type', 'application/json') 
  @Public()
    async updateTask(@Body() taskDetail: UpdateTaskDto) {
    return this.todoService.updateTask(taskDetail);
  }

  @Put('item/update')
  @ApiResponse({ status:200, description:'update existing item' }) 
  @Header('Content-Type', 'application/json') 
  @Public()
    async updateItem(@Body() itemDetail: UpdateItemDto) {
    return this.todoService.updateItem(itemDetail);
  }

// // 'getAll()' returns the list of all the existing users in the database
//   @Get()
//   @ApiResponse({ status:200, description:'show all users' }) 
//   getAll() {
//     return this.usersServices.getAllUsers();
//   }

// //'getBooks()' return all the books which are associated with the user 
// // provided through 'userID' by the request  
//   @Get('books')
//   @ApiResponse({ status:200, description:'return all the books which are associated with the user' }) 
//   @ApiQuery({
//     name:'userID', 
//     required:true, 
//     type:Number, 
//   })  
//   getBooks( @Body('userID', ParseIntPipe) userID: number ) {
//     return this.usersServices.getBooksOfUser(userID);
//   }
}
