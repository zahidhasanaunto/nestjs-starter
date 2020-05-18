import { User } from '../../user/entities/user.entity';
import { LoginUserDto } from '../dtos/login-user.dto';
import { UserService } from './../../user/services/user.service';
import { BcryptHelper, JWTHelper } from '../../../helpers';
export declare class LoginController {
    private readonly userService;
    bcryptHelper: BcryptHelper;
    jwtHelper: JWTHelper;
    constructor(userService: UserService);
    login(data: LoginUserDto): Promise<{
        success: boolean;
        error: string;
        message: string;
        data?: undefined;
    } | {
        success: boolean;
        message: string;
        data: {
            accessToken: {
                token: any;
                exp: any;
            };
            user: User;
        };
        error?: undefined;
    }>;
}
