"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IsNumberLessThanOrEqual = exports.IsNumberLessThan = void 0;
const class_validator_1 = require("class-validator");
function IsNumberLessThan(property, validationOptions) {
    return function (object, propertyName) {
        (0, class_validator_1.registerDecorator)({
            name: 'IsNumberLessThan',
            target: object.constructor,
            propertyName: propertyName,
            constraints: [property],
            options: validationOptions,
            validator: {
                validate(value, args) {
                    const [propertyToCompare] = args.constraints;
                    const valueToCompare = args.object[propertyToCompare];
                    if (typeof value !== 'number' || typeof valueToCompare !== 'number')
                        return false;
                    return value < valueToCompare;
                },
                defaultMessage(args) {
                    return `invalid ${propertyName}`;
                },
            },
        });
    };
}
exports.IsNumberLessThan = IsNumberLessThan;
function IsNumberLessThanOrEqual(property, validationOptions) {
    return function (object, propertyName) {
        (0, class_validator_1.registerDecorator)({
            name: 'IsNumberLessThanOrEqual',
            target: object.constructor,
            propertyName: propertyName,
            constraints: [property],
            options: validationOptions,
            validator: {
                validate(value, args) {
                    const [propertyToCompare] = args.constraints;
                    const valueToCompare = args.object[propertyToCompare];
                    if (typeof value !== 'number' || typeof valueToCompare !== 'number')
                        return false;
                    return value <= valueToCompare;
                },
                defaultMessage(args) {
                    return `${propertyName} must less than or equal ${property}`;
                },
            },
        });
    };
}
exports.IsNumberLessThanOrEqual = IsNumberLessThanOrEqual;
