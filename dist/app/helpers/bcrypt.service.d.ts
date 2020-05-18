export declare class BcryptService {
    hashString(plainText: string, saltRounds?: number): Promise<string>;
    compareHash(plainText: string, hashString: string): Promise<boolean>;
}
