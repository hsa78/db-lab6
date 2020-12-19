import { Entity, PrimaryColumn, Column, BaseEntity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import TaskEntity from './task.entity';

@Entity()
export default class UserEntity extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @OneToMany( type => TaskEntity , task => task.user)
    tasks: TaskEntity[];

    @Column()
    email: string;

    @Column({ length: 500 })
    name: string;

    @Column()
    password: string;
}