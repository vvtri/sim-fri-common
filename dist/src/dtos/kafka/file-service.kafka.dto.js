"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FileUpdated = exports.FileCreated = void 0;
class FileCreated {
    constructor(data) {
        Object.assign(this, data);
    }
}
exports.FileCreated = FileCreated;
class FileUpdated {
    constructor(data) {
        Object.assign(this, data);
    }
}
exports.FileUpdated = FileUpdated;
