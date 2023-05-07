import { HttpStatus } from '@nestjs/common';
import { NonFunctionProperties } from 'shared';
export declare abstract class CustomException {
    httpStatus: HttpStatus;
    statusCode: number;
    constructor({ httpStatus, statusCode, }: NonFunctionProperties<CustomException>);
}
export declare class ExpectationFailedExc extends CustomException {
    constructor({ statusCode, }: NonFunctionProperties<Omit<CustomException, 'httpStatus'>>);
}
export declare class NotFoundExc extends CustomException {
    constructor({ statusCode, }: NonFunctionProperties<Omit<CustomException, 'httpStatus'>>);
}
export declare class BadRequestExc extends CustomException {
    constructor({ statusCode, }: NonFunctionProperties<Omit<CustomException, 'httpStatus'>>);
}
export declare class UnAuthorizedExc extends CustomException {
    constructor({ statusCode, }: NonFunctionProperties<Omit<CustomException, 'httpStatus'>>);
}
export declare class ForbiddenExc extends CustomException {
    constructor({ statusCode, }: NonFunctionProperties<Omit<CustomException, 'httpStatus'>>);
}
export declare class ConflictExc extends CustomException {
    constructor({ statusCode, }: NonFunctionProperties<Omit<CustomException, 'httpStatus'>>);
}
export declare class InternalServerErrorExc extends CustomException {
    constructor({ statusCode, }: NonFunctionProperties<Omit<CustomException, 'httpStatus'>>);
}
export declare class ServiceUnavailableExc extends CustomException {
    constructor({ statusCode, }: NonFunctionProperties<Omit<CustomException, 'httpStatus'>>);
}
