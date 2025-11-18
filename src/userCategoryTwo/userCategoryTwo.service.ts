import { BadGatewayException, BadRequestException, Injectable } from "@nestjs/common";
import { UserCategoryTwoDTO } from "./dto/userCategoryTwo.dto";
import { UserCategoryTwoEntity } from "./userCategoryTwo.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { IsNull, Repository } from "typeorm";

@Injectable()
export class UserCategoryTwoService{
    constructor(
        @InjectRepository(UserCategoryTwoEntity) 
        private userRepository : Repository<UserCategoryTwoEntity>
    ){}

    greetingsUser() : string{
        return "Welcome UserTwo";
    }

    async createUser(info : UserCategoryTwoDTO) : Promise<UserCategoryTwoEntity>{
        const user = await this.userRepository.create(info);
        console.log("Created userCategoryTwo");

        return this.userRepository.save(user);
    }

    async updatePhone(id : number, fullName : string) : Promise<UserCategoryTwoEntity>{
        await this.userRepository.update(id, {fullName : fullName});
        const user = await this.userRepository.findOneBy({id});

        if(!user){
            throw new BadRequestException(`There is no user with this ${id}`);
        }
        console.log(`Update the phone of the user of ID ${id}`);
        
        return user;
    }

    async retriveUser() : Promise<UserCategoryTwoEntity[]>{
        const user = await this.userRepository.find({
            where : {
                fullName : IsNull()
            }
        })

        if(!user){
            throw new BadRequestException(`There is no user who as null values in their fullName`);
        }

        return user;
    }

    async deleteUser(id : number) : Promise<string>{
        const user = await this.userRepository.findOneBy({id});

        if(!user){
            throw new BadGatewayException(`There is no existing user with the this ${id}`);
        }
        else{
            await this.userRepository.delete(id);
        }

        return "User has been deleted";
    }
}