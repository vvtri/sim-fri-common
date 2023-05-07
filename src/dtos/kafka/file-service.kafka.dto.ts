import { AudienceType, FileType, NonFunctionProperties } from 'shared';

export class FileCreatedKafkaPayload {
  id: number;
  key: string;
  bucket: string;
  size: string;
  audienceType: AudienceType;
  fileType: FileType;
  userId: number;

  constructor(data: NonFunctionProperties<FileCreatedKafkaPayload>) {
    Object.assign(this, data);
  }
}

export class FileUpdatedKafkaPayload {
  id: number;
  key: string;
  bucket: string;
  size: string;
  audienceType: AudienceType;
  fileType: FileType;
  userId: number;

  constructor(data: NonFunctionProperties<FileUpdatedKafkaPayload>) {
    Object.assign(this, data);
  }
}
