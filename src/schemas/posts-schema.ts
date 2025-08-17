/* eslint-disable prettier/prettier */
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { CreatePostMetaOptionsDto } from 'src/posts/dtos/create-posts-metaoptions.dto';
import { postStatus } from 'src/posts/enums/postStatus.enum';
import { postType } from 'src/posts/enums/postType.enum';

export type PostDocument= Posts & Document;

@Schema({timestamps:true})
export class Posts {
    @Prop()
    title:string;

    @Prop()
    postType:postType;

    @Prop()
    slug:string;

    @Prop()
    status:postStatus;

    @Prop()
    content?:string;

    @Prop(
        {
    type: String,
    validate: {
      validator: (value: string) => {
        try {
          JSON.parse(value);
          return true;
        } catch {
          return false;
        }
      },
      message: 'schema must be a valid JSON string',
    },
  }
    )
    schema:string;

    @Prop()
    featureImageUrl:string;

    @Prop({ type: Date })
    publishOn:Date;

    @Prop()
    tags?:string[]

    @Prop()
    metaOptions:CreatePostMetaOptionsDto[]
}

export const PostSchema = SchemaFactory.createForClass(Posts);