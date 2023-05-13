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

@Controller('user')
export default class UserController {
  @Get()
  getUsers() {
    return 'All users';
  }
  @Get(':userId')
  getUser(@Param('userId', ParseIntPipe) userId: number) {
    return `User with id ${userId}`;
  }
  @Post()
  createUser(@Body() createUserDto: CreateUserDto) {
    return createUserDto;
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
