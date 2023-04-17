"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NamingStrategy = void 0;
const index_util_1 = require("src/utils/index.util");
const typeorm_1 = require("typeorm");
class NamingStrategy extends typeorm_1.DefaultNamingStrategy {
    tableName(targetName, userSpecifiedName) {
        return userSpecifiedName || (0, index_util_1.camelToSnakeCase)(targetName);
    }
    columnName(propertyName, customName, embeddedPrefixes) {
        return customName || (0, index_util_1.camelToSnakeCase)(propertyName);
    }
    joinColumnName(relationName, referencedColumnName) {
        return `${(0, index_util_1.camelToSnakeCase)(relationName)}_id`;
    }
}
exports.NamingStrategy = NamingStrategy;
