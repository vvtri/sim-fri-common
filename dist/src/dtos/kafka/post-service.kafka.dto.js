"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteReactCommentKafkaPayload = exports.SaveReactCommentKafkaPayload = exports.DeleteReactPostKafkaPayload = exports.SaveReactPostKafkaPayload = exports.DeleteCommentKafkaPayload = exports.SaveCommentKafkaPayload = exports.PostUpdatedKafkaPayload = exports.PostCreatedKafkaPayload = exports.PostFileCreatedKafkaPayload = void 0;
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
class SaveReactPostKafkaPayload {
}
exports.SaveReactPostKafkaPayload = SaveReactPostKafkaPayload;
class DeleteReactPostKafkaPayload {
}
exports.DeleteReactPostKafkaPayload = DeleteReactPostKafkaPayload;
class SaveReactCommentKafkaPayload {
}
exports.SaveReactCommentKafkaPayload = SaveReactCommentKafkaPayload;
class DeleteReactCommentKafkaPayload {
}
exports.DeleteReactCommentKafkaPayload = DeleteReactCommentKafkaPayload;
