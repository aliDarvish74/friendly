import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
  ParseIntPipe,
} from '@nestjs/common';
import { CreateUserDto } from './dto/user-create.dto';
import { UpdateUserDto } from './dto/user-update.dto';
import { UserService } from './user.service';

@Controller('user')
export default class UserController {
  constructor(private readonly userSerivce: UserService) {}

  @Get()
  getUsers() {
    return this.userSerivce.findAllUsers();
  }

  @Get(':userId')
  getUser(@Param('userId', ParseIntPipe) userId: number) {
    return `User with id ${userId}`;
  }
  @Post()
  createUser(@Body() body: CreateUserDto) {
    return this.userSerivce.createUser(body);
  }

  @Put(':userId')
  updateUser(
    @Param('userId', ParseIntPipe) userId: number,
    @Body() updateUserDto: UpdateUserDto,
  ) {
    return `User with id ${userId} updated`;
  }
  @Delete(':userId')
  deleteUser(@Param('userId', ParseIntPipe) userId: number) {
    return `User with id ${userId} deleted`;
  }
}
