import {
  AudienceType,
  CommentReactionType,
  NonFunctionProperties,
  PostReactionType,
} from 'shared';

export class PostFileCreatedKafkaPayload {
  fileIds: number[];

  constructor(data: NonFunctionProperties<PostCreatedKafkaPayload>) {
    Object.assign(this, data);
  }
}

export class PostCreatedKafkaPayload {
  id: number;
  content: string;
  audienceType: AudienceType;
  postFiles: PostFileCreatedKafkaPayload[];

  constructor(data: NonFunctionProperties<PostCreatedKafkaPayload>) {
    Object.assign(this, data);
  }
}

export class PostUpdatedKafkaPayload extends PostCreatedKafkaPayload {}

export class SaveCommentKafkaPayload {
  id: number;
  content: string;
  postId: number;
  parentId: number;
  mpath?: string;
  userId: number;
  postOwnerId: number;
  createdAt: Date;
  updatedAt: Date;
}

export class DeleteCommentKafkaPayload {
  id: number;
}

export class SavePostReactionKafkaPayload {
  id: number;
  type: PostReactionType;
  userId: number;
  createdAt: Date;
  updatedAt: Date;
  postId: number;
  postOwnerId: number;
  postContent: string;
}

export class DeletePostReactionKafkaPayload {
  id: number;
}

export class SaveCommentReactionKafkaPayload {
  id: number;
  type: CommentReactionType;
  userId: number;
  createdAt: Date;
  updatedAt: Date;
  commentId: number;
  commentOwnerId: number;
  commentContent: Comment;
}

export class DeleteCommentReactionKafkaPayload {
  id: number;
}
