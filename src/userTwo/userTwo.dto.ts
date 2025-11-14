import { IsIn, IsNotEmpty, IsString, Matches, MaxLength, MinLength } from "class-validator";

export class UserTwoDTO{
    @IsString({
        message : "Email should be a string value"
    })
    @IsNotEmpty({
        message : "Email cannot be empty"
    })
    @Matches(/^[a-z.]+@aiub.edu$/, {
        message : "Email must contain @ and aiub.edu"
    })
    email : string;

    @IsString({
        message : "Password should be a string"
    })
    @MinLength(6)
    @Matches(/^(?=.*[A-Z]).*$/, {
        message : "Password must should have at least 6 characters & an UpperCase Character"
    })
    password : string;
    
    @IsString({
        message : "Gender should be a string value and the value should be male or female"
    })
    @IsIn(['male', 'female'])
    gender : string;
    
    @IsString()
    @Matches(/^01[0-9]+$/, {
        message : "Phone Number should only contain numbers & should start with 01"
    })
    @MaxLength(11, {
        message : "Number should be only 11 digits"
    })
    phoneNumber : string;
}