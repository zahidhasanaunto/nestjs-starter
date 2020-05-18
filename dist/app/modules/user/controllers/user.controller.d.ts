import { BaseController } from '../../../base/base.controller';
import { CreateUserDto } from '../dtos/create-user.dto';
import { UserService } from '../services/user.service';
export declare class UserController extends BaseController<CreateUserDto> {
    private readonly service;
    private relations;
    constructor(service: UserService);
}
