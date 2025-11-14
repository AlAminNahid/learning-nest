import { IsOptional, IsString, IsIn } from "class-validator";

export class UpdateStatusDTO{
    @IsOptional()
    @IsString({
        message : "Status has to be a string"
    })
    @IsIn(["active", "inactive"], {
        message : "Status can only contain active or inactive"
    })
    status : string;
}