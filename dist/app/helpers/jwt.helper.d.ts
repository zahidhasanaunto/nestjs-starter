export declare class JWTHelper {
    sign(payload: any, options: any): Promise<any>;
    verify(token: string): Promise<any>;
    makeAccessToken(data: any): Promise<{
        token: any;
        exp: any;
    }>;
}
