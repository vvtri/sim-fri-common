import { applyDecorators, Type } from '@nestjs/common';
import { ApiExtraModels, ApiOkResponse, getSchemaPath } from '@nestjs/swagger';
import { PaginationResDto } from '../dtos/pagination.dto';

export const PaginationResponse = <DataDto extends Type<unknown>>(
  dataDto: DataDto,
) =>
  applyDecorators(
    ApiExtraModels(PaginationResDto, dataDto),
    ApiOkResponse({
      schema: {
        allOf: [
          { $ref: getSchemaPath(PaginationResDto) },
          {
            properties: {
              items: { type: 'array', items: { $ref: getSchemaPath(dataDto) } },
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
    }),
  );
