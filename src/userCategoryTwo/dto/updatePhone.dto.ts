import { IsNumber, IsOptional, IsString } from "class-validator";

export class UpdatePhoneDTO{
    @IsOptional()
        @IsString({
            message : "FullName can only contain string value"
        })
        fullName : string;
}