import { compare, hash } from "bcryptjs";
import * as config from 'config';

const SALT_ROUNDS: number = config.JWT.SALT_ROUNDS || 10

export class BcryptHelper {
    public async hashString(
        plainText: string,
        saltRounds: number = SALT_ROUNDS,
    ): Promise<string> {
        return hash(plainText, saltRounds);
    }

    public async compareHash(
        plainText: string,
        hashString: string,
    ): Promise<boolean> {
        return compare(plainText, hashString);
    }
}
