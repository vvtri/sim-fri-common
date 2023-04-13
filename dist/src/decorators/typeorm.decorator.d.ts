import { ColumnOptions, IndexOptions } from 'typeorm';
export declare function ColumnString(options?: ColumnOptions): PropertyDecorator;
export declare function ColumnDate(options?: ColumnOptions): PropertyDecorator;
export declare function UniqueWithSoftDelete(softDeletePropertyKey?: string): PropertyDecorator;
export declare function PartialIndexWithSoftDelete(fields: string[], options: Omit<IndexOptions, 'where'>, softDeletePropertyKey?: string): ClassDecorator;
export declare function DecimalColumn({ precision, scale, name, ...other }: ColumnOptions): (target: any, propertyKey: string | symbol) => void;
