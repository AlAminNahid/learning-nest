import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { UserOneModule } from './userOne/userOne.module';

@Module({
  imports: [UserModule, UserOneModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
