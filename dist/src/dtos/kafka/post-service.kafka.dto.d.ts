import { AudienceType, NonFunctionProperties } from 'shared';
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
