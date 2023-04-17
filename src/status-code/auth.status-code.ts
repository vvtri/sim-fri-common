export const BASE_STATUS_CODE = 1000;

const AuthStatusCode: Record<string, number> = {
  INVALID_PASSWORD: BASE_STATUS_CODE + 1,
  INVALID_EMAIL: BASE_STATUS_CODE + 2,
};

Object.keys(AuthStatusCode).forEach((item) => {
  AuthStatusCode[item] += BASE_STATUS_CODE;
});

export { AuthStatusCode };
