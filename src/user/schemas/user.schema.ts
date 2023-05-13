import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type UserDocument = HydratedDocument<User>;

@Schema()
export class User {
  @Prop({
    required: true,
    minlength: 3,
    maxlength: 30,
  })
  name: string;

  @Prop()
  username: string;

  @Prop()
  password: string;

  @Prop()
  email: string;

  @Prop({ default: Date.now() })
  createdAt: Date;

  @Prop({ default: Date.now() })
  updatedAt: Date;
}

export const UserSchema = SchemaFactory.createForClass(User);
