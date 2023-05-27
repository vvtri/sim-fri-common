import { AudienceType, NonFunctionProperties } from 'shared';

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
