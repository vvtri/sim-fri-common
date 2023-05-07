import { AudienceType, FileType, NonFunctionProperties } from 'shared';
export declare class FileCreatedKafkaPayload {
    id: number;
    key: string;
    bucket: string;
    size: string;
    audienceType: AudienceType;
    fileType: FileType;
    userId: number;
    constructor(data: NonFunctionProperties<FileCreatedKafkaPayload>);
}
export declare class FileUpdatedKafkaPayload {
    id: number;
    key: string;
    bucket: string;
    size: string;
    audienceType: AudienceType;
    fileType: FileType;
    userId: number;
    constructor(data: NonFunctionProperties<FileUpdatedKafkaPayload>);
}
