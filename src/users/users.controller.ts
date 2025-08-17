/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-redundant-type-constituents */
/* eslint-disable @typescript-eslint/await-thenable */

import { Body, Controller, Get, Param, Patch, Post, ValidationPipe } from '@nestjs/common';
import { CreateUserDto } from './dtos/create-user.dto';
import { PatchUserDto } from './dtos/patch-user.dto';
import { User } from 'src/schemas/users-schema';
import { UserService } from './users.services';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  // ✅ GET /users/:id → fetch user by ID
  @Get('/:id')
  async getUserById(@Param('id') id: string): Promise<User | null> {
    return this.userService.findById(id);
  }

  // ✅ GET /users → fetch all users
  @Get()
  async getAllUsers(): Promise<User[]> {
    return this.userService.findAll();
  }

  // ✅ POST /users → create new user
  @Post()
  async createUser(
    @Body(new ValidationPipe()) createUserDto: CreateUserDto,
  ): Promise<{ message: string; user: User }> {
    const user = await this.userService.create(createUserDto);
    return {
      message: 'User created successfully',
      user,
    };
  }

  // ✅ PATCH /users/:id → update user
  @Patch('/:id')
  async patchUser(
    @Param('id') id: string,
    @Body(new ValidationPipe()) patchUserDto: PatchUserDto,
  ): Promise<{ message: string; updatedUser: User|any }> {
    const updatedUser = await this.userService.updateUser(id, patchUserDto);
    return {
      message: `User's details updated successfully`,
      updatedUser,
    };
  }
}
