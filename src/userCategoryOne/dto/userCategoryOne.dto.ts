import { IsNumber, IsString, MaxLength, IsIn, IsOptional, IsNotEmpty } from "class-validator";

export class UserCategoryOneDTO{
    @IsNumber()
    @IsNotEmpty({
        message : "ID is mendotory"
    })
    id : number;

    @IsString({
        message : "Full-Name has to be a string"
    })
    @MaxLength(100, {
        message : "Name length can't be greater then "
    })
    fullName : string;

    @IsNumber()
    age : number;

    @IsOptional()
    @IsString({
        message : "Status has to be a string"
    })
    @IsIn(["active", "inactive"], {
        message : "Status can only contain active or inactive"
    })
    status : string;
}