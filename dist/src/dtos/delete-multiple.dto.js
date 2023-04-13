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
exports.DeleteMultipleByIdNumberReqDto = void 0;
const custom_validator_decorator_1 = require("../decorators/custom-validator.decorator");
class DeleteMultipleByIdNumberReqDto {
}
__decorate([
    (0, custom_validator_decorator_1.IsValidArrayNumber)({ minValue: 1, minSize: 1 }),
    __metadata("design:type", Array)
], DeleteMultipleByIdNumberReqDto.prototype, "ids", void 0);
exports.DeleteMultipleByIdNumberReqDto = DeleteMultipleByIdNumberReqDto;
