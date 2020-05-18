"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function extractToken(headers) {
    let token = headers && headers.authorization ? headers.authorization : '';
    token = token.replace(/Bearer\s+/gm, '');
    return token;
}
exports.extractToken = extractToken;
//# sourceMappingURL=extractToken.util.js.map