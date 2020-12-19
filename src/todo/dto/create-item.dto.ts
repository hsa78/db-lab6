import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger'; 
import { IsNotEmpty } from "class-validator";
import { Optional } from '@nestjs/common';

export default class CreateItemDto {
    @ApiProperty({description:'title of item'})
    @Optional()
    readonly title: string;

    @ApiProperty({description:'desc of item'})
    @Optional()
    readonly desc: string;
}