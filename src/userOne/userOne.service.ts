import { Injectable } from "@nestjs/common";
import { UserOneDTO } from "./userOne.dto";

@Injectable()
export class UserOneService{
    getGreetings() : string {
        return "Welcome UserOne";
    }

    insertInfo(info : UserOneDTO, file : Express.Multer.File) : object {
        return {
            name : info.name,
            email : info.email,
            nidNumber : info.nidNumber,
            file : file.filename
        }
    }
}