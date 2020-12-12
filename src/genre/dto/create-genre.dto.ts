import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger'; 

export default class CreateGenreDto {
    @ApiProperty({description:'type of genre'})
    readonly type: string;
}