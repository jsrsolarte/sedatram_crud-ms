import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from 'nestjs-config';
import path = require('path');

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const config = ConfigService.load( path.resolve(__dirname, 'config', '**', '!(*.d).{ts,js}'));
  const port = (await config).get('app.port');
  await app.listen(port);
}
bootstrap();
