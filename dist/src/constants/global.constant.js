"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MapFileTypeToCategory = exports.PrefixType = void 0;
const enums_1 = require("../enums");
exports.PrefixType = {
    USER: 'user',
};
exports.MapFileTypeToCategory = {
    audio: [enums_1.FileType.mp3, enums_1.FileType.wav],
    document: [enums_1.FileType.csv, enums_1.FileType.pdf, enums_1.FileType.xls, enums_1.FileType.xlsx],
    images: [enums_1.FileType.jpeg, enums_1.FileType.jpg, enums_1.FileType.png],
    video: [enums_1.FileType.mp4],
};
