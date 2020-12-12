import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger'; 

export default class CreateBookDto {
    @ApiProperty({description:'book name '})
    readonly name: string;
    readonly userID: number;
    readonly genreIDs: number[];
}