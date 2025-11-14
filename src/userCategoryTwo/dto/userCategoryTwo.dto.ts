import { IsBoolean, IsIn, IsNumber, IsOptional, IsString, isNumber } from "class-validator";

export class UserCategoryTwoDTO{
    @IsOptional()
    @IsBoolean({
        message : "isActive can only be boolean value"
    })
    @IsIn([true, false], {
        message : "It can only contain true or false"
    })
    isActive : boolean;

    @IsOptional()
    @IsString({
        message : "FullName can only contain string value"
    })
    fullName : string;

    @IsNumber()
    phone : number;
}