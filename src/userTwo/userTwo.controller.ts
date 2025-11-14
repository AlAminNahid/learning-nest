import { Body, Controller, Get, Post, UsePipes, ValidationPipe } from "@nestjs/common";
import { UserTwoService } from "./userTwo.service";
import { UserTwoDTO } from "./userTwo.dto";
import { UserTwoEntity } from "./userTwo.entity";

@Controller('UserTwo')
export class UserTwoController{
    constructor(private readonly userTwoService : UserTwoService){}

    @Get('greetings')
    getGreetings(): string{
        return this.userTwoService.getGreetings();
    }
    // URL = http://localhost:3000/UserTwo/greetings

    @Post('insertInfo')
    @UsePipes(new ValidationPipe)
    insertInfo(
        @Body() info : UserTwoDTO
    ) : object {
        return this.userTwoService.insertInfo(info);
    }
    // URL = http://localhost:3000/UserTwo/insertInfo

    @Post('createUser')
    @UsePipes(new ValidationPipe)
    createUser(
        @Body() info : UserTwoDTO
    ) : Promise<UserTwoEntity> {
        return this.userTwoService.createUser(info);
    }
    // URL = http://localhost:3000/UserTwo/createUser
}