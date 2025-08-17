/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './users/users.module';
import { PostModule } from './posts/posts.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [UserModule,PostModule,MongooseModule.forRoot('mongodb://localhost:27017/my_nest_project')],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
