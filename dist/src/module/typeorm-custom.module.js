"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var TypeOrmCustomModule_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.TypeOrmCustomModule = void 0;
const common_1 = require("@nestjs/common");
const core_1 = require("@nestjs/core");
let TypeOrmCustomModule = TypeOrmCustomModule_1 = class TypeOrmCustomModule {
    static forFeature(repoClasses) {
        const providers = repoClasses.map((repoClass) => {
            return {
                inject: [core_1.ModuleRef],
                provide: repoClass,
                async useFactory(moduleRef) {
                    let repo = moduleRef.get(repoClass, { strict: false });
                    if (!repo)
                        repo = await moduleRef.create(repoClass);
                    return repo;
                },
            };
        });
        return {
            module: TypeOrmCustomModule_1,
            providers,
            exports: [...repoClasses],
        };
    }
};
TypeOrmCustomModule = TypeOrmCustomModule_1 = __decorate([
    (0, common_1.Module)({})
], TypeOrmCustomModule);
exports.TypeOrmCustomModule = TypeOrmCustomModule;
