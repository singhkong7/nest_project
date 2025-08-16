/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable prettier/prettier */
import { Body, Controller, Get,Param, ParseIntPipe, Patch, Post, Query, ValidationPipe } from '@nestjs/common';
import { CreateUserDto } from './dtos/create-user.dto';
import { PatchUserDto } from './dtos/patch-user.dto';

@Controller('users')
export class UserController {
  @Get('/:id')
  public getUsers(
    @Param('id',ParseIntPipe) id:number|undefined,
  @Query() query:any
) {
    console.log("params",query)
    return 'Here is the list of users.';
  }
  @Post()
  public createUser(
   @Body(new ValidationPipe()) createUserDto: CreateUserDto,
){
    console.log('body',createUserDto)
    return 'You sent a post request for users'
  }
  @Patch()
  public patchUser(
    @Body(new ValidationPipe()) patchUserDto:PatchUserDto
  )
  {
    console.log('res',patchUserDto)
    return {
      message:`User's details updated successfully`,
      detail:patchUserDto
    }
  }
}
