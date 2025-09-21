/* eslint-disable prettier/prettier */
import { IsArray, IsEnum, IsISO8601, IsJSON, IsNotEmpty, IsOptional, IsString, IsUrl, MaxLength, MinLength } from "class-validator";
import { postStatus } from "../enums/postStatus.enum";
import { postType } from "../enums/postType.enum";
import { CreatePostMetaOptionsDto } from "./create-posts-metaoptions.dto";


export class CreatePostDto{
    @IsString()
    @MinLength(4)
    @MaxLength(512)
    @IsNotEmpty()
    title:string;

    @IsEnum(postType)
    @IsNotEmpty()
    postType:postType;

     @IsString()
    @IsNotEmpty()
    @MaxLength(256)
    slug:string;

    @IsEnum(postStatus)
    @IsNotEmpty()
    status:postStatus;

    @IsString()
    @IsOptional()
    content?:string;

    @IsString()
    @IsOptional()
    @IsJSON()
    schema?:string;

    @IsString()
    @IsUrl()
    @MaxLength(1024)
    featureImageUrl?:string;

    @IsISO8601()
    @IsOptional()
    publishOn?:Date;

    @IsOptional()
    @IsArray()
    @IsString({each:true})
    @MinLength(3,{each:true})
    tags?:string[]

    @IsOptional()
    @IsArray()
    metaOptions:CreatePostMetaOptionsDto[]
}