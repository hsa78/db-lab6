import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger'; 
import { IsNotEmpty } from "class-validator";

export default class CreateBookDto {
    @ApiProperty({description:'book name '})
    @IsNotEmpty()
    readonly name: string;
    @ApiProperty({description:'id of user assosiated with book'})
    readonly userID: number;

    @ApiProperty({description:'genre Ids of book'})
    readonly genreIDs: number[];
}