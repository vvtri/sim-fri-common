import { ArgumentsHost, Catch, ExceptionFilter } from '@nestjs/common';
import { HttpAdapterHost } from '@nestjs/core';
import { CustomException } from '../exceptions';

@Catch()
export class AllExceptionsFilter implements ExceptionFilter {
  constructor(private readonly httpAdapterHost: HttpAdapterHost) {}

  catch(exception: any, host: ArgumentsHost): void {
    // In certain situations `httpAdapter` might not be available in the
    // constructor method, thus we should resolve it here.

    const { httpAdapter } = this.httpAdapterHost;
    const ctx = host.switchToHttp();
    const path = httpAdapter.getRequestUrl(ctx.getRequest());
    let status: number = exception?.status || 500;
    let response: any = exception;

    console.log(`exception at ${path}: `, exception);

    if (exception instanceof CustomException) {
      status = exception.httpStatus;
      response = { statusCode: exception.statusCode };
    }

    httpAdapter.reply(ctx.getResponse(), exception, exception?.status || 500);
  }
}
