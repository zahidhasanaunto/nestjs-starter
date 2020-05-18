export declare class BcryptHelper {
    hashString(plainText: string, saltRounds?: number): Promise<string>;
    compareHash(plainText: string, hashString: string): Promise<boolean>;
}
