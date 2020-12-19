import { Entity, PrimaryColumn, Column, BaseEntity, OneToMany } from 'typeorm';
import TaskEntity from './task.entity';

@Entity()
export default class UserEntity extends BaseEntity {
    @OneToMany( type => TaskEntity , task => task.user)
    tasks: TaskEntity[];

    @PrimaryColumn()
    email: string;

    @Column({ length: 500 })
    name: string;

    @Column()
    password: string;
}