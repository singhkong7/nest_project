/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './users/users.module';
import { PostModule } from './posts/posts.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './users/user.entity';
import { Post } from './posts/post.entity';
import { TagsModule } from './tags/tags.module';
import { MetaOptionsModule } from './meta-options/meta-options.module';

@Module({
  imports: [UserModule,PostModule,TagsModule,TypeOrmModule.forRootAsync({
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
  }), TagsModule, MetaOptionsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
