import { IsNumber } from "class-validator";

export class UpdatePhoneDTO{
    @IsNumber()
    phone : number;
}