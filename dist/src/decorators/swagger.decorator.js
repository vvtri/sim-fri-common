"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaginationResponse = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const pagination_dto_1 = require("../dtos/pagination.dto");
const PaginationResponse = (dataDto) => (0, common_1.applyDecorators)((0, swagger_1.ApiExtraModels)(pagination_dto_1.PaginationResDto, dataDto), (0, swagger_1.ApiOkResponse)({
    schema: {
        allOf: [
            { $ref: (0, swagger_1.getSchemaPath)(pagination_dto_1.PaginationResDto) },
            {
                properties: {
                    items: { type: 'array', items: { $ref: (0, swagger_1.getSchemaPath)(dataDto) } },
                    meta: {
                        type: 'object',
                        properties: {
                            itemCount: { type: 'number' },
                            totalItems: { type: 'number' },
                            itemsPerPage: { type: 'number' },
                            totalPages: { type: 'number' },
                            currentPage: { type: 'number' },
                        },
                    },
                    links: {
                        type: 'object',
                        properties: {
                            first: { type: 'string' },
                            previous: { type: 'string' },
                            next: { type: 'string' },
                            last: { type: 'string' },
                        },
                    },
                },
            },
        ],
    },
}));
exports.PaginationResponse = PaginationResponse;
