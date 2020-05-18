import { CreateUserDto } from '../dtos/create-user.dto';
import { User } from '../entities/user.entity';
import { UsersService } from './services/user.service';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    create(createUserDto: CreateUserDto): Promise<User>;
    findAll(): Promise<User[]>;
    findOne(id: string): Promise<User>;
    remove(id: string): Promise<void>;
}
