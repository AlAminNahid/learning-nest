import { IsBoolean, IsIn, IsOptional, IsString, MaxLength } from "class-validator";

export class UserCategoryThreeDTO{
    @IsString({
        message : "UserName can only contains string value & It has to be unique value"
    })
    @MaxLength(100, {
        message : "UserName maxLength is 100"
    })
    userName : string;

    @IsString({
        message : "FullName can only contain string value"
    })
    @MaxLength(150, {
        message : "FullName maxLength is 150"
    })
    fullName : string;

    @IsOptional()
    @IsBoolean({
        message : "isActive can only contain true or false"
    })
    @IsIn([true, false])
    isActive : boolean;
}