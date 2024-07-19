import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { writeFile } from 'fs/promises';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { PORT } from './common/const';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api');
  app.useGlobalPipes(new ValidationPipe({ whitelist: true }));
  const config = new DocumentBuilder()
    .setTitle('openApi')
    .setDescription('API Docs')
    .setVersion('0.0.1')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('/api/docs', app, document);
  await writeFile('./swagger/swagger.json', JSON.stringify(document));
  console.log(`listen port ${PORT}`);
  await app.listen(+PORT);
}
bootstrap();
