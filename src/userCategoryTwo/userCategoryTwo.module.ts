import { Module } from "@nestjs/common";
import { UserCategoryTwoController } from "./userCategoryTwo.controller";
import { UserCategoryTwoService } from "./userCategoryTwo.service"
import { TypeOrmModule } from "@nestjs/typeorm";
import { UserCategoryTwoEntity } from "./userCategoryTwo.entity"

@Module({
    imports : [TypeOrmModule.forFeature([UserCategoryTwoEntity])],
    controllers : [UserCategoryTwoController],
    providers : [UserCategoryTwoService]
})
export class UserCategoryTwoModule{}