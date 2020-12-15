import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, ManyToOne, OneToMany } from 'typeorm';
import UserEntity from './user.entity';
import { type } from 'os';
import TaskEntity from './task.entity';


@Entity()
export default class TodoEntity extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 500 })
    title: string;

    @ManyToOne(type => UserEntity, user => user.todos)
    @Column()
    user: UserEntity;

    @OneToMany(type => TaskEntity, task => task.todo)
    @Column()
    tasks : TaskEntity[];
}