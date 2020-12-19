import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger'; 
import { IsNotEmpty } from 'class-validator';

export default class CreateTagDto {
    @ApiProperty({description:'tag name'})
    @IsNotEmpty()
    readonly name: string;
}