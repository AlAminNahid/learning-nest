import { Body, Controller, Get, Param, Post, Query, Put, Patch, Delete, UsePipes, ValidationPipe } from "@nestjs/common";
import { UserService } from "./user.service";
import { UserDTO } from "./user.dto";

@Controller('User')
export class UserController{
    constructor(private readonly userService:UserService) {}

    @Get('greetings')
    // URL = http://localhost:3000/User/greetings
    getGreetings(): string{
        return this.userService.getGreetings();
    }

    @Get('createByRequestParameter/:id/:name/:age/:address') 
    // URL = http://localhost:3000/User/createByRequestParameter/22496273/AlAmin/23/Sreemongal
    getUserInfoByRequest(
        @Param('id') id : number,
        @Param('name') name : string,
        @Param('age') age : number,
        @Param('address') address : string
    ) : object {
        return this.userService.getUserInfoByRequest(id, name, age, address);
    }

    @Get('createByQueryParameter') 
    // URL = http://localhost:3000/User/createByQueryParameter?id=1&name=AlAmin&age=24
    getUserInforByQuery(
        @Query('id') id : number,
        @Query('name') name : string,
        @Query('age') age : number
    ) : object {
        return this.userService.getUserInforByQuery(id, name, age);
    }

    @Post('createByPostBody')
    @UsePipes(new ValidationPipe())
    // URL =  http://localhost:3000/User/createByPostBody
    getUserInforByPost(
        @Body() info : UserDTO
    ) : object {
        console.log("User information: ");
        console.log(`ID - ${info.id}, Name - ${info.name}, Age - ${info.age}, Address - ${info.address}`);

        return this.userService.getUserInforByPost(info);
    }

    @Put('update')
    // URL = http://localhost:3000/User/update
    updateUserByPut(
        @Body() updateData : UserDTO
    ) : object {
        return this.userService.updateUserByPut(updateData);
    }

    @Patch('updateUserByParam/:id')
    // URL = http://localhost:3000/User/updateUserByParam/1
    updateUserByParam(@Param('id') id : number,
        @Body() partialUpdate : UserDTO
    ) : object {
        return this.userService.updateUserByParam(id, partialUpdate);
    }

    @Patch('partialUpdateByQuery')
    // URL = http://localhost:3000/User/partialUpdateByQuery?id=1
    updateUserByQuery(
        @Query('id') id : number,
        @Body() partialUpdate : UserDTO
    ) : object {
        return this.userService.updateUserByQuery(id, partialUpdate);
    }

    @Patch('partcialUpdateByBody')
    // URL = http://localhost:3000/User/partcialUpdateByBody
    updateUserByBody(
        @Body() partialUpdate : UserDTO
    ) : object {
        let id : number = partialUpdate.id;
        return this.userService.updateUserByBody(id, partialUpdate);
    }

    @Delete('delete/:id')
    // URL = http://localhost:3000/User/delete/1
    deleteUser(
        @Param('id') id : number
    ) : string {
        return this.userService.deleteUser(id);
    }
}