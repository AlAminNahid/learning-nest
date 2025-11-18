import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, UsePipes, ValidationPipe } from "@nestjs/common";
import { UserCategoryTwoService } from "./userCategoryTwo.service";
import { UserCategoryTwoEntity } from "./userCategoryTwo.entity";
import { UserCategoryTwoDTO } from "./dto/userCategoryTwo.dto";
import { UpdatePhoneDTO } from "./dto/updatePhone.dto";

@Controller('userCategoryTwo')
export class UserCategoryTwoController{
    constructor(private readonly userCategoryTwoService : UserCategoryTwoService){}

    @Get('greetings')
    greetingsUser() : string {
        return this.userCategoryTwoService.greetingsUser();
    }
    // URL = http://localhost:3000/UserCategoryTwo/greetings

    @Post('createUser')
    @UsePipes(new ValidationPipe)
    createUser(
        @Body() info : UserCategoryTwoDTO
    ) : Promise<UserCategoryTwoEntity>{
        return this.userCategoryTwoService.createUser(info);
    }
    // URL = http://localhost:3000/UserCategoryTwo/createUser

    @Patch('updatePhone/:id')
    @UsePipes(new ValidationPipe)
    updatePhone(
        @Param('id', ParseIntPipe) id : number,
        @Body() upPhone : UpdatePhoneDTO
    ) : Promise<UserCategoryTwoEntity>{
        return this.userCategoryTwoService.updatePhone(id, upPhone.fullName);
    }
    // URL = http://localhost:3000/UserCategoryTwo/updatePhone/

    @Get('retriveUser')
    retriveUser() : Promise<UserCategoryTwoEntity[]>{
        return this.userCategoryTwoService.retriveUser();
    }
    // URL = http://localhost:3000/UserCategoryTwo/retriveUser

    @Delete('deleteUser/:id')
    deleteUser(
        @Param('id', ParseIntPipe) id : number
    ) : Promise<string>{
        return this.userCategoryTwoService.deleteUser(id);
    }
    // URL = http://localhost:3000/UserCategoryTwo/deleteUser/
}