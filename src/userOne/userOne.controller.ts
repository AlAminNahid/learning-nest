import { Body, Controller, Get, Param, Post, UploadedFile, UseInterceptors, UsePipes, ValidationPipe, Res } from "@nestjs/common";
import { UserOneService } from "./userOne.service";
import { UserOneDTO } from "./userOne.dto";
import { FileInterceptor } from "@nestjs/platform-express";
import { diskStorage, MulterError } from "multer";

@Controller('UserOne')
export class UserOneController{
    constructor(private readonly userOneService: UserOneService){}

    @Get('greetings')
    getGreetings(): string{
        return this.userOneService.getGreetings();
    }
    // URL = http://localhost:3000/UserOne/greetings

    @Post('insertInfo')
    @UseInterceptors(FileInterceptor('file', {
        fileFilter : function (req, file, cb) {
            if(file.originalname.match(/^.*\.(jpg|webp|png|jpeg)$/)){
                cb(null, true);
            }
            else {
                cb(new MulterError('LIMIT_UNEXPECTED_FILE', 'image'), false);
            }
        },
        limits : { fileSize : 2 * 1024 * 1024},
        storage : diskStorage({
            destination : './uploads',
            filename : function (req, file, cb) {
                cb(null, file.originalname)
            },
        })
    }))
    @UsePipes(new ValidationPipe)
    insertInfo(
        @Body() info : UserOneDTO,
        @UploadedFile() file : Express.Multer.File,
    ) : object {
        return this.userOneService.insertInfo(info, file);
    }
    // URL = http://localhost:3000/UserOne/insertInfo

    @Get('showImage/:filename')
    showImage(
        @Param('filename') filename : string, 
        @Res() res
    ) {
        return res.sendFile(filename, {root: './uploads'});
    }
    // URL = http://localhost:3000/UserOne/showImage/Nid.png
}