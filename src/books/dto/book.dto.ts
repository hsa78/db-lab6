import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger'; 
import { IsNotEmpty, IsOptional } from "class-validator";

export default class BookDto {
    @ApiProperty({description:'book name '})
    @IsOptional()
    readonly name: string;
    @ApiProperty({description:'id of user assosiated with book'})
    @IsOptional()
    readonly userID: number;

    @ApiProperty({description:'genre Ids of book'})
    @IsOptional()
    readonly genreIDs: number[];

    @ApiProperty({description:'book id'})
    @IsNotEmpty()
    readonly bookID: number;
}