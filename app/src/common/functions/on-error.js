"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.onError = void 0;
const exception_1 = require("../exceptions/exception");
function onError(error, req, res, next) {
    // console.error(error);
    let message;
    let redirectTo = error.redirectTo || '/error';
    if (error instanceof exception_1.Exception) {
        message = error.message;
    }
    else {
        message = 'Algo errado 🙁';
    }
    // res.redirect(`${redirectTo}?errorMessage=${message}`);
    throw error;
}
exports.onError = onError;
//# sourceMappingURL=on-error.js.map