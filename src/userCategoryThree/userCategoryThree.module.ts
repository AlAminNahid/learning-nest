import { Module } from "@nestjs/common";
import { UserCategoryThreeController } from "./userCategoryThree.controller";
import { UserCategoryThreeService } from "./userCategoryThree.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { UserCategoryThreeEntity } from "./userCategoryThree.entity";

@Module({
    imports : [TypeOrmModule.forFeature([UserCategoryThreeEntity])],
    controllers : [UserCategoryThreeController],
    providers : [UserCategoryThreeService]
})
export class UserCategoryThreeModule{}