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

  constructor(data: NonFunctionProperties<SaveCommentKafkaPayload>) {
    Object.assign(this, data);
  }
}

export class DeleteCommentKafkaPayload {
  id: number;

  constructor(data: NonFunctionProperties<DeleteCommentKafkaPayload>) {
    Object.assign(this, data);
  }
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

  constructor(data: NonFunctionProperties<SavePostReactionKafkaPayload>) {
    Object.assign(this, data);
  }
}

export class DeletePostReactionKafkaPayload {
  id: number;

  constructor(data: NonFunctionProperties<DeletePostReactionKafkaPayload>) {
    Object.assign(this, data);
  }
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

  constructor(data: NonFunctionProperties<SaveCommentReactionKafkaPayload>) {
    Object.assign(this, data);
  }
}

export class DeleteCommentReactionKafkaPayload {
  id: number;

  constructor(data: NonFunctionProperties<DeleteCommentReactionKafkaPayload>) {
    Object.assign(this, data);
  }
}
