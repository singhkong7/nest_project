/* eslint-disable prettier/prettier */
import { Body, Controller, Post, ValidationPipe } from "@nestjs/common";
import { CreatePostDto } from "./dtos/create-post.dto";

@Controller('posts')
export class PostController {

    @Post()
    public createPost(
        @Body(new ValidationPipe()) createPostDto: CreatePostDto,
    ){
        console.log('create',createPostDto)
        return createPostDto
    }
}