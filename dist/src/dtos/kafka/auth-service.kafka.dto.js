"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserUpdatedPayload = exports.UserCreatedPayload = void 0;
class UserCreatedPayload {
    constructor(data) {
        Object.assign(this, data);
    }
}
exports.UserCreatedPayload = UserCreatedPayload;
class UserUpdatedPayload {
    constructor(data) {
        Object.assign(this, data);
    }
}
exports.UserUpdatedPayload = UserUpdatedPayload;
