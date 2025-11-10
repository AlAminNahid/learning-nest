import { Injectable } from "@nestjs/common";
import { UserTwoDTO } from "./userTwo.dto";

@Injectable()
export class UserTwoService{
    getGreetings() : string{
        return "Hello UserTwo";
    }

    insertInfo(info : UserTwoDTO) : object {
        return info;
    }
}