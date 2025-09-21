/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable prettier/prettier */
import { Body, Controller, Get,Patch, Post,ValidationPipe } from '@nestjs/common';
import { CreateUserDto } from './dtos/create-user.dto';
import { PatchUserDto } from './dtos/patch-user.dto';
import { UsersService } from './providers/users.service';

@Controller('users')
export class UserController {

   constructor(
    // Injecting Users Service
    private readonly usersService: UsersService,
  ) {}

  @Get()
    public getUsers() {
    return this.usersService.findAll();
  }



  @Post()
  public createUser(
   @Body(new ValidationPipe()) createUserDto: CreateUserDto,
){
    return this.usersService.createUser(createUserDto)
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
