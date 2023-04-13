"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseEntityWithoutUpdateAndVersionAndDelete = exports.BaseEntityWithoutUpdateAndVersion = exports.BaseEntityWithoutUpdate = exports.BaseEntityWithoutDelete = exports.BaseEntityWithoutDeleteAndVersion = exports.BaseEntity = void 0;
const typeorm_1 = require("typeorm");
class BaseEntity {
}
__decorate([
    (0, typeorm_1.CreateDateColumn)({ name: 'created_at', type: 'timestamptz' }),
    __metadata("design:type", Date)
], BaseEntity.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({ name: 'updated_at', type: 'timestamptz' }),
    __metadata("design:type", Date)
], BaseEntity.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.DeleteDateColumn)({ name: 'deleted_at', type: 'timestamptz' }),
    __metadata("design:type", Date)
], BaseEntity.prototype, "deletedAt", void 0);
__decorate([
    (0, typeorm_1.VersionColumn)({ default: 1 }),
    __metadata("design:type", Number)
], BaseEntity.prototype, "version", void 0);
exports.BaseEntity = BaseEntity;
class BaseEntityWithoutDeleteAndVersion {
}
__decorate([
    (0, typeorm_1.CreateDateColumn)({ name: 'created_at', type: 'timestamptz' }),
    __metadata("design:type", Date)
], BaseEntityWithoutDeleteAndVersion.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({ name: 'updated_at', type: 'timestamptz', nullable: true }),
    __metadata("design:type", Date)
], BaseEntityWithoutDeleteAndVersion.prototype, "updatedAt", void 0);
exports.BaseEntityWithoutDeleteAndVersion = BaseEntityWithoutDeleteAndVersion;
class BaseEntityWithoutDelete {
}
__decorate([
    (0, typeorm_1.CreateDateColumn)({ name: 'created_at', type: 'timestamptz' }),
    __metadata("design:type", Date)
], BaseEntityWithoutDelete.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({ name: 'updated_at', type: 'timestamptz', nullable: true }),
    __metadata("design:type", Date)
], BaseEntityWithoutDelete.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.VersionColumn)({ default: 1 }),
    __metadata("design:type", Number)
], BaseEntityWithoutDelete.prototype, "version", void 0);
exports.BaseEntityWithoutDelete = BaseEntityWithoutDelete;
class BaseEntityWithoutUpdate {
}
__decorate([
    (0, typeorm_1.CreateDateColumn)({ name: 'created_at', type: 'timestamptz' }),
    __metadata("design:type", Date)
], BaseEntityWithoutUpdate.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.DeleteDateColumn)({ name: 'deleted_at', type: 'timestamptz' }),
    __metadata("design:type", Date)
], BaseEntityWithoutUpdate.prototype, "deletedAt", void 0);
__decorate([
    (0, typeorm_1.VersionColumn)({ default: 1 }),
    __metadata("design:type", Number)
], BaseEntityWithoutUpdate.prototype, "version", void 0);
exports.BaseEntityWithoutUpdate = BaseEntityWithoutUpdate;
class BaseEntityWithoutUpdateAndVersion {
}
__decorate([
    (0, typeorm_1.CreateDateColumn)({ name: 'created_at', type: 'timestamptz' }),
    __metadata("design:type", Date)
], BaseEntityWithoutUpdateAndVersion.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.DeleteDateColumn)({ name: 'deleted_at', type: 'timestamptz' }),
    __metadata("design:type", Date)
], BaseEntityWithoutUpdateAndVersion.prototype, "deletedAt", void 0);
exports.BaseEntityWithoutUpdateAndVersion = BaseEntityWithoutUpdateAndVersion;
class BaseEntityWithoutUpdateAndVersionAndDelete {
}
__decorate([
    (0, typeorm_1.CreateDateColumn)({ name: 'created_at', type: 'timestamptz' }),
    __metadata("design:type", Date)
], BaseEntityWithoutUpdateAndVersionAndDelete.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.DeleteDateColumn)({ name: 'deleted_at', type: 'timestamptz' }),
    __metadata("design:type", Date)
], BaseEntityWithoutUpdateAndVersionAndDelete.prototype, "deletedAt", void 0);
exports.BaseEntityWithoutUpdateAndVersionAndDelete = BaseEntityWithoutUpdateAndVersionAndDelete;
