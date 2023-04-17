"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceUnavailableExc = exports.InternalServerErrorExc = exports.ConflictExc = exports.ForbiddenExc = exports.UnAuthorizedExc = exports.BadRequestExc = exports.NotFoundExc = exports.ExpectationFailedExc = exports.CustomException = void 0;
class CustomException {
    constructor({ httpStatus, statusCode, }) {
        this.httpStatus = httpStatus;
        this.statusCode = statusCode;
    }
}
exports.CustomException = CustomException;
class ExpectationFailedExc extends CustomException {
    constructor({ statusCode, }) {
        super({ statusCode, httpStatus: 417 });
    }
}
exports.ExpectationFailedExc = ExpectationFailedExc;
class NotFoundExc extends CustomException {
    constructor({ statusCode, }) {
        super({ statusCode, httpStatus: 404 });
    }
}
exports.NotFoundExc = NotFoundExc;
class BadRequestExc extends CustomException {
    constructor({ statusCode, }) {
        super({ statusCode, httpStatus: 400 });
    }
}
exports.BadRequestExc = BadRequestExc;
class UnAuthorizedExc extends CustomException {
    constructor({ statusCode, }) {
        super({ statusCode, httpStatus: 401 });
    }
}
exports.UnAuthorizedExc = UnAuthorizedExc;
class ForbiddenExc extends CustomException {
    constructor({ statusCode, }) {
        super({ statusCode, httpStatus: 403 });
    }
}
exports.ForbiddenExc = ForbiddenExc;
class ConflictExc extends CustomException {
    constructor({ statusCode, }) {
        super({ statusCode, httpStatus: 409 });
    }
}
exports.ConflictExc = ConflictExc;
class InternalServerErrorExc extends CustomException {
    constructor({ statusCode, }) {
        super({ statusCode, httpStatus: 500 });
    }
}
exports.InternalServerErrorExc = InternalServerErrorExc;
class ServiceUnavailableExc extends CustomException {
    constructor({ statusCode, }) {
        super({ statusCode, httpStatus: 503 });
    }
}
exports.ServiceUnavailableExc = ServiceUnavailableExc;
