import { AudienceType, CommentReactionType, NonFunctionProperties, PostReactionType } from 'shared';
export declare class PostFileCreatedKafkaPayload {
    fileIds: number[];
    constructor(data: NonFunctionProperties<PostCreatedKafkaPayload>);
}
export declare class PostCreatedKafkaPayload {
    id: number;
    content: string;
    audienceType: AudienceType;
    postFiles: PostFileCreatedKafkaPayload[];
    constructor(data: NonFunctionProperties<PostCreatedKafkaPayload>);
}
export declare class PostUpdatedKafkaPayload extends PostCreatedKafkaPayload {
}
export declare class SaveCommentKafkaPayload {
    id: number;
    content: string;
    postId: number;
    parentId: number;
    mpath?: string;
    userId: number;
    postOwnerId: number;
    createdAt: Date;
    updatedAt: Date;
    constructor(data: NonFunctionProperties<SaveCommentKafkaPayload>);
}
export declare class DeleteCommentKafkaPayload {
    id: number;
    constructor(data: NonFunctionProperties<DeleteCommentKafkaPayload>);
}
export declare class SavePostReactionKafkaPayload {
    id: number;
    type: PostReactionType;
    userId: number;
    createdAt: Date;
    updatedAt: Date;
    postId: number;
    postOwnerId: number;
    postContent: string;
    constructor(data: NonFunctionProperties<SavePostReactionKafkaPayload>);
}
export declare class DeletePostReactionKafkaPayload {
    id: number;
    constructor(data: NonFunctionProperties<DeletePostReactionKafkaPayload>);
}
export declare class SaveCommentReactionKafkaPayload {
    id: number;
    type: CommentReactionType;
    userId: number;
    createdAt: Date;
    updatedAt: Date;
    commentId: number;
    commentOwnerId: number;
    commentContent: Comment;
    constructor(data: NonFunctionProperties<SaveCommentReactionKafkaPayload>);
}
export declare class DeleteCommentReactionKafkaPayload {
    id: number;
    constructor(data: NonFunctionProperties<DeleteCommentReactionKafkaPayload>);
}
