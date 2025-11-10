import { Body, Controller, Get, Post, UsePipes, ValidationPipe } from "@nestjs/common";
import { UserFourService } from "./userFour.service";
import { UserFourDTO } from "./userFour.dto";

@Controller('UserFour')
export class UserFourController{
    constructor(private readonly userFourService : UserFourService){}

    @Get('greetings')
    getGreetings(): string{
        return this.userFourService.getGreetings();
    }
    // URL = http://localhost:3000/UserFour/greetings

    @Post('insertInfo')
    @UsePipes(new ValidationPipe)
    insertInfo(
        @Body() info : UserFourDTO
    ) : object {
        return this.userFourService.insertInfo(info);
    }
    // URL = http://localhost:3000/UserFour/insertInfo
}