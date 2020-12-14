import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger'; 
import { IsNotEmpty } from "class-validator";

export default class CreateUserDto {
    @ApiProperty({description:'name of user '})
    @IsNotEmpty()
    readonly name: string;

    readonly books: number[];

    @ApiProperty({description:'password of user '})
    @IsNotEmpty()
    readonly password: string;
}