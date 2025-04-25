import { Controller, Logger } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { RmqContactPattern } from './rabbitmq-contact-pattern.enum';
import { IntegrationProgressPayload } from '../../../domain/integration/integration-progress.payload';
import { IntegrationGateway } from '../../../infrastructure/gateway/integration.gateway';
import { SocketEvents } from '../../../infrastructure/gateway/events.enum';

@Controller('contact')
export class ContactController {
  private readonly logger: Logger = new Logger(ContactController.name);
  private integrations: Map<string, number> = new Map();

  constructor(private readonly integrationGateway: IntegrationGateway) {}

  @MessagePattern(RmqContactPattern.INTEGRATION_PROGRESS)
  getIntegrationProgress(@Payload() data: IntegrationProgressPayload) {
    this.integrations.set(data.userId, data.progress);

    this.integrationGateway.server.emit(
      SocketEvents.INTEGRATION_UPLOAD_PROGRESS,
      data,
    );

    if (data.progress === 1.0) {
      // logs to keep track in console
      this.logger.log({
        [RmqContactPattern.INTEGRATION_FINISHED]: data,
      });
      // notify client
      this.integrationGateway.server.emit(
        SocketEvents.INTEGRATION_UPLOAD_FINISHED,
        data,
      );
      // remove from upload tracking
      this.integrations.delete(data.userId);
    }
  }

  @MessagePattern(RmqContactPattern.INTEGRATION_FINISHED)
  getIntegrationConclusion(@Payload() data: IntegrationProgressPayload) {
    if (this.integrations.has(data.userId)) {
      const progress = this.integrations.get(data.userId);

      if (progress >= 1.0) {
        this.logger.log({
          [RmqContactPattern.INTEGRATION_FINISHED]: data,
        });
        this.integrationGateway.server.emit(
          SocketEvents.INTEGRATION_UPLOAD_FINISHED,
          data,
        );
        this.integrations.delete(data.userId);
      }
    }
  }
}
