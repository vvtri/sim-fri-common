export declare const BASE_STATUS_CODE = 1000;
declare const AuthStatusCode: {
    readonly INVALID_PASSWORD: number;
    readonly INVALID_EMAIL: number;
    readonly USER_NOT_FOUND: number;
    readonly USER_VERIFIED: number;
    readonly TOO_MANY_VERIFICATION_REQUEST: number;
    readonly USER_NOT_VERIFIED: number;
    readonly USER_EXISTED: number;
    readonly USER_TOKEN_NOT_FOUND: number;
    readonly INVALID_USER_TOKEN: number;
};
export { AuthStatusCode };
