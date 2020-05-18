import * as config from 'config';
import { decode, sign, verify } from 'jsonwebtoken';

const JWT_SECRET: string = config.JWT.SECRET;

export class JWTHelper {
    public async sign(payload: any, options: any) {
        return sign(payload, JWT_SECRET, options);
    }
    public async verify(token: string) {
        return verify(token, JWT_SECRET);
    }

    public async makeAccessToken(data: any) {
        const configAccess = {
            payload: {
                ...data
            },
            options: {
                algorithm: 'HS512',
                subject: data.username,
                expiresIn: '30m'
            }
        };
        const token = await this.sign(configAccess.payload, configAccess.options);
        const tokenData = decode(token);
        const exp = tokenData.exp;
        return { token, exp };
    }
}
