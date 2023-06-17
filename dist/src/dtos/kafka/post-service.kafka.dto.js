"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteCommentReactionKafkaPayload = exports.SaveCommentReactionKafkaPayload = exports.DeleteCommentKafkaPayload = exports.SaveCommentKafkaPayload = exports.DeletePostReactionKafkaPayload = exports.SavePostReactionKafkaPayload = exports.PostUpdatedKafkaPayload = exports.PostCreatedKafkaPayload = exports.PostFileCreatedKafkaPayload = void 0;
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
class SavePostReactionKafkaPayload {
    constructor(data) {
        Object.assign(this, data);
    }
}
exports.SavePostReactionKafkaPayload = SavePostReactionKafkaPayload;
class DeletePostReactionKafkaPayload {
    constructor(data) {
        Object.assign(this, data);
    }
}
exports.DeletePostReactionKafkaPayload = DeletePostReactionKafkaPayload;
class SaveCommentKafkaPayload {
    constructor(data) {
        Object.assign(this, data);
    }
}
exports.SaveCommentKafkaPayload = SaveCommentKafkaPayload;
class DeleteCommentKafkaPayload {
    constructor(data) {
        Object.assign(this, data);
    }
}
exports.DeleteCommentKafkaPayload = DeleteCommentKafkaPayload;
class SaveCommentReactionKafkaPayload {
    constructor(data) {
        Object.assign(this, data);
    }
}
exports.SaveCommentReactionKafkaPayload = SaveCommentReactionKafkaPayload;
class DeleteCommentReactionKafkaPayload {
    constructor(data) {
        Object.assign(this, data);
    }
}
exports.DeleteCommentReactionKafkaPayload = DeleteCommentReactionKafkaPayload;
