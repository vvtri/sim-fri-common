import { AudienceType, FileType, NonFunctionProperties } from 'shared';

export class FileCreated {
  id: number;
  key: string;
  bucket: string;
  size: string;
  audienceType: AudienceType;
  fileType: FileType;
  userId: number;

  constructor(data: NonFunctionProperties<FileCreated>) {
    Object.assign(this, data);
  }
}

export class FileUpdated {
  id: number;
  key: string;
  bucket: string;
  size: string;
  audienceType: AudienceType;
  fileType: FileType;
  userId: number;

  constructor(data: NonFunctionProperties<FileUpdated>) {
    Object.assign(this, data);
  }
}
