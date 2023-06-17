"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteCommentReactionKafkaPayload = exports.SaveCommentReactionKafkaPayload = exports.DeletePostReactionKafkaPayload = exports.SavePostReactionKafkaPayload = exports.DeleteCommentKafkaPayload = exports.SaveCommentKafkaPayload = exports.PostUpdatedKafkaPayload = exports.PostCreatedKafkaPayload = exports.PostFileCreatedKafkaPayload = void 0;
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
class SaveCommentKafkaPayload {
}
exports.SaveCommentKafkaPayload = SaveCommentKafkaPayload;
class DeleteCommentKafkaPayload {
}
exports.DeleteCommentKafkaPayload = DeleteCommentKafkaPayload;
class SavePostReactionKafkaPayload {
}
exports.SavePostReactionKafkaPayload = SavePostReactionKafkaPayload;
class DeletePostReactionKafkaPayload {
}
exports.DeletePostReactionKafkaPayload = DeletePostReactionKafkaPayload;
class SaveCommentReactionKafkaPayload {
}
exports.SaveCommentReactionKafkaPayload = SaveCommentReactionKafkaPayload;
class DeleteCommentReactionKafkaPayload {
}
exports.DeleteCommentReactionKafkaPayload = DeleteCommentReactionKafkaPayload;
