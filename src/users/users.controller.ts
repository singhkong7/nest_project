/* eslint-disable prettier/prettier */
import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';

@Controller('users')
export class UserController {
  @Get('/:id')
  public getUsers(@Param() params:any,@Query() query:any) {
    console.log("params",params,query)
    return 'Here is the list of users.';
  }
  @Post()
  public createUser(@Body() body:any){
    console.log('body',body)
    return 'You sent a post request for users'
  }
}
