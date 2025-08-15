/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable prettier/prettier */
import {IsEmail, IsNotEmpty, IsOptional, IsString, MaxLength, MinLength} from 'class-validator';

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  @MinLength(4)
  @MaxLength(96)  
  firstName: string;

  @IsString()
  @IsOptional()
  @MinLength(3)
  @MaxLength(96)
  lastName?: string;

@IsNotEmpty()
@IsEmail()
  email: string;

  @IsString()
  @MinLength(8)
  password: string;
}
