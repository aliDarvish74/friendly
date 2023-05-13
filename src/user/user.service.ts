import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UserDocument } from './schemas/user.schema';
import { CreateUserDto } from './dto/user-create.dto';

@Injectable()
export class UserService {
  constructor(@InjectModel('User') private UserModel: Model<UserDocument>) {}

  public async findAllUsers(): Promise<UserDocument[]> {
    return this.UserModel.find({});
  }

  public async findUserByUsername(username: string): Promise<UserDocument> {
    return this.UserModel.findOne({ username });
  }

  public async createUser(userInfo: CreateUserDto): Promise<UserDocument> {
    return this.UserModel.create(userInfo);
  }
}
