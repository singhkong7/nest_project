/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-redundant-type-constituents */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */

import { Body, Controller, Get, Param, Patch, Post, ValidationPipe } from "@nestjs/common";
import { CreatePostDto } from "./dtos/create-post.dto";
import { PostService } from "./posts.services";
import { Posts } from "src/schemas/posts-schema";
import { PatchPostDto } from "./dtos/patch-post.dto";

@Controller('posts')
export class PostController {
    constructor(private readonly postService: PostService) {}
   
     // ✅ GET /users/:id → fetch user by ID
      @Get('/:id')
      async getUserById(@Param('id') id: string): Promise<Posts | null> {
        return this.postService.findById(id);
      }
    
      // ✅ GET /users → fetch all users
      @Get()
      async getAllUsers(): Promise<Posts[]> {
        return this.postService.findAll();
      }
    
      // ✅ POST /users → create new user
      @Post()
      async createUser(
        @Body(new ValidationPipe()) createPostDto: CreatePostDto,
      ): Promise<{ message: string; post: Posts }> {
        const post = await this.postService.create(createPostDto);
        return {
          message: 'User created successfully',
          post,
        };
      }
    
      // ✅ PATCH /users/:id → update user
      @Patch('/:id')
      async patchUser(
        @Param('id') id: string,
        @Body(new ValidationPipe()) patchPostDto:PatchPostDto,
      ): Promise<{ message: string; updatedUser: Posts|any }> {
        const updatedUser = await this.postService.updatePost(id, patchPostDto);
        return {
          message: `User's details updated successfully`,
          updatedUser,
        };
      }
}