import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { MicroserviceOptions } from '@nestjs/microservices';
import { rabbitMQOptions } from './infrastructure/config/rabbitMQ/rabbitmq.config';
import {
  DEFAULT_QUEUE,
  DEFAULT_URL,
} from './infrastructure/config/rabbitMQ/defaults';

async function bootstrap() {
  const { RMQ_URL = DEFAULT_URL, RMQ_QUEUE = DEFAULT_QUEUE } = process.env;

  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    AppModule,
    rabbitMQOptions({ baseURL: RMQ_URL, queue: RMQ_QUEUE }),
  );

  await app.listen();
}
bootstrap();
