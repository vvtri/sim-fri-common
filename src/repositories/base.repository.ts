import { NotFoundException } from '@nestjs/common';
import {
  DataSource,
  EntityTarget,
  FindManyOptions,
  FindOneOptions,
  FindOptionsWhere,
  ObjectLiteral,
  Repository,
} from 'typeorm';

export abstract class BaseRepository<
  T extends ObjectLiteral,
> extends Repository<T> {
  constructor(entity: EntityTarget<T>, dataSource: DataSource) {
    super(entity, dataSource.createEntityManager());
  }

  async findFirst(options: FindOneOptions<T>) {
    return super.findOne(options);
  }

  // Override to reduce one redundant query
  // https://github.com/typeorm/typeorm/issues/5694
  // Must use with where condition to return unique row, if not this will cause performance issue
  async findOne(options: FindOneOptions<T>): Promise<T> {
    const [result] = await this.find({ ...options });

    return result;
  }

  async findOneBy(
    options: FindOptionsWhere<T> | FindOptionsWhere<T>[],
  ): Promise<T> {
    const [result] = await this.findBy(options);

    return result;
  }

  async findOneWithoutRelation(options: FindOneOptions<T>): Promise<T> {
    const [result] = await this.find({ ...options, take: 1 });

    return result;
  }

  async findOneByWithoutRelation(whereOpts: FindOptionsWhere<T>): Promise<T> {
    const [result] = await this.find({ where: whereOpts, take: 1 });

    return result;
  }

  async findOneOrThrowNotFoundExc(options: FindManyOptions<T>) {
    const [result] = await this.find(options);
    if (!result) throw new NotFoundException(`${this.metadata.name} not found`);

    return result;
  }

  async findOneByOrThrowNotFoundExc(
    conditions: FindOptionsWhere<T> | FindOptionsWhere<T>[],
  ) {
    const [result] = await this.findBy(conditions);
    if (!result) throw new NotFoundException(`${this.metadata.name} not found`);

    return result;
  }
}
