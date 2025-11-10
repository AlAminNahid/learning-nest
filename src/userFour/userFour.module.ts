import { Module } from "@nestjs/common";
import { UserFourController } from "./userFour.controller";
import { UserFourService } from "./userFour.service";

@Module({
    imports : [],
    controllers : [UserFourController],
    providers : [UserFourService]
})
export class UserThreeModule{}