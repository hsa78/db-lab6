import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger'; 
import { IsNotEmpty } from "class-validator";
import CreateItemDto from './create-item.dto';

export default class CreateTaskDto {
    @ApiProperty({description:'title of task'})
    @IsNotEmpty()
    readonly title: string;

    @ApiProperty({description:'id of category'})
    @IsNotEmpty()
    readonly categoryId: number;

    @ApiProperty({description:'tag ids'})
    readonly tagIds: number[];

    @ApiProperty({description:'items'})
    readonly items: CreateItemDto[];
}