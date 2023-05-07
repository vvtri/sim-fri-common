"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthStatusCode = void 0;
const AuthStatusCode = {
    INVALID_PASSWORD: 1001,
    INVALID_EMAIL: 1002,
    USER_NOT_FOUND: 1003,
    USER_VERIFIED: 1004,
    TOO_MANY_VERIFICATION_REQUEST: 1005,
    USER_NOT_VERIFIED: 1006,
    USER_EXISTED: 1007,
    USER_TOKEN_NOT_FOUND: 1008,
    INVALID_USER_TOKEN: 1009,
    INVALID_ACCESS_TOKEN: 1010,
    INVALID_REFRESH_TOKEN: 1011,
    ACCESS_TOKEN_EXPIRES: 1011,
};
exports.AuthStatusCode = AuthStatusCode;
