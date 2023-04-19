"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthStatusCode = exports.BASE_STATUS_CODE = void 0;
exports.BASE_STATUS_CODE = 1000;
const AuthStatusCode = {
    INVALID_PASSWORD: exports.BASE_STATUS_CODE + 1,
    INVALID_EMAIL: exports.BASE_STATUS_CODE + 2,
    USER_NOT_FOUND: exports.BASE_STATUS_CODE + 3,
    USER_VERIFIED: exports.BASE_STATUS_CODE + 4,
    TOO_MANY_VERIFICATION_REQUEST: exports.BASE_STATUS_CODE + 5,
    USER_NOT_VERIFIED: exports.BASE_STATUS_CODE + 6,
    USER_EXISTED: exports.BASE_STATUS_CODE + 7,
    USER_TOKEN_NOT_FOUND: exports.BASE_STATUS_CODE + 8,
    INVALID_USER_TOKEN: exports.BASE_STATUS_CODE + 9,
};
exports.AuthStatusCode = AuthStatusCode;
Object.keys(AuthStatusCode).forEach((item) => {
    AuthStatusCode[item] += exports.BASE_STATUS_CODE;
});
