export const BASE_STATUS_CODE = 1000;

const AuthStatusCode = {
  INVALID_PASSWORD: BASE_STATUS_CODE + 1,
  INVALID_EMAIL: BASE_STATUS_CODE + 2,
} as const;

Object.keys(AuthStatusCode).forEach((item) => {
  AuthStatusCode[item] += BASE_STATUS_CODE;
});

export { AuthStatusCode };
