import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '../user/entities/user.entity';
import { UserModule } from '../user/user.module';
import { LoginController } from './controllers/login.controller';
import { RegisterController } from './controllers/register.controller';

const CONTROLLERS = [
  LoginController,
  RegisterController
]

@Module({
  imports: [
    TypeOrmModule.forFeature([User]),
    UserModule
  ],
  controllers: [...CONTROLLERS],
})
export class AuthModule { }
