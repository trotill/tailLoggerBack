import { Module } from '@nestjs/common';
import { LoggerModule } from './logger/logger.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';

@Module({
  imports: [
    LoggerModule,
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'web'),
    }),
  ],
})
export class AppModule {}
