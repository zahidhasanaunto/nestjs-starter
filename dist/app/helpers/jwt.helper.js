"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config = require("config");
const jsonwebtoken_1 = require("jsonwebtoken");
const JWT_SECRET = config.JWT.SECRET;
class JWTHelper {
    async sign(payload, options) {
        return jsonwebtoken_1.sign(payload, JWT_SECRET, options);
    }
    async verify(token) {
        return jsonwebtoken_1.verify(token, JWT_SECRET);
    }
    async makeAccessToken(data) {
        const configAccess = {
            payload: Object.assign({}, data),
            options: {
                algorithm: 'HS512',
                subject: data.username,
                expiresIn: '30m'
            }
        };
        const token = await this.sign(configAccess.payload, configAccess.options);
        const tokenData = jsonwebtoken_1.decode(token);
        const exp = tokenData.exp;
        return { token, exp };
    }
}
exports.JWTHelper = JWTHelper;
//# sourceMappingURL=jwt.helper.js.map