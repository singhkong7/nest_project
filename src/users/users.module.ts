/* eslint-disable prettier/prettier */
import {Module} from "@nestjs/common";
import { UserController } from "./users.controller";
import { UsersService } from "./providers/users.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { User } from "./user.entity";

@Module({
    controllers:[UserController],
    providers:[UsersService],
    exports:[UsersService],
    imports:[TypeOrmModule.forFeature([User])]
})
export class UserModule {}