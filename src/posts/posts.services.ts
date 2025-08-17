/* eslint-disable prettier/prettier */

import { Injectable,NotFoundException } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Posts, PostDocument} from "src/schemas/posts-schema";
import { CreatePostDto } from "./dtos/create-post.dto";
import { PatchPostDto} from "./dtos/patch-post.dto";

@Injectable()
export class PostService {
constructor(@InjectModel(Posts.name) private PostModel: Model<PostDocument>) {}

 // ✅ Create Post
  async create(createPostDto: CreatePostDto): Promise<Posts> {
    const newPost = new this.PostModel(createPostDto);
    return newPost.save();
  }

  // ✅ Get all Post
  async findAll(): Promise<Posts[]> {
    return this.PostModel.find().exec();
  }

  // ✅ Get Post by ID
  async findById(id: string): Promise<Posts | null> {
    return this.PostModel.findById(id).exec();
  }

  // ✅ Update Post by ID
  async updatePost(id: string, patchPostDto:PatchPostDto): Promise<Posts> {
    const updatedPost = await this.PostModel.findByIdAndUpdate(
      id,
      { $set: patchPostDto },
      { new: true, runValidators: true },
    );

    if (!updatedPost) {
      throw new NotFoundException(`Post with ID ${id} not found`);
    }

    return updatedPost;
  }
}