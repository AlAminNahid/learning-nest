import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { UserOneModule } from './userOne/userOne.module';
import { UserTwoModule } from './userTwo/userTwo.module';
import { UserThreeModule } from './userFour/userFour.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserCategoryOneModule } from './userCategoryOne/userCategoryOne.module';
import { UserCategoryTwoModule } from './userCategoryTwo/userCategoryTwo.module';

@Module({
  imports: [UserModule, UserOneModule, UserTwoModule, UserThreeModule, UserCategoryOneModule, UserCategoryTwoModule, TypeOrmModule.forRoot({
    type : 'postgres',
    host : 'localhost',
    port : 5432,
    username : 'admin',
    password : 'root',
    database : 'learningNestJS',
    autoLoadEntities : true,
    synchronize : true
  })],
  controllers: [],
  providers: [],
})
export class AppModule {}
