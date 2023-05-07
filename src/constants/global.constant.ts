import { FileCategory, FileType } from '../enums';

export const PrefixType = {
  USER: 'user',
} as const;

export const MapFileTypeToCategory: Record<FileCategory, FileType[]> = {
  audio: [FileType.mp3, FileType.wav],
  document: [FileType.csv, FileType.pdf, FileType.xls, FileType.xlsx],
  images: [FileType.jpeg, FileType.jpg, FileType.png],
  video: [FileType.mp4],
};
