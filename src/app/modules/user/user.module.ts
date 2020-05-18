import { UserSubscriber } from './subscribers/user.subscriber';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { UserController } from './controllers/user.controller';
import { UserService } from './services/user.service';

const SERVICES = [
  UserService
]

const SUBSCRIBERS = [
  UserSubscriber
]

const CONTROLLERS = [
  UserController
]

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  providers: [
    ...SERVICES,
    ...SUBSCRIBERS
  ],
  controllers: [...CONTROLLERS],
  exports: [
    ...SERVICES
  ]
})
export class UserModule { }
