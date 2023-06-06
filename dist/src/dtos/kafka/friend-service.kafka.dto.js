"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FriendRequestDeletedKafkaPayload = exports.FriendRequestUpdatedKafkaPayload = exports.FriendRequestCreatedKafkaPayload = void 0;
class FriendRequestCreatedKafkaPayload {
    constructor(data) {
        Object.assign(this, data);
    }
}
exports.FriendRequestCreatedKafkaPayload = FriendRequestCreatedKafkaPayload;
class FriendRequestUpdatedKafkaPayload extends FriendRequestCreatedKafkaPayload {
}
exports.FriendRequestUpdatedKafkaPayload = FriendRequestUpdatedKafkaPayload;
class FriendRequestDeletedKafkaPayload {
}
exports.FriendRequestDeletedKafkaPayload = FriendRequestDeletedKafkaPayload;
