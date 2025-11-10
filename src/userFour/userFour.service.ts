import { Injectable } from "@nestjs/common";
import { UserFourDTO } from "./userFour.dto";

@Injectable()
export class UserFourService{
    getGreetings() : string {
        return "Hello UserFour";
    }

    insertInfo(info : UserFourDTO) : object {
        return info;
    }
}