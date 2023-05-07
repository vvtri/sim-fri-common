"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AudienceType = exports.FileType = exports.FileCategory = void 0;
var FileCategory;
(function (FileCategory) {
    FileCategory["IMAGE"] = "images";
    FileCategory["AUDIO"] = "audio";
    FileCategory["DOCUMENT"] = "document";
    FileCategory["VIDEO"] = "video";
})(FileCategory = exports.FileCategory || (exports.FileCategory = {}));
var FileType;
(function (FileType) {
    FileType["png"] = "png";
    FileType["jpg"] = "jpg";
    FileType["jpeg"] = "jpeg";
    FileType["pdf"] = "pdf";
    FileType["mp3"] = "mp3";
    FileType["mp4"] = "mp4";
    FileType["wav"] = "wav";
    FileType["xlsx"] = "xlsx";
    FileType["xls"] = "xls";
    FileType["csv"] = "csv";
})(FileType = exports.FileType || (exports.FileType = {}));
var AudienceType;
(function (AudienceType) {
    AudienceType["ONLY_ME"] = "ONLY_ME";
    AudienceType["FRIEND"] = "FRIEND";
    AudienceType["PUBLIC"] = "PUBLIC";
})(AudienceType = exports.AudienceType || (exports.AudienceType = {}));
