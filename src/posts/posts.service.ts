/* eslint-disable prettier/prettier */
import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Post } from "./post.entity";
import { Repository } from "typeorm";
import { CreatePostDto } from "./dtos/create-post.dto";

@Injectable()
export class PostsService {
    constructor(
          @InjectRepository(Post)
        private postRepository:Repository<Post>
    ){}

  public async createPost(createPostDto:CreatePostDto){
     let newPost=this.postRepository.create(createPostDto);
    newPost=await this.postRepository.save(newPost);

    return newPost;
  }
   public findAll(
    // getUserParamDto: GetUsersParamDto,
    // limt: number,
    // page: number,
  ) {
    return this.postRepository.find();
  }  
}