import { Injectable } from "@nestjs/common";
import { UserTwoDTO } from "./userTwo.dto";
import { InjectRepository } from "@nestjs/typeorm";
import { UserTwoEntity } from "./userTwo.entity";
import { Repository } from "typeorm";

@Injectable()
export class UserTwoService{
    constructor(@InjectRepository(UserTwoEntity) private userRepository : Repository<UserTwoEntity>){}

    getGreetings() : string{
        return "Hello UserTwo";
    }

    async createUser(userInfo : UserTwoDTO) : Promise<UserTwoEntity>{
        const user = this.userRepository.create(userInfo);
        return this.userRepository.save(user);
    }

    insertInfo(info : UserTwoDTO) : object {
        return info;
    }
}