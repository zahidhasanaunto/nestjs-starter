import { Column, Entity } from 'typeorm';
import { BaseEntity } from '../../../base/base.entity';

@Entity()
export class User extends BaseEntity {

  @Column({ unique: true })
  username: string;

  @Column({ select: false })
  password: string;

  constructor() {
    super();
  }
}
