import { AudienceType, FileType, NonFunctionProperties } from 'shared';
export declare class FileCreated {
    id: number;
    key: string;
    bucket: string;
    size: string;
    audienceType: AudienceType;
    fileType: FileType;
    userId: number;
    constructor(data: NonFunctionProperties<FileCreated>);
}
export declare class FileUpdated {
    id: number;
    key: string;
    bucket: string;
    size: string;
    audienceType: AudienceType;
    fileType: FileType;
    userId: number;
    constructor(data: NonFunctionProperties<FileUpdated>);
}
