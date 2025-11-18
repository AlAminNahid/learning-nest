import { BadRequestException, Injectable } from "@nestjs/common";
import { UserCategoryOneDTO } from "./dto/userCategoryOne.dto";
import { InjectRepository } from "@nestjs/typeorm";
import { UserCategoryOneEntity } from "./userCategoryOne.entity";
import { MoreThan, Repository } from "typeorm";

@Injectable()
export class UserCategoryOneService{
    constructor(
        @InjectRepository(UserCategoryOneEntity)
        private userRepository : Repository<UserCategoryOneEntity>
    ){}

    sayGreetings() : string{
        return "Hello UserCategoryOne";
    }

    async createUser(info : UserCategoryOneDTO) : Promise<UserCategoryOneEntity>{
        const user = this.userRepository.create(info);
        console.log("UserCategoryOne is created");

        return await this.userRepository.save(user);
    }

    async getAllUsers() : Promise<UserCategoryOneEntity[]>{
        console.log("Retrived all the available user information");

        return await this.userRepository.find();
    }

    async updateStatus(id : number, status : string) : Promise<UserCategoryOneEntity>{
        await this.userRepository.update(id, {status});
        const user = await this.userRepository.findOneBy({id});

        if(!user){
            throw new BadRequestException(`There is no user with this ${id}`);
        }
        console.log(`Update the status of the user of ID ${id}`);

        return user;
    }

    async inactiveStatusUser() : Promise<UserCategoryOneEntity[]>{
        console.log("Retrived all the available inactive user information");

        const user = await this.userRepository.find({
            where : {status : "inactive"}
        })

        return user;
    }

    async getUserByAge() : Promise<UserCategoryOneEntity[]>{
        console.log("Retrived all the users information whose age is greater then 40");

        const user = await this.userRepository.find({
            where : {age : MoreThan(40)}
        })

        return user;
    }
}