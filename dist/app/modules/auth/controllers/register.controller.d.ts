import { UserService } from '../../user/services/user.service';
import { RegisterUserDto } from '../dtos/register-user.dto';
export declare class RegisterController {
    private readonly userService;
    constructor(userService: UserService);
    register(data: RegisterUserDto): Promise<any>;
}
