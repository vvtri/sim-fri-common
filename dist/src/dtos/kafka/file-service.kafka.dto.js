"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FileUpdatedKafkaPayload = exports.FileCreatedKafkaPayload = void 0;
class FileCreatedKafkaPayload {
    constructor(data) {
        Object.assign(this, data);
    }
}
exports.FileCreatedKafkaPayload = FileCreatedKafkaPayload;
class FileUpdatedKafkaPayload {
    constructor(data) {
        Object.assign(this, data);
    }
}
exports.FileUpdatedKafkaPayload = FileUpdatedKafkaPayload;
