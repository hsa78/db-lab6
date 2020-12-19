import { Injectable } from '@nestjs/common';
import UserEntity from '../db/user.entity';
import CreateUserDto from './dto/create-user.dto';
import {getConnection} from "typeorm";

@Injectable()
export class UserServices {

  async insert(userDetails: CreateUserDto): Promise<UserEntity> {
    const userEntity: UserEntity = UserEntity.create();
    const {name,password, email } = userDetails;
    userEntity.name = name;
    userEntity.password = password;
    userEntity.email = email;
    await UserEntity.save(userEntity);
    return userEntity;
  }
  async getAllUsers(): Promise<UserEntity[]> {
    return await UserEntity.find();
  }
  // async getBooksOfUser(userID: number): Promise<BookEntity[]> {
  //   console.log(typeof(userID));
  //   const user: UserEntity = await UserEntity.findOne({where: {id: userID}, relations: ['books']});
  //   return user.books;
  // }

  async findOne(userId: number): Promise<UserEntity | undefined> {
    return UserEntity.findOne({where:{id:userId}});
  }
}