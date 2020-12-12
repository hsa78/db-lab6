import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger'; 

export default class CreateUserDto {
    @ApiProperty({description:'name of user '})
    readonly name: string;

    readonly books: number[] ;
}