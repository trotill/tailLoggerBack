import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsNumber, IsString, Max, Min } from 'class-validator';
import { Transform, TransformFnParams } from 'class-transformer';

const toNumberTransform = ({ value }: TransformFnParams): number => +value;

export class Config {
  @ApiProperty({
    description: 'Путь к лог файлу',
    example: '/var/log/syslog',
  })
  @IsString()
  fileName: string;

  @ApiProperty({
    description: 'Количество строк',
    example: 100,
  })
  @IsInt()
  @Min(0)
  @Max(10000)
  @Transform(toNumberTransform)
  countLast: number;
}

export class SseParams {
  @ApiProperty({
    description: 'id сессии',
    example: '1323232',
  })
  @IsString()
  id: string;
}

export class FileDataItem {
  @ApiProperty({
    description: 'строка из файла',
    example: 'бла бла бла',
  })
  @IsString()
  message: string;
}

export class FileDataRequest {
  @ApiProperty({
    description: 'кол. строк',
    example: 10,
    type: Number,
  })
  @IsNumber({ allowInfinity: false, allowNaN: false })
  @IsInt()
  @Min(0)
  @Max(10000)
  @Transform(toNumberTransform)
  limit: number;
  @ApiProperty({
    description: 'смещение',
    example: 10,
    default: 0,
    type: Number,
  })
  @IsNumber({ allowInfinity: false, allowNaN: false })
  @IsInt()
  @Min(0)
  @Transform(toNumberTransform)
  offset: number;
}
export class FileDataResponse {
  @ApiProperty({
    description: 'список строк из файла',
    example: ['бла бла бла'],
    isArray: this,
    type: Array<FileDataItem>,
  })
  @IsString()
  items: Array<FileDataItem>;
}
