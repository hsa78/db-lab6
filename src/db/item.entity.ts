import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, ManyToOne, ManyToMany } from 'typeorm';
import TaskEntity from './task.entity';

@Entity()
export default class ItemEntity extends BaseEntity {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column({length:500})
  desc: string;

  @Column()
  compeleted: boolean;

  @ManyToOne(type => TaskEntity, task => task.items)
  task: TaskEntity;
}