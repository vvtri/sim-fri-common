import { ValidationOptions } from 'class-validator';
export declare function IsNumberLessThan(property: string, validationOptions?: ValidationOptions): (object: any, propertyName: string) => void;
export declare function IsNumberLessThanOrEqual(property: string, validationOptions?: ValidationOptions): (object: any, propertyName: string) => void;
