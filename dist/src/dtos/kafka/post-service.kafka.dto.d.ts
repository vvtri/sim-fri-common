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
    parent: Comment;
    mpath?: string;
    userId: number;
    createdAt: Date;
    updatedAt: Date;
}
export declare class DeleteCommentKafkaPayload {
    id: number;
}
export declare class SavePostReactionKafkaPayload {
    id: number;
    type: PostReactionType;
    userId: number;
    createdAt: Date;
    updatedAt: Date;
    postId: number;
    postContent: string;
}
export declare class DeletePostReactionKafkaPayload {
    id: number;
}
export declare class SaveCommentReactionKafkaPayload {
    id: number;
    type: CommentReactionType;
    userId: number;
    createdAt: Date;
    updatedAt: Date;
    commentId: number;
    commentContent: Comment;
}
export declare class DeleteCommentReactionKafkaPayload {
    id: number;
}
