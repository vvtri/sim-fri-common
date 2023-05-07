"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserUpdated = exports.UserCreated = void 0;
class UserCreated {
    constructor(data) {
        Object.assign(this, data);
    }
}
exports.UserCreated = UserCreated;
class UserUpdated {
    constructor(data) {
        Object.assign(this, data);
    }
}
exports.UserUpdated = UserUpdated;
