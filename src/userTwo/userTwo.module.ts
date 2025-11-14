import { Module } from "@nestjs/common";
import { UserTwoController } from "./userTwo.controller";
import { UserTwoService } from "./userTwo.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { UserTwoEntity } from "./userTwo.entity";

@Module({
    imports : [TypeOrmModule.forFeature([UserTwoEntity])],
    controllers : [UserTwoController],
    providers : [UserTwoService]
})
export class UserTwoModule{}