import { Module } from "@nestjs/common";
import { UserCategoryOneController } from "./userCategoryOne.controller";
import { UserCategoryOneService } from "./userCategoryOne.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { UserCategoryOneEntity } from "./userCategoryOne.entity";

@Module({
    imports : [TypeOrmModule.forFeature([UserCategoryOneEntity])],
    controllers : [UserCategoryOneController],
    providers : [UserCategoryOneService]
})
export class UserCategoryOneModule{}