import { Repository } from 'typeorm';
import { BaseService } from '../../../base/base.service';
import { User } from '../entities/user.entity';
export declare class UserService extends BaseService<User> {
    private readonly usersRepository;
    constructor(usersRepository: Repository<User>);
}
