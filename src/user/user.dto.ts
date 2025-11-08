import { IsString, IsNumber } from 'class-validator';

export class UserDTO {
    @IsNumber()
    id: number;

    @IsString()
    name: string;

    @IsNumber()
    age: number;

    @IsString()
    address: string;
    
    @IsString()
    password: string;
}