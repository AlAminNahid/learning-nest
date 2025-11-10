import { IsNotEmpty, IsString, IsUrl, Matches } from "class-validator";

export class UserFourDTO{
    @IsString({
        message : "Name has to be string"
    })
    @Matches(/^[A-Za-z ]+$/, {
        message : "Name can't contain any number"
    })
    name : string;

    @IsString({
        message : "Password has to be a string"
    })
    @IsNotEmpty({
        message : "Password can't be empty"
    })
    @Matches(/^.*(?=[@#$&]).*$/, {
        message : "Password must contain any of this (@ or # or $ or &) speical characters"
    })
    password : string;

    @IsString({
        message : "Data should be a string"
    })
    @Matches(/^\d{2}-\d{2}-\d{4}$/, {
        message : "Date must be in DD-MM-YYYY format and it shoudl only contain number"
    })
    date : string;

    @IsUrl({
        require_host : true,
        require_tld : true
    })
    socialMediaLink : string;
}