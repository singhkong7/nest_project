/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './users/users.module';
import { PostModule } from './posts/posts.module';

@Module({
  imports: [UserModule,PostModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
