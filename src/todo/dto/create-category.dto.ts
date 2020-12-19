import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger'; 
import { IsNotEmpty } from "class-validator";

export default class CreateCategoryDto {
    @ApiProperty({description:'category name'})
    @IsNotEmpty()
    readonly name: string;

}