"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserProfileUpdatedKafkaPayload = exports.UserProfileCreatedKafkaPayload = exports.UserUpdatedKafkaPayload = exports.UserCreatedKafkaPayload = void 0;
class UserCreatedKafkaPayload {
    constructor(data) {
        Object.assign(this, data);
    }
}
exports.UserCreatedKafkaPayload = UserCreatedKafkaPayload;
class UserUpdatedKafkaPayload extends UserCreatedKafkaPayload {
}
exports.UserUpdatedKafkaPayload = UserUpdatedKafkaPayload;
class UserProfileCreatedKafkaPayload {
    constructor(data) {
        Object.assign(this, data);
    }
}
exports.UserProfileCreatedKafkaPayload = UserProfileCreatedKafkaPayload;
class UserProfileUpdatedKafkaPayload extends UserProfileCreatedKafkaPayload {
}
exports.UserProfileUpdatedKafkaPayload = UserProfileUpdatedKafkaPayload;
