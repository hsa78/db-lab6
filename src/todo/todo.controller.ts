import { Controller, Post, Header, Body, Delete, Put, Get } from '@nestjs/common';
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
  postTask( @Body() task: CreateTaskDto) {
    return this.todoService.insertTask(task);
  }

  @Post('category/insert')
  @ApiResponse({ status:200, description:'create new category' }) 
  @Header('Content-Type', 'application/json') 
  postCategory( @Body() category: CreateCategoryDto) {
    return this.todoService.insertCategory(category);
  }

  @Post('tag/insert')
  @ApiResponse({ status:200, description:'create new tag' }) 
  @Header('Content-Type', 'application/json') 
  postTag( @Body() tag: CreateTagDto) {
    return this.todoService.insertTag(tag);
  }

  @Delete('task/delete')
  @ApiResponse({ status:200, description:'delete existing task' }) 
  @Header('Content-Type', 'application/json') 
  deleteTask( @Body() detail: {taskId: number}) {
    return this.todoService.deleteTask(detail.taskId);
  }

  @Delete('item/delete')
  @ApiResponse({ status:200, description:'delete existing item' }) 
  @Header('Content-Type', 'application/json') 
  deleteItem( @Body() detail: {itemId: number}) {
    return this.todoService.deleteItem(detail.itemId);
  }

  @Put('task/update')
  @ApiResponse({ status:200, description:'update existing task' }) 
  @Header('Content-Type', 'application/json') 
    async updateTask(@Body() taskDetail: UpdateTaskDto) {
    return this.todoService.updateTask(taskDetail);
  }

  @Put('item/update')
  @ApiResponse({ status:200, description:'update existing item' }) 
  @Header('Content-Type', 'application/json') 
    async updateItem(@Body() itemDetail: UpdateItemDto) {
    return this.todoService.updateItem(itemDetail);
  }

  @Get('task')
  @ApiResponse({ status:200, description:'show all tasks' }) 
  getAll() {
    return this.todoService.getAllTasks();
  }
}
