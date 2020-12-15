import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, ManyToOne, ManyToMany, JoinTable, OneToMany } from 'typeorm';
import { type } from 'os';
import TaskEntity from './task.entity';

@Entity()
export default class CategoryEntity extends BaseEntity {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @OneToMany(type => TaskEntity, task => task.category)
  @Column()
  tasks: TaskEntity[];
}