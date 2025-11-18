import { Injectable } from "@nestjs/common";

@Injectable()
export class UserCategoryThreeService{
    welcomeGreetings() : string {
        return "Hello UserCategoryThree";
    }
}