import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger'; 
import { IsNotEmpty } from "class-validator";
import UpdateItemDto from './update-item.dto';

export default class UpdateTaskDto {
    @ApiProperty({description:'title of task'})
    readonly title: string;

    @ApiProperty({description:'id of category'})
    readonly categoryId: number;

    @ApiProperty({description:'tag ids'})
    readonly tagIds: number[];

    @ApiProperty({description:'items'})
    readonly items: UpdateItemDto[];

    @ApiProperty({description:'compeleted status'})
    readonly compeleted: boolean;

    @ApiProperty({description:'items'})
    @IsNotEmpty()
    readonly id: number;
}