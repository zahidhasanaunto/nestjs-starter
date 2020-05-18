import { InjectConnection, InjectRepository } from '@nestjs/typeorm';
import Container from 'typedi';
import { Connection, EntitySubscriberInterface, EventSubscriber, InsertEvent, Repository } from 'typeorm';
import { BcryptHelper } from '../../../helpers/bcrypt.helper';
import { User } from '../entities/user.entity';

@EventSubscriber()
export class UserSubscriber implements EntitySubscriberInterface {

    constructor(
        @InjectConnection() readonly connection: Connection,
        @InjectRepository(User) private readonly userRepository: Repository<User>,
    ) {
        connection.subscribers.push(this);
    }

    listenTo() {
        return User;
    }

    public async beforeInsert(event: InsertEvent<User>) {
        event.entity.password = await this._hashPassword(event.entity.password);
    }

    private async _hashPassword(password: any) {
        const bcryptHelper = Container.get(BcryptHelper);
        return bcryptHelper.hashString(password);
    }

}