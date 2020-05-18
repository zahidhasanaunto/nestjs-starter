import { Connection, EntitySubscriberInterface, InsertEvent, Repository } from 'typeorm';
import { User } from '../entities/user.entity';
export declare class UserSubscriber implements EntitySubscriberInterface {
    readonly connection: Connection;
    private readonly userRepository;
    constructor(connection: Connection, userRepository: Repository<User>);
    listenTo(): typeof User;
    beforeInsert(event: InsertEvent<User>): Promise<void>;
    private _hashPassword;
}
