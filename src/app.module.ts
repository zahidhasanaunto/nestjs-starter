import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import * as config from 'config';
import { AuthModule } from './app/modules/auth/auth.module';
import { UserModule } from './app/modules/user/user.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: config.DATABASE.TYPE,
      host: config.DATABASE.HOST,
      port: config.DATABASE.PORT,
      username: config.DATABASE.USER,
      password: config.DATABASE.PASSWORD,
      database: config.DATABASE.DATABASE,
      autoLoadEntities: true,
      synchronize: true,
    }),
    AuthModule,
    UserModule,
  ],
})
export class AppModule { }
