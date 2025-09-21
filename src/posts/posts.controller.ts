/* eslint-disable prettier/prettier */
import { Body, Controller, Get, Post, ValidationPipe } from "@nestjs/common";
import { CreatePostDto } from "./dtos/create-post.dto";
import { PostsService } from "./posts.service";

@Controller('posts')
export class PostController {
      constructor(
        // Injecting Users Service
        private readonly postsService: PostsService,
      ) {}

    @Post()
    public createPost(
        @Body(new ValidationPipe()) createPostDto: CreatePostDto,
    ){
        console.log('create',createPostDto)
        return this.postsService.createPost(createPostDto)
    }

    @Get()
        public getPosts() {
        return this.postsService.findAll();
      }
}