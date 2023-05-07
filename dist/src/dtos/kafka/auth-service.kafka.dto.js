"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserUpdatedKafkaPayload = exports.UserCreatedKafkaPayload = void 0;
class UserCreatedKafkaPayload {
    constructor(data) {
        Object.assign(this, data);
    }
}
exports.UserCreatedKafkaPayload = UserCreatedKafkaPayload;
class UserUpdatedKafkaPayload {
    constructor(data) {
        Object.assign(this, data);
    }
}
exports.UserUpdatedKafkaPayload = UserUpdatedKafkaPayload;
