"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IsValidEmail = exports.IsValidBoolean = exports.IsValidEnumString = exports.IsValidEnumNumber = exports.IsOnlyOneFieldExist = exports.IsRequireOneOf = exports.RequireAllField = exports.ExcludeAllField = exports.MatchField = exports.IsValidArrayEnum = exports.IsValidArrayObject = exports.IsValidArrayString = exports.IsValidArrayNumber = exports.IsValidObject = exports.IsValidUUID = exports.IsValidText = exports.IsValidNumberString = exports.IsValidNumber = exports.IsValidDate = exports.IsValidEnum = void 0;
const boolean_1 = require("boolean");
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
const index_util_1 = require("../utils/index.util");
function IsValidEnum(opts) {
    return function (target, propertyKey) {
        const { required = true } = opts;
        (0, class_validator_1.IsEnum)(opts.enum)(target, propertyKey);
        if (opts.default)
            (0, class_transformer_1.Transform)(({ value }) => (0, index_util_1.isNullOrUndefined)(value) ? opts.default : value)(target, propertyKey);
        if (required)
            (0, class_validator_1.IsNotEmpty)()(target, propertyKey);
        else
            (0, class_validator_1.IsOptional)()(target, propertyKey);
    };
}
exports.IsValidEnum = IsValidEnum;
function IsValidDate({ required = true, maxDate, minDate } = {
    required: true,
}) {
    return function (target, propertyKey) {
        (0, class_transformer_1.Type)(() => Date)(target, propertyKey);
        if (minDate)
            (0, class_validator_1.MinDate)(minDate)(target, propertyKey);
        if (maxDate)
            (0, class_validator_1.MaxDate)(maxDate)(target, propertyKey);
        if (required)
            (0, class_validator_1.IsDefined)()(target, propertyKey);
        else
            (0, class_validator_1.IsOptional)()(target, propertyKey);
    };
}
exports.IsValidDate = IsValidDate;
function IsValidNumber({ required = true, min, max } = {
    required: true,
}) {
    return function (target, propertyKey) {
        (0, class_validator_1.IsNumber)({})(target, propertyKey);
        (0, class_transformer_1.Type)(() => Number)(target, propertyKey);
        if (typeof min === 'number')
            (0, class_validator_1.Min)(min)(target, propertyKey);
        if (typeof max === 'number')
            (0, class_validator_1.Max)(max)(target, propertyKey);
        if (required)
            (0, class_validator_1.IsDefined)()(target, propertyKey);
        else
            (0, class_validator_1.IsOptional)()(target, propertyKey);
    };
}
exports.IsValidNumber = IsValidNumber;
function IsValidNumberString({ required = true, maxLength } = {
    required: true,
}) {
    return function (target, propertyKey) {
        (0, class_validator_1.IsNumberString)({})(target, propertyKey);
        if (maxLength)
            (0, class_validator_1.MaxLength)(maxLength)(target, propertyKey);
        if (required)
            (0, class_validator_1.IsDefined)()(target, propertyKey);
        else
            (0, class_validator_1.IsOptional)()(target, propertyKey);
    };
}
exports.IsValidNumberString = IsValidNumberString;
function IsValidText({ minLength, maxLength = 255, required = true, matches, trim = true, } = {
    required: true,
    maxLength: 255,
    trim: true,
}) {
    return function (target, propertyKey) {
        (0, class_validator_1.IsString)()(target, propertyKey);
        if (typeof minLength === 'number')
            (0, class_validator_1.MinLength)(minLength)(target, propertyKey);
        if (typeof maxLength == 'number')
            (0, class_validator_1.MaxLength)(maxLength)(target, propertyKey);
        if (trim) {
            (0, class_transformer_1.Transform)(({ value }) => value === null || value === void 0 ? void 0 : value.trim())(target, propertyKey);
        }
        if (matches)
            (0, class_validator_1.Matches)(matches)(target, propertyKey);
        if (required)
            (0, class_validator_1.IsNotEmpty)()(target, propertyKey);
        else
            (0, class_validator_1.IsOptional)()(target, propertyKey);
    };
}
exports.IsValidText = IsValidText;
function IsValidUUID({ required = true, version = '4' } = {
    required: true,
    version: '4',
}) {
    return function (target, propertyKey) {
        (0, class_validator_1.IsUUID)(version)(target, propertyKey);
        if (required)
            (0, class_validator_1.IsNotEmpty)()(target, propertyKey);
    };
}
exports.IsValidUUID = IsValidUUID;
function IsValidObject({ object, required = true } = {
    required: true,
}) {
    return function (target, propertyKey) {
        (0, class_validator_1.ValidateNested)()(target, propertyKey);
        if (typeof object === 'object')
            (0, class_transformer_1.Type)(() => object)(target, propertyKey);
        if (required)
            (0, class_validator_1.IsDefined)()(target, propertyKey);
        else
            (0, class_validator_1.IsOptional)()(target, propertyKey);
    };
}
exports.IsValidObject = IsValidObject;
function IsValidArrayNumber({ required = true, minSize, maxSize, unique, maxValue, minValue, } = {
    required: true,
    unique: true,
}) {
    return function (target, propertyKey) {
        (0, class_validator_1.IsNumber)({}, { each: true })(target, propertyKey);
        (0, class_transformer_1.Transform)(({ value }) => Array.isArray(value)
            ? value.map(Number)
            : (0, index_util_1.isNullOrUndefined)(value)
                ? []
                : [Number(value)])(target, propertyKey);
        if (typeof minSize === 'number')
            (0, class_validator_1.ArrayMinSize)(minSize)(target, propertyKey);
        if (typeof maxSize === 'number')
            (0, class_validator_1.ArrayMaxSize)(maxSize)(target, propertyKey);
        if (unique)
            (0, class_validator_1.ArrayUnique)()(target, propertyKey);
        if (typeof minValue === 'number')
            (0, class_validator_1.Min)(minValue, { each: true })(target, propertyKey);
        if (typeof maxValue === 'number')
            (0, class_validator_1.Max)(maxValue, { each: true })(target, propertyKey);
        if (required)
            (0, class_validator_1.IsDefined)()(target, propertyKey);
        else
            (0, class_validator_1.IsOptional)()(target, propertyKey);
    };
}
exports.IsValidArrayNumber = IsValidArrayNumber;
function IsValidArrayString({ required = true, minSize, maxSize, unique } = {
    required: true,
    unique: true,
}) {
    return function (target, propertyKey) {
        (0, class_validator_1.IsString)({ each: true })(target, propertyKey);
        (0, class_transformer_1.Transform)(({ value }) => Array.isArray(value) ? value : (0, index_util_1.isNullOrUndefined)(value) ? [] : [value])(target, propertyKey);
        if (typeof minSize === 'number')
            (0, class_validator_1.ArrayMinSize)(minSize)(target, propertyKey);
        if (typeof maxSize === 'number')
            (0, class_validator_1.ArrayMaxSize)(maxSize)(target, propertyKey);
        if (unique)
            (0, class_validator_1.ArrayUnique)()(target, propertyKey);
        if (required)
            (0, class_validator_1.IsNotEmpty)({ each: true })(target, propertyKey);
        else
            (0, class_validator_1.IsOptional)()(target, propertyKey);
    };
}
exports.IsValidArrayString = IsValidArrayString;
function IsValidArrayObject({ maxSize, minSize, required = true }, object) {
    return function (target, propertyKey) {
        (0, class_validator_1.IsArray)()(target, propertyKey);
        (0, class_validator_1.ValidateNested)({ each: true })(target, propertyKey);
        if (typeof minSize === 'number')
            (0, class_validator_1.ArrayMinSize)(minSize)(target, propertyKey);
        if (typeof maxSize === 'number')
            (0, class_validator_1.ArrayMaxSize)(maxSize)(target, propertyKey);
        (0, class_transformer_1.Transform)(({ value }) => Array.isArray(value) ? value : (0, index_util_1.isNullOrUndefined)(value) ? [] : [value])(target, propertyKey);
        (0, class_transformer_1.Type)(() => object)(target, propertyKey);
        if (required)
            (0, class_validator_1.IsNotEmpty)()(target, propertyKey);
        else
            (0, class_validator_1.IsOptional)()(target, propertyKey);
    };
}
exports.IsValidArrayObject = IsValidArrayObject;
function IsValidArrayEnum({ maxSize, minSize, unique, required = true, defaults, }, enumObj) {
    return function (target, propertyKey) {
        (0, class_validator_1.IsArray)()(target, propertyKey);
        (0, class_validator_1.IsEnum)(enumObj, { each: true })(target, propertyKey);
        if (typeof minSize === 'number')
            (0, class_validator_1.ArrayMinSize)(minSize)(target, propertyKey);
        if (typeof maxSize === 'number')
            (0, class_validator_1.ArrayMaxSize)(maxSize)(target, propertyKey);
        if (unique)
            (0, class_validator_1.ArrayUnique)()(target, propertyKey);
        if (Array.isArray(defaults)) {
            (0, class_transformer_1.Transform)(({ value }) => Array.isArray(value) ? value : value ? [value] : defaults)(target, propertyKey);
        }
        else {
            (0, class_transformer_1.Transform)(({ value }) => Array.isArray(value) ? value : value ? [value] : [])(target, propertyKey);
        }
        if (required)
            (0, class_validator_1.IsNotEmpty)()(target, propertyKey);
        else
            (0, class_validator_1.IsOptional)()(target, propertyKey);
    };
}
exports.IsValidArrayEnum = IsValidArrayEnum;
function MatchField(property, validationOptions) {
    return (object, propertyName) => {
        (0, class_validator_1.registerDecorator)({
            target: object.constructor,
            propertyName,
            options: validationOptions,
            constraints: [property],
            validator: {
                validate(value, args) {
                    const [relatedPropertyName] = args.constraints;
                    const relatedValue = args.object[relatedPropertyName];
                    return value === relatedValue;
                },
                defaultMessage(args) {
                    return 'loi match field';
                },
            },
        });
    };
}
exports.MatchField = MatchField;
function ExcludeAllField(property, validationOptions) {
    return (object, propertyName) => {
        (0, class_validator_1.registerDecorator)({
            target: object.constructor,
            propertyName,
            options: validationOptions,
            constraints: property,
            validator: {
                validate(value, args) {
                    const constraints = args.constraints;
                    for (const keyField of constraints) {
                        const relatedValue = args.object[keyField];
                        if (relatedValue)
                            return false;
                    }
                    return true;
                },
                defaultMessage(args) {
                    const message = (validationOptions === null || validationOptions === void 0 ? void 0 : validationOptions.message) ||
                        [propertyName, 'common.word.invalid'];
                    return '';
                },
            },
        });
    };
}
exports.ExcludeAllField = ExcludeAllField;
function RequireAllField(property, validationOptions) {
    return (object, propertyName) => {
        (0, class_validator_1.registerDecorator)({
            target: object.constructor,
            propertyName,
            options: validationOptions,
            constraints: property,
            validator: {
                validate(value, args) {
                    const constraints = args.constraints;
                    for (const keyField of constraints) {
                        const relatedValue = args.object[keyField];
                        if (!relatedValue)
                            return false;
                    }
                    return true;
                },
                defaultMessage() {
                    const message = (validationOptions === null || validationOptions === void 0 ? void 0 : validationOptions.message) ||
                        [propertyName, 'common.word.invalid'];
                    return '';
                },
            },
        });
    };
}
exports.RequireAllField = RequireAllField;
function IsRequireOneOf(property, validationOptions) {
    return (object, propertyName) => {
        (0, class_validator_1.registerDecorator)({
            target: object.constructor,
            propertyName,
            options: validationOptions,
            constraints: property,
            validator: {
                validate(value, args) {
                    const constraints = args.constraints;
                    for (const keyField of constraints) {
                        const relatedValue = args.object[keyField];
                        if (relatedValue)
                            return true;
                    }
                    return false;
                },
                defaultMessage(args) {
                    const message = (validationOptions === null || validationOptions === void 0 ? void 0 : validationOptions.message) ||
                        [propertyName, 'common.word.invalid'];
                    return '';
                },
            },
        });
    };
}
exports.IsRequireOneOf = IsRequireOneOf;
function IsOnlyOneFieldExist(property, validationOptions) {
    return (object, propertyName) => {
        (0, class_validator_1.registerDecorator)({
            target: object.constructor,
            propertyName,
            options: validationOptions,
            constraints: property,
            validator: {
                validate(value, args) {
                    const constraints = args.constraints;
                    let isExisted = false;
                    for (const fieldKey of constraints) {
                        const fieldValue = args.object[fieldKey];
                        if (fieldValue && isExisted)
                            return false;
                        if (fieldValue)
                            isExisted = true;
                    }
                    if (args.object[args.property] && isExisted)
                        return false;
                    return true;
                },
                defaultMessage(args) {
                    const message = (validationOptions === null || validationOptions === void 0 ? void 0 : validationOptions.message) ||
                        [propertyName, 'common.word.invalid'];
                    return '';
                },
            },
        });
    };
}
exports.IsOnlyOneFieldExist = IsOnlyOneFieldExist;
function IsValidEnumNumber(opts) {
    return function (target, propertyKey) {
        (0, class_validator_1.IsEnum)(opts.enum)(target, propertyKey);
        if (opts.required)
            (0, class_validator_1.IsDefined)()(target, propertyKey);
        else
            (0, class_validator_1.IsOptional)()(target, propertyKey);
        if (opts.default)
            (0, class_transformer_1.Transform)(({ value }) => value || opts.default)(target, propertyKey);
    };
}
exports.IsValidEnumNumber = IsValidEnumNumber;
function IsValidEnumString(opts) {
    return function (target, propertyKey) {
        (0, class_validator_1.IsEnum)(opts.enum)(target, propertyKey);
        if (opts.required)
            (0, class_validator_1.IsDefined)()(target, propertyKey);
        else
            (0, class_validator_1.IsOptional)()(target, propertyKey);
    };
}
exports.IsValidEnumString = IsValidEnumString;
function IsValidBoolean({ default: _default, required } = {
    required: true,
}) {
    return function (target, propertyKey) {
        (0, class_validator_1.IsBoolean)()(target, propertyKey);
        (0, class_transformer_1.Transform)(({ value }) => value ? (0, boolean_1.boolean)(value) : typeof _default === 'boolean' ? _default : value)(target, propertyKey);
        if (required)
            (0, class_validator_1.IsDefined)()(target, propertyKey);
        else
            (0, class_validator_1.IsOptional)()(target, propertyKey);
    };
}
exports.IsValidBoolean = IsValidBoolean;
function IsValidEmail({ minLength = 1, maxLength = 255, required = true, matches, trim = true, } = {
    required: true,
    minLength: 1,
    maxLength: 255,
    trim: true,
}) {
    return function (target, propertyKey) {
        (0, class_validator_1.IsEmail)()(target, propertyKey);
        (0, class_validator_1.MinLength)(minLength)(target, propertyKey);
        (0, class_validator_1.MaxLength)(maxLength)(target, propertyKey);
        if (trim) {
            (0, class_transformer_1.Transform)(({ value }) => value === null || value === void 0 ? void 0 : value.trim())(target, propertyKey);
        }
        if (matches)
            (0, class_validator_1.Matches)(matches)(target, propertyKey);
        if (required)
            (0, class_validator_1.IsNotEmpty)()(target, propertyKey);
        else
            (0, class_validator_1.IsOptional)()(target, propertyKey);
    };
}
exports.IsValidEmail = IsValidEmail;
