import { match } from "assert";
import { IsDefined, IsNumber, IsString, Matches, Min, Max } from "class-validator";

export class UserOneDTO{
    @IsString()
    @Matches(/^[A-Za-z ]+$/, {
        message : 'Name shoudl only contain alphabet',
    })
    name : string;
    
    @IsDefined({
        message : 'Email is required',
    })
    @Matches(/^[a-z]+@[a-z]+\.xyz$/, {
        message : 'Email must conatin @ and .xyz domain',
    })
    email : string;

    @Matches(/^\d{10}$/, {
        message : 'NID must contain 10 digits & only numbers',
    })
    nidNumber : string;
}