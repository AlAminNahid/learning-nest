import { Module } from "@nestjs/common";
import { UserTwoController } from "./userTwo.controller";
import { UserTwoService } from "./userTwo.service";

@Module({
    imports : [],
    controllers : [UserTwoController],
    providers : [UserTwoService]
})
export class UserTwoModule{}