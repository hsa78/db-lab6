import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, OneToMany } from 'typeorm';
import BookEntity from './book.entity';
@Entity()
export default class UserEntity extends BaseEntity {
    @OneToMany( type => BookEntity , book => book.user)
    books: BookEntity[];

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 500 })
    name: string;
}