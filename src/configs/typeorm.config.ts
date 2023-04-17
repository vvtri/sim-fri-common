import { camelToSnakeCase } from 'src/utils/index.util';
import { DefaultNamingStrategy } from 'typeorm';

export class NamingStrategy extends DefaultNamingStrategy {
  tableName(targetName: string, userSpecifiedName: string): string {
    return userSpecifiedName || camelToSnakeCase(targetName);
  }

  columnName(
    propertyName: string,
    customName: string,
    embeddedPrefixes: string[],
  ): string {
    return customName || camelToSnakeCase(propertyName);
  }

  joinColumnName(relationName: string, referencedColumnName: string) {
    return `${camelToSnakeCase(relationName)}_id`;
  }
}
