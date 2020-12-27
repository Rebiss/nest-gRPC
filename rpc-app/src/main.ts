import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {microserviceOptions} from './config/app.configuration';
import { Logger } from '@nestjs/common'

const logger = new Logger('Main');

async function bootstrap() {
  const app = await NestFactory.createMicroservice(AppModule, microserviceOptions);
  app.listen(() => {
    logger.log(`Microservice is running... port: 3022`)
  });
}
bootstrap();
