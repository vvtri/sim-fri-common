"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IsDateMatchConstraint = void 0;
const class_validator_1 = require("class-validator");
function IsDateMatchConstraint({ compareFunc, getDateFunc, validationOptions, }) {
    return function (object, propertyName) {
        (0, class_validator_1.registerDecorator)({
            name: 'IsDateMatchConstraint',
            target: object.constructor,
            propertyName: propertyName,
            constraints: [],
            options: validationOptions,
            validator: {
                validate(value, args) {
                    const dateToCompare = getDateFunc();
                    return compareFunc(value, dateToCompare);
                },
                defaultMessage(args) {
                    return `Invalid ${propertyName}`;
                },
            },
        });
    };
}
exports.IsDateMatchConstraint = IsDateMatchConstraint;
