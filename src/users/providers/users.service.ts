/* eslint-disable prettier/prettier */
import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { User } from "../user.entity";
import { Repository } from "typeorm";
import { CreateUserDto } from "../dtos/create-user.dto";
import { GetUsersParamDto } from "../dtos/get-user-params-dto";

@Injectable()
export class UsersService {
  constructor(
    /**
     * Injecting User repository into UsersService
     * */
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  public async createUser(createUserDto:CreateUserDto){
    const existingUser= await this.usersRepository.findOne({
        where:{email:createUserDto.email}
    });

    let newUser=this.usersRepository.create(createUserDto);
    newUser=await this.usersRepository.save(newUser);

    return newUser;

  }

   public findAll(
    // getUserParamDto: GetUsersParamDto,
    // limt: number,
    // page: number,
  ) {
    return this.usersRepository.find();
  }
}