"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseRepository = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
class BaseRepository extends typeorm_1.Repository {
    constructor(entity, dataSource) {
        super(entity, dataSource.createEntityManager());
    }
    async findFirst(options) {
        return super.findOne(options);
    }
    async findOne(options) {
        const [result] = await this.find(Object.assign({}, options));
        return result;
    }
    async findOneBy(options) {
        const [result] = await this.findBy(options);
        return result;
    }
    async findOneWithoutRelation(options) {
        const [result] = await this.find(Object.assign(Object.assign({}, options), { take: 1 }));
        return result;
    }
    async findOneByWithoutRelation(whereOpts) {
        const [result] = await this.find({ where: whereOpts, take: 1 });
        return result;
    }
    async findOneOrThrowNotFoundExc(options) {
        const [result] = await this.find(options);
        if (!result)
            throw new common_1.NotFoundException(`${this.metadata.name} not found`);
        return result;
    }
    async findOneByOrThrowNotFoundExc(conditions) {
        const [result] = await this.findBy(conditions);
        if (!result)
            throw new common_1.NotFoundException(`${this.metadata.name} not found`);
        return result;
    }
}
exports.BaseRepository = BaseRepository;
