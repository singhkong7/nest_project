/* eslint-disable prettier/prettier */
import {Module} from "@nestjs/common";
import { PostController } from "./posts.controller";


@Module({
    controllers:[PostController]
})
export class PostModule {}