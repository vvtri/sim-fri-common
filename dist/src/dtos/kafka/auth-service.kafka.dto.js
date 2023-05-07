"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserUpdated = exports.UserCreated = exports.UserStatus = void 0;
var UserStatus;
(function (UserStatus) {
    UserStatus["ACTIVE"] = "ACTIVE";
    UserStatus["UNVERIFIED"] = "UNVERIFIED";
})(UserStatus = exports.UserStatus || (exports.UserStatus = {}));
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
