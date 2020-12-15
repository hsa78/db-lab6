import { Entity, PrimaryColumn, Column, BaseEntity, OneToMany } from 'typeorm';
import TodoEntity from './todo.entity';
@Entity()
export default class UserEntity extends BaseEntity {
    @OneToMany( type => TodoEntity , todo => todo.user)
    todos: TodoEntity[];

    @PrimaryColumn()
    email: string;

    @Column({ length: 500 })
    name: string;

    @Column()
    password: string;
}