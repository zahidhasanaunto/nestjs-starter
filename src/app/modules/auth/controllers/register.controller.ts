import { Body, Controller, Post } from '@nestjs/common';
import { UserService } from '../../user/services/user.service';
import { RegisterUserDto } from '../dtos/register-user.dto';
import { UserAlreadyExistError, UserRegisterFailedError } from './../../../constants/error.constant';

@Controller('auth/register')
export class RegisterController {

  constructor(private readonly userService: UserService) { }

  @Post()
  async register(
    @Body() data: RegisterUserDto
  ) {
    const dupUser = await this.userService.findAll({ single: true, username: data.username });

    if (dupUser.data) {
      return { success: false, error: UserAlreadyExistError, message: 'User Already Exist' }
    }

    try {
      const user = await this.userService.insert(data);
      return user;
    } catch (err) {
      if (err.name === 'QueryFailedError') {
        return { success: false, error: UserAlreadyExistError, message: 'User Already Exist' }
      } else {
        return { success: false, error: UserRegisterFailedError, message: 'User Register Failed' }
      }
    }
  }
}
