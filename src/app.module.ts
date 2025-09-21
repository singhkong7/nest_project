/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './users/users.module';
import { PostModule } from './posts/posts.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './users/user.entity';
import { Post } from './posts/post.entity';

@Module({
  imports: [UserModule,PostModule,TypeOrmModule.forRootAsync({
    imports:[],
    inject:[],
    useFactory:()=>({
      type:'postgres',
      entities:[User,Post],
      synchronize:true,
      port:5432,
      username:'postgres',
      password:'Priyansh@12345',
      host:'localhost',
      database:'nestjs-blog'
    })
  })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
