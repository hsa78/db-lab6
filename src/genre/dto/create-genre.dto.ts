import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger'; 
import { IsNotEmpty } from "class-validator";

export default class CreateGenreDto {
    @ApiProperty({description:'type of genre'})
    @IsNotEmpty()
    readonly type: string;
}