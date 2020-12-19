import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger'; 
import { IsNotEmpty } from "class-validator";
import { Optional } from '@nestjs/common';

export default class UpdateItemDto {
    @ApiProperty({description:'title of item'})
    @Optional()
    readonly title: string;

    @ApiProperty({description:'desc of item'})
    @Optional()
    readonly desc: string;

    @ApiProperty({description:'compeleted status'})
    @Optional()
    readonly compeleted: boolean;

    @ApiProperty({description:'id of item'})
    @IsNotEmpty()
    readonly id: number;
}