import { Controller, Get } from "@nestjs/common";
import { UserCategoryThreeService } from "./userCategoryThree.service"

@Controller('userCategoryThree')
export class UserCategoryThreeController{
    constructor(private readonly userCategoryThreeService : UserCategoryThreeService){}

    @Get('greetings')
    welcomeGreetings() : string {
        return this.userCategoryThreeService.welcomeGreetings();
    }
}