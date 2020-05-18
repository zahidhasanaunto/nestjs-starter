"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function CleanParams() {
    return (target, key, descriptor) => {
        const original = descriptor.value;
        descriptor.value = function (...args) {
            Object.keys(args[0]).forEach(_key => (args[0][_key] === null ||
                args[0][_key] === "null" ||
                args[0][_key] === "" ||
                args[0][_key] === undefined ||
                args[0][_key] === "undefined") &&
                delete args[0][_key]);
            const result = original.apply(this, args);
            return result;
        };
        return descriptor;
    };
}
exports.CleanParams = CleanParams;
//# sourceMappingURL=CleanParams.js.map