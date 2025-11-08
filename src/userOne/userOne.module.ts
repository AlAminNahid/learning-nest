import { Module } from "@nestjs/common";
import { UserOneController } from "./userOne.controller";
import { UserOneService } from "./userOne.service";

@Module({
    imports : [],
    controllers : [UserOneController],
    providers : [UserOneService]
})
export class UserOneModule{}