import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { UserOneModule } from './userOne/userOne.module';
import { UserTwoModule } from './userTwo/userTwo.module';
import { UserThreeModule } from './userFour/userFour.module';

@Module({
  imports: [UserModule, UserOneModule, UserTwoModule, UserThreeModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
