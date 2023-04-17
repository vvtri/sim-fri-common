import { DefaultNamingStrategy } from 'typeorm';
export declare class NamingStrategy extends DefaultNamingStrategy {
    tableName(targetName: string, userSpecifiedName: string): string;
    columnName(propertyName: string, customName: string, embeddedPrefixes: string[]): string;
    joinColumnName(relationName: string, referencedColumnName: string): string;
}
