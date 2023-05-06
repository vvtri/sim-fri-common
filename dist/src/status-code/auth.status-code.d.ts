declare const AuthStatusCode: {
    readonly INVALID_PASSWORD: 1001;
    readonly INVALID_EMAIL: 1002;
    readonly USER_NOT_FOUND: 1003;
    readonly USER_VERIFIED: 1004;
    readonly TOO_MANY_VERIFICATION_REQUEST: 1005;
    readonly USER_NOT_VERIFIED: 1006;
    readonly USER_EXISTED: 1007;
    readonly USER_TOKEN_NOT_FOUND: 1008;
    readonly INVALID_USER_TOKEN: 1009;
};
export { AuthStatusCode };
