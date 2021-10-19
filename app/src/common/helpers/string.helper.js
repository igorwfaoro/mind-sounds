"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StringHelper = void 0;
class StringHelper {
    static short(value, size) {
        return value.length > size ? `${value.slice(0, size - 3)}...` : value;
    }
}
exports.StringHelper = StringHelper;
//# sourceMappingURL=string.helper.js.map