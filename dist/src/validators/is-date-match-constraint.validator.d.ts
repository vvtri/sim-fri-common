import { ValidationOptions } from 'class-validator';
export type IsDateMatchConstraintParams = {
    validationOptions?: ValidationOptions;
    getDateFunc: () => Date;
    compareFunc: (propertyDate: Date, dateFromFuncGet: Date) => boolean;
};
export declare function IsDateMatchConstraint({ compareFunc, getDateFunc, validationOptions, }: IsDateMatchConstraintParams): (object: any, propertyName: string) => void;
