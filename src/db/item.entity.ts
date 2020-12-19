import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, ManyToOne, ManyToMany } from 'typeorm';
import TaskEntity from './task.entity';
import { Optional } from '@nestjs/common';

@Entity()
export default class ItemEntity extends BaseEntity {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column({ nullable: true })
  desc: string;

  @Column()
  compeleted: boolean;

  @ManyToOne(type => TaskEntity, task => task.items, {onDelete: "CASCADE"})
  task: TaskEntity;
}