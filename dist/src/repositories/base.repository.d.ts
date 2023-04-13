import { DataSource, EntityTarget, FindManyOptions, FindOneOptions, FindOptionsWhere, ObjectLiteral, Repository } from 'typeorm';
export declare abstract class BaseRepository<T extends ObjectLiteral> extends Repository<T> {
    constructor(entity: EntityTarget<T>, dataSource: DataSource);
    findFirst(options: FindOneOptions<T>): Promise<T>;
    findOne(options: FindOneOptions<T>): Promise<T>;
    findOneBy(options: FindOptionsWhere<T> | FindOptionsWhere<T>[]): Promise<T>;
    findOneWithoutRelation(options: FindOneOptions<T>): Promise<T>;
    findOneByWithoutRelation(whereOpts: FindOptionsWhere<T>): Promise<T>;
    findOneOrThrowNotFoundExc(options: FindManyOptions<T>): Promise<T>;
    findOneByOrThrowNotFoundExc(conditions: FindOptionsWhere<T> | FindOptionsWhere<T>[]): Promise<T>;
}
