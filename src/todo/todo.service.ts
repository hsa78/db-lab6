import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import CreateTaskDto from './dto/create-task.dto';
import TaskEntity from 'src/db/task.entity';
import CategoryEntity from 'src/db/category.entity';
import { isNullOrUndefined } from 'util';
import TagEntity from 'src/db/tag.entity';
import ItemEntity from 'src/db/item.entity';
import { async } from 'rxjs';
import CreateItemDto from './dto/create-item.dto';
import CreateCategoryDto from './dto/create-category.dto';
import CreateTagDto from './dto/create-tag.dto';
import UserEntity from 'src/db/user.entity';
import UpdateTaskDto from './dto/update-task.dto';
import UpdateItemDto from './dto/update-item.dto';


@Injectable()
export class TodoService {
    async insertTask(userDetails: CreateTaskDto): Promise<TaskEntity> {
        const taskEntity: TaskEntity = TaskEntity.create();
        taskEntity.title = userDetails.title;

        let category = await CategoryEntity.findOne(userDetails.categoryId);
        if (isNullOrUndefined(category)) 
            throw new NotFoundException();
        taskEntity.category = category;

        taskEntity.tags = []; 
        if(userDetails.tagIds){
            userDetails.tagIds.forEach(async tagId => {
                let tag = await TagEntity.findOne(tagId);
                if(isNullOrUndefined(tag))
                    throw new NotFoundException();
                taskEntity.tags.push(tag);
            });
        }

        

        taskEntity.user = await UserEntity.findOne({where: {email: 'a@b.com'}});
        taskEntity.compeleted = false;

        await TaskEntity.save(taskEntity);

        if(userDetails.items){
            let items: ItemEntity[] = [];
            userDetails.items.forEach(async item => {
                let i = await this.insertItem(item, taskEntity);
                items.push(i);
            })
        }

        return taskEntity;
      }

      async insertItem(itemDetails: CreateItemDto, task: TaskEntity): Promise<ItemEntity>{
        const itemEntity: ItemEntity = ItemEntity.create();

        if(!itemDetails.title && !itemDetails.desc)
            throw new BadRequestException(itemDetails, 'item should have one of tilte or desc');
        
        let title = itemDetails.title ? itemDetails.title : 'no title';
        itemEntity.title = title;

        if(itemDetails.desc){
            itemEntity.desc = itemDetails.desc;
        }
        
        itemEntity.compeleted = false;
        itemEntity.task = task;

        await ItemEntity.save(itemEntity);
        return itemEntity;
          
      }

      async insertCategory(categoryDetails: CreateCategoryDto): Promise<CategoryEntity>{
        const categoryEntity: CategoryEntity = CategoryEntity.create();
        categoryEntity.name = categoryDetails.name;
        await CategoryEntity.save(categoryEntity);
        return categoryEntity;
      }

      async insertTag(tagDetails: CreateTagDto): Promise<TagEntity>{
        const tagEntity: TagEntity = TagEntity.create();
        tagEntity.name = tagDetails.name;
        await TagEntity.save(tagEntity);
        return tagEntity;
      }

      async deleteItem(itemId: number): Promise<ItemEntity>{
          let item = ItemEntity.findOne({where: {id:itemId}});
          if(isNullOrUndefined(item))
            throw new NotFoundException();
          ItemEntity.delete({id:itemId});
          return item;
      }

    async deleteTask(taskId: number): Promise<TaskEntity>{
        let task = TaskEntity.findOne({where: {id:taskId}});
        if(isNullOrUndefined(task))
            throw new NotFoundException();
        TaskEntity.delete({id:taskId});
        return task;
    }

    async updateTask(taskDetails: UpdateTaskDto): Promise<TaskEntity>{
        let task = await TaskEntity.findOne({where:{id: taskDetails.id}});
        if(isNullOrUndefined(task))
            throw new NotFoundException();
        if(taskDetails.title){
            task.title = taskDetails.title;
        }
        if(taskDetails.compeleted){
            task.compeleted = taskDetails.compeleted;
        }
        if(taskDetails.categoryId){
            let newCategory = await CategoryEntity.findOne(taskDetails.categoryId);
            task.category = newCategory;
        }
        // if(taskDetails.tagIds){ //TODO this part is not working
        //     task.tags = [];
        //     taskDetails.tagIds.forEach(async tagId => {
        //         let newTag = await TagEntity.findOne(tagId);
        //         task.tags.push(newTag);
        //     });
        // }
        if(taskDetails.items){
            taskDetails.items.forEach(async item => {
                this.updateItem(item);
            });
        }
        if(taskDetails.newItems){
            taskDetails.newItems.forEach(async item => {
                this.insertItem(item, task);
            });
        }
        TaskEntity.update(taskDetails.id, task);
        return task;
    }

    async updateItem(itemDetails: UpdateItemDto): Promise<ItemEntity>{
        let item = ItemEntity.findOne({where:{id: itemDetails.id}});
        if(isNullOrUndefined(item))
            throw new NotFoundException();
        if(itemDetails.title){
            (await item).title = itemDetails.title;
        }
        if(itemDetails.desc){
            (await item).desc = itemDetails.desc;
        }
        if(itemDetails.compeleted){
            (await item).compeleted = itemDetails.compeleted;
        }
        ItemEntity.update(itemDetails.id, await item);
        return item;
    }

      async getAllTasks(): Promise<TaskEntity[]> {
        return await TaskEntity.find();
      }
    //   async getBooksOfUser(userID: number): Promise<BookEntity[]> {
    //     console.log(typeof(userID));
    //     const user: UserEntity = await UserEntity.findOne({where: {id: userID}, relations: ['books']});
    //     return user.books;
    //   }
    
    //   async findOne(userId: number): Promise<UserEntity | undefined> {
    //     return UserEntity.findOne({where:{id:userId}});
    //   }
}
