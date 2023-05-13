import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { AppService } from './app.service';
import userModule from './user/user.module';

@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost/friendly'), userModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
