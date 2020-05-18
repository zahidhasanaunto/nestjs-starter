"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const bcryptjs_1 = require("bcryptjs");
const config = require("config");
const SALT_ROUNDS = config.JWT.SALT_ROUNDS || 10;
class BcryptService {
    async hashString(plainText, saltRounds = SALT_ROUNDS) {
        return bcryptjs_1.hash(plainText, saltRounds);
    }
    async compareHash(plainText, hashString) {
        return bcryptjs_1.compare(plainText, hashString);
    }
}
exports.BcryptService = BcryptService;
//# sourceMappingURL=bcrypt.service.js.map