"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IsAfter = void 0;
const class_validator_1 = require("class-validator");
function IsAfter(property, validationOptions) {
    return function (object, propertyName) {
        (0, class_validator_1.registerDecorator)({
            name: 'IsAfter',
            target: object.constructor,
            propertyName: propertyName,
            constraints: [],
            options: validationOptions,
            validator: {
                validate(value, args) {
                    const valueToCompare = args.object[property];
                    return value > valueToCompare;
                },
                defaultMessage(args) {
                    return `${propertyName} must less than ${property}`;
                },
            },
        });
    };
}
exports.IsAfter = IsAfter;
