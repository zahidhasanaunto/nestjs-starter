import { UserNotFoundError, WrongPasswordError } from './../../../constants/error.constant';
import { User } from '../../user/entities/user.entity';
import { Body, Controller, Post } from '@nestjs/common';
import { LoginUserDto } from '../dtos/login-user.dto';
import { UserService } from './../../user/services/user.service';
import { getConnection } from "typeorm";
import { BcryptHelper, JWTHelper } from '../../../helpers'

@Controller('auth/login')
export class LoginController {

  bcryptHelper = new BcryptHelper();
  jwtHelper = new JWTHelper();

  constructor(private readonly userService: UserService) { }

  @Post()
  async login(
    @Body() data: LoginUserDto,

  ) {
    const connection = getConnection();

    const user = await connection
      .createQueryBuilder(User, 'user')
      .addSelect('user.password')
      .where('user.username = :username', { username: data.username })
      .getOne();

    if (!user) {
      return { success: false, error: UserNotFoundError, message: 'User Not Found' }
    }

    const isPasswordCorrect = await this.bcryptHelper.compareHash(data.password, user.password);

    if (!isPasswordCorrect) {
      return { success: false, error: WrongPasswordError, message: 'Password Not Matched' }
    }

    const token = await this.jwtHelper.makeAccessToken(user);

    return { success: true, message: 'User Login Success', data: { accessToken: token, user } };
  }
}
