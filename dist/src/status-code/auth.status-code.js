"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthStatusCode = exports.BASE_STATUS_CODE = void 0;
exports.BASE_STATUS_CODE = 1000;
const AuthStatusCode = {
    INVALID_PASSWORD: exports.BASE_STATUS_CODE + 1,
    INVALID_EMAIL: exports.BASE_STATUS_CODE + 2,
};
exports.AuthStatusCode = AuthStatusCode;
Object.keys(AuthStatusCode).forEach((item) => {
    AuthStatusCode[item] += exports.BASE_STATUS_CODE;
});
