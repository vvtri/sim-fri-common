import { IsValidArrayNumber } from '../decorators/custom-validator.decorator';

export class DeleteMultipleByIdNumberReqDto {
  @IsValidArrayNumber({ minValue: 1, minSize: 1 })
  ids: number[];
}
