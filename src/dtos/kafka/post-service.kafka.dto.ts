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
  parent: Comment;
  mpath?: string;
  userId: number;
  userName: string;
  avatarUrl?: string;
  createdAt: Date;
  updatedAt: Date;
}

export class DeleteCommentKafkaPayload {
  id: number;
}

export class SaveReactPostKafkaPayload {
  id: number;
  type: PostReactionType;
  userId: number;
  userName: string;
  avatarUrl?: string;
  createdAt: Date;
  updatedAt: Date;
  postId: number;
  postContent: string;
}

export class DeleteReactPostKafkaPayload {
  id: number;
}

export class SaveReactCommentKafkaPayload {
  id: number;
  type: CommentReactionType;
  userId: number;
  userName: string;
  avatarUrl?: string;
  createdAt: Date;
  updatedAt: Date;
  commentId: number;
  commentContent: Comment;
}

export class DeleteReactCommentKafkaPayload {
  id: number;
}
