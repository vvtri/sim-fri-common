"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostUpdatedKafkaPayload = exports.PostCreatedKafkaPayload = exports.PostFileCreatedKafkaPayload = void 0;
class PostFileCreatedKafkaPayload {
    constructor(data) {
        Object.assign(this, data);
    }
}
exports.PostFileCreatedKafkaPayload = PostFileCreatedKafkaPayload;
class PostCreatedKafkaPayload {
    constructor(data) {
        Object.assign(this, data);
    }
}
exports.PostCreatedKafkaPayload = PostCreatedKafkaPayload;
class PostUpdatedKafkaPayload extends PostCreatedKafkaPayload {
}
exports.PostUpdatedKafkaPayload = PostUpdatedKafkaPayload;
