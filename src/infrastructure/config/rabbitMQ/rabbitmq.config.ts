import { MicroserviceOptions, Transport } from '@nestjs/microservices';

interface rabbitMQOptionsProps {
  baseURL: string;
  queue: string;
}

export const rabbitMQOptions = ({
  baseURL,
  queue,
}: rabbitMQOptionsProps): MicroserviceOptions => ({
  transport: Transport.RMQ,
  options: {
    urls: [baseURL],
    queue,
    queueOptions: {
      durable: true,
    },
  },
});
