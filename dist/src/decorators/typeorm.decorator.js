"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DecimalColumn = exports.PartialIndexWithSoftDelete = exports.UniqueWithSoftDelete = exports.ColumnDate = exports.ColumnString = void 0;
const typeorm_1 = require("typeorm");
const typeorm_helper_1 = require("../helpers/typeorm.helper");
function ColumnString(options) {
    return function (target, propertyKey) {
        (0, typeorm_1.Column)(Object.assign(Object.assign({}, options), { nullable: (options === null || options === void 0 ? void 0 : options.nullable) || false, length: (options === null || options === void 0 ? void 0 : options.length) || 255 }))(target, propertyKey);
    };
}
exports.ColumnString = ColumnString;
function ColumnDate(options) {
    return function (target, propertyKey) {
        (0, typeorm_1.Column)(Object.assign(Object.assign({}, options), { nullable: (options === null || options === void 0 ? void 0 : options.nullable) || false, type: 'timestamptz' }))(target, propertyKey);
    };
}
exports.ColumnDate = ColumnDate;
function UniqueWithSoftDelete(softDeletePropertyKey = 'deleted_at') {
    return function (target, propertyKey) {
        (0, typeorm_1.Index)({ unique: true, where: `${softDeletePropertyKey} is null` })(target, propertyKey);
    };
}
exports.UniqueWithSoftDelete = UniqueWithSoftDelete;
function PartialIndexWithSoftDelete(fields, options, softDeletePropertyKey = 'deleted_at') {
    return function (target) {
        (0, typeorm_1.Index)(fields, Object.assign(Object.assign({}, options), { where: `${softDeletePropertyKey} is null` }))(target);
    };
}
exports.PartialIndexWithSoftDelete = PartialIndexWithSoftDelete;
function DecimalColumn(_a) {
    var { precision, scale, name } = _a, other = __rest(_a, ["precision", "scale", "name"]);
    return function (target, propertyKey) {
        (0, typeorm_1.Column)(Object.assign(Object.assign({}, other), { type: 'decimal', precision,
            scale,
            name, transformer: new typeorm_helper_1.DecimalColumnTransformer() }))(target, propertyKey);
    };
}
exports.DecimalColumn = DecimalColumn;
