import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, OneToMany, ManyToOne, OneToOne, ManyToMany, JoinTable } from 'typeorm';
import { type } from 'os';
import CategoryEntity from './category.entity';
import TagEntity from './tag.entity';
import ItemEntity from './item.entity';
import UserEntity from './user.entity';

@Entity()
export default class TaskEntity extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 500 })
    title: string;

    @Column()
    compeleted: boolean;

    @ManyToOne(type => UserEntity, user => user.tasks)
    user: UserEntity;

    @ManyToOne(type => CategoryEntity, category => category.tasks)
    category: CategoryEntity;

    @ManyToMany(type => TagEntity)
    @JoinTable()
    tags: TagEntity[];

    @OneToMany( type => ItemEntity , item => item.task)
    items: ItemEntity[];

    
}