"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Exception = void 0;
class Exception extends Error {
    constructor(message, redirectTo) {
        super();
        this.message = message;
        this.redirectTo = redirectTo;
    }
}
exports.Exception = Exception;
//# sourceMappingURL=exception.js.map