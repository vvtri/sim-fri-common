import { HttpStatus } from '@nestjs/common';
import { NonFunctionProperties } from 'shared';

export abstract class CustomException {
  httpStatus: HttpStatus;
  statusCode: number;

  constructor({
    httpStatus,
    statusCode,
  }: NonFunctionProperties<CustomException>) {
    this.httpStatus = httpStatus;
    this.statusCode = statusCode;
  }
}

export class ExpectationFailedExc extends CustomException {
  constructor({
    statusCode,
  }: NonFunctionProperties<Omit<CustomException, 'httpStatus'>>) {
    super({ statusCode, httpStatus: 417 });
  }
}

export class NotFoundExc extends CustomException {
  constructor({
    statusCode,
  }: NonFunctionProperties<Omit<CustomException, 'httpStatus'>>) {
    super({ statusCode, httpStatus: 404 });
  }
}

export class BadRequestExc extends CustomException {
  constructor({
    statusCode,
  }: NonFunctionProperties<Omit<CustomException, 'httpStatus'>>) {
    super({ statusCode, httpStatus: 400 });
  }
}

export class UnAuthorizedExc extends CustomException {
  constructor({
    statusCode,
  }: NonFunctionProperties<Omit<CustomException, 'httpStatus'>>) {
    super({ statusCode, httpStatus: 401 });
  }
}

export class ForbiddenExc extends CustomException {
  constructor({
    statusCode,
  }: NonFunctionProperties<Omit<CustomException, 'httpStatus'>>) {
    super({ statusCode, httpStatus: 403 });
  }
}

export class ConflictExc extends CustomException {
  constructor({
    statusCode,
  }: NonFunctionProperties<Omit<CustomException, 'httpStatus'>>) {
    super({ statusCode, httpStatus: 409 });
  }
}

export class InternalServerErrorExc extends CustomException {
  constructor({
    statusCode,
  }: NonFunctionProperties<Omit<CustomException, 'httpStatus'>>) {
    super({ statusCode, httpStatus: 500 });
  }
}

export class ServiceUnavailableExc extends CustomException {
  constructor({
    statusCode,
  }: NonFunctionProperties<Omit<CustomException, 'httpStatus'>>) {
    super({ statusCode, httpStatus: 503 });
  }
}
