import { Controller } from '@nestjs/common';
import { BaseController } from '../../../base/base.controller';
import { CreateUserDto } from '../dtos/create-user.dto';
import { UserService } from '../services/user.service';

@Controller('users')
export class UserController extends BaseController<CreateUserDto> {

  private relations: string[] = [];

  constructor(private readonly service: UserService) {
    super(service, []);
  }
}
