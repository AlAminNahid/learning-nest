import { Body, Controller, Get, Post, UsePipes, ValidationPipe } from "@nestjs/common";
import { UserTwoService } from "./userTwo.service";
import { UserTwoDTO } from "./userTwo.dto";

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
}