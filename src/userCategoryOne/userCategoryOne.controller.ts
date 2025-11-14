import { Body, Controller, Get, Param, ParseIntPipe, Patch, Post, UsePipes, ValidationPipe } from "@nestjs/common";
import { UserCategoryOneService } from "./userCategoryOne.service";
import { UserCategoryOneDTO } from "./dto/userCategoryOne.dto";
import { UserCategoryOneEntity } from "./userCategoryOne.entity";
import { UpdateStatusDTO } from "./dto/updateStatus.dto";

@Controller('UserCategoryOne')
export class UserCategoryOneController{
    constructor(private readonly userCategoryOneService : UserCategoryOneService){}

    @Get('greetings')
    sayGreetings() : string{
        return this.userCategoryOneService.sayGreetings();
    }
    // URL = http://localhost:3000/UserCategoryOne/greetings

    @Post('createUser')
    @UsePipes(new ValidationPipe)
    createUser(
        @Body() info : UserCategoryOneDTO
    ) : Promise<UserCategoryOneEntity> {
        return this.userCategoryOneService.createUser(info);
    }
    // URL = http://localhost:3000/UserCategoryOne/createUser

    @Get('getAllUser')
    getAllUsers() : Promise<UserCategoryOneEntity[]>{
        return this.userCategoryOneService.getAllUsers();
    }
    // URL = http://localhost:3000/UserCategoryOne/getAllUser

    @Patch('updateStatus/:id')
    @UsePipes(new ValidationPipe)
    updateStatus(
        @Param('id', ParseIntPipe) id : number,
        @Body() updateStatus : UpdateStatusDTO
    ) : Promise<UserCategoryOneEntity> {
        return this.userCategoryOneService.updateStatus(id, updateStatus.status);
    }
    // URL = http://localhost:3000/UserCategoryOne/updateStatus/1

    @Get('inactiveStatusUser')
    inactiveStatusUser() : Promise<UserCategoryOneEntity[]>{
        return this.userCategoryOneService.inactiveStatusUser();
    }
    // URL = http://localhost:3000/UserCategoryOne/inactiveStatusUser

    @Get('getUserByAge')
    getUserByAge() : Promise<UserCategoryOneEntity[]>{
        return this.userCategoryOneService.getUserByAge();
    }
    // URL = http://localhost:3000/UserCategoryOne/getUserByAge
}