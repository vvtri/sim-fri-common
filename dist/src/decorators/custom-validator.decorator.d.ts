import { UUIDVersion, ValidationOptions } from 'class-validator';
type ValidationEnumOptions<E, T> = {
    enum: E;
    required?: boolean;
    default?: T;
};
export declare function IsValidEnum<E extends object, T>(opts: ValidationEnumOptions<E, T>): PropertyDecorator;
type ValidationDateOptions = {
    required?: boolean;
    minDate?: Date;
    maxDate?: Date;
};
export declare function IsValidDate({ required, maxDate, minDate }?: ValidationDateOptions): PropertyDecorator;
type ValidationNumberOptions = {
    required?: boolean;
    min?: number;
    max?: number;
};
export declare function IsValidNumber({ required, min, max }?: ValidationNumberOptions): PropertyDecorator;
type ValidationNumberStringOptions = {
    required?: boolean;
    maxLength?: number;
};
export declare function IsValidNumberString({ required, maxLength }?: ValidationNumberStringOptions): PropertyDecorator;
type ValidationTextOptions = {
    required?: boolean;
    minLength?: number;
    maxLength?: number;
    matches?: RegExp;
    trim?: boolean;
};
export declare function IsValidText({ minLength, maxLength, required, matches, trim, }?: ValidationTextOptions): PropertyDecorator;
type ValidationUUIDOptions = {
    required?: boolean;
    version?: UUIDVersion;
};
export declare function IsValidUUID({ required, version }?: ValidationUUIDOptions): PropertyDecorator;
type ValidationObjectOptions = {
    required?: boolean;
    object?: {
        new (...args: any[]): any;
    };
};
export declare function IsValidObject({ object, required }?: ValidationObjectOptions): PropertyDecorator;
type ValidationArrayOptions<T = any> = {
    required?: boolean;
    minSize?: number;
    maxSize?: number;
    unique?: boolean;
    minValue?: number;
    maxValue?: number;
    defaults?: T[];
};
export declare function IsValidArrayNumber({ required, minSize, maxSize, unique, maxValue, minValue, }?: ValidationArrayOptions): PropertyDecorator;
export declare function IsValidArrayString({ required, minSize, maxSize, unique }?: ValidationArrayOptions): PropertyDecorator;
export declare function IsValidArrayObject({ maxSize, minSize, required }: ValidationArrayOptions, object: {
    new (...args: any[]): any;
}): PropertyDecorator;
export declare function IsValidArrayEnum({ maxSize, minSize, unique, required, defaults, }: ValidationArrayOptions, enumObj: object): PropertyDecorator;
export declare function MatchField(property: string, validationOptions?: ValidationOptions): (object: any, propertyName: string) => void;
export declare function ExcludeAllField(property: string[], validationOptions?: ValidationOptions): (object: any, propertyName: string) => void;
export declare function RequireAllField(property: string[], validationOptions?: ValidationOptions): (object: any, propertyName: string) => void;
export declare function IsRequireOneOf(property: string[], validationOptions?: ValidationOptions): (object: any, propertyName: string) => void;
export declare function IsOnlyOneFieldExist(property: string[], validationOptions?: ValidationOptions): (object: any, propertyName: string) => void;
type ValidationEnumStringOptions = {
    enum: Record<string, any>;
    required?: boolean;
    default?: string;
};
type ValidationEnumNumberOptions = {
    enum: Record<string, any>;
    required?: boolean;
    default?: number;
};
export declare function IsValidEnumNumber(opts: ValidationEnumNumberOptions): PropertyDecorator;
export declare function IsValidEnumString(opts: ValidationEnumStringOptions): PropertyDecorator;
type ValidationBooleanOptions = {
    required?: boolean;
    default?: boolean;
};
export declare function IsValidBoolean({ default: _default, required }?: ValidationBooleanOptions): (target: any, propertyKey: string | symbol) => void;
type ValidationEmailOptions = {
    required?: boolean;
    minLength?: number;
    maxLength?: number;
    matches?: RegExp;
    trim?: boolean;
};
export declare function IsValidEmail({ minLength, maxLength, required, matches, trim, }?: ValidationEmailOptions): PropertyDecorator;
export {};
