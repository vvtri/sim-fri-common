"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IsArrayObjUniqueProperty = void 0;
const class_validator_1 = require("class-validator");
function IsArrayObjUniqueProperty(properties, validationOptions) {
    return function (object, propertyName) {
        (0, class_validator_1.registerDecorator)({
            name: 'IsArrayObjUniquePropertyValidator',
            target: object.constructor,
            propertyName: propertyName,
            constraints: properties,
            options: validationOptions,
            validator: {
                validate(data, validationArguments) {
                    const constraints = validationArguments === null || validationArguments === void 0 ? void 0 : validationArguments.constraints;
                    if (typeof data !== 'object')
                        throw new Error('IsArrayObjUniquePropertyValidator must be used on array');
                    if (!(constraints === null || constraints === void 0 ? void 0 : constraints.length))
                        throw new Error('Property to check unique must be supply');
                    for (const constraint of constraints) {
                        const list = [];
                        for (const item of data) {
                            if (list.includes(item[constraint]))
                                return false;
                            list.push(item[constraint]);
                        }
                    }
                    return true;
                },
                defaultMessage(validationArguments) {
                    const property = (validationArguments === null || validationArguments === void 0 ? void 0 : validationArguments.property) || '<unknown>';
                    const constraints = validationArguments === null || validationArguments === void 0 ? void 0 : validationArguments.constraints;
                    return `Duplicate ${constraints[0]} on ${property}`;
                },
            },
        });
    };
}
exports.IsArrayObjUniqueProperty = IsArrayObjUniqueProperty;
