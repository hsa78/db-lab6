import BookEntity from '../db/book.entity';
import CreateBookDto from './dto/create-book.dto';
import BookDto from './dto/book.dto';
import UserEntity from '../db/user.entity';
import { createQueryBuilder, getConnection } from 'typeorm';
import GenreEntity from '../db/genre.entity';

export class BooksService {

  async insert(bookDetails: CreateBookDto): Promise<BookEntity> {
    const { name , userID , genreIDs } = bookDetails;
    const book = new BookEntity();
    book.name = name;
    book.user = await UserEntity.findOne(userID) ;
    book.genres=[];
    for ( let i = 0; i < genreIDs.length ; i++)
    {
             const genre = await GenreEntity.findOne(genreIDs[i]);
             book.genres.push(genre);
    }
    await book.save();
    return book;
  }
  async getAllBooks(): Promise<BookEntity[] > {
    // const user: UserEntity = await UserEntity.findOne({where: {id: 2}, relations: ['books']});
    return BookEntity.find();
  }

  async delete(bookID: number): Promise<BookEntity> {
    const book = await BookEntity.findOne(bookID);
    BookEntity.delete(bookID);
    return book; 
  }

  async update(bookDetails: BookDto): Promise<BookEntity> {
    const bookID = bookDetails.bookID;
    var book = BookEntity.findOne(bookID);
    if(bookDetails.name)
      (await book).name = bookDetails.name;
    
    if(bookDetails.userID)
      (await book).user = await UserEntity.findOne(bookDetails.userID);

    if(bookDetails.genreIDs)
    {
      const genres = [];
      for(let i = 0; i < bookDetails.genreIDs.length; i++)
      {
        const genre = await GenreEntity.findOne(bookDetails.genreIDs[i]);
        genres.push(genre);
      }
      (await book).genres = genres;
    }

    BookEntity.update(bookID, await book);

    return book;
  }
}