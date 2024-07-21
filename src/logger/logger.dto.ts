import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsString, Max, Min } from 'class-validator';
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
  @Max(1000)
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
