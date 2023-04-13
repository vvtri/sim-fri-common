"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NamingStrategy = void 0;
const typeorm_1 = require("typeorm");
const utils_1 = require("utils");
class NamingStrategy extends typeorm_1.DefaultNamingStrategy {
    tableName(targetName, userSpecifiedName) {
        return userSpecifiedName || (0, utils_1.camelToSnakeCase)(targetName);
    }
    columnName(propertyName, customName, embeddedPrefixes) {
        return customName || (0, utils_1.camelToSnakeCase)(propertyName);
    }
    joinColumnName(relationName, referencedColumnName) {
        return `${(0, utils_1.camelToSnakeCase)(relationName)}_id`;
    }
}
exports.NamingStrategy = NamingStrategy;
