import { Controller, Logger } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { RmqContactPattern } from './rabbitmq-contact-pattern.enum';
import { IntegrationProgressPayload } from '../../../domain/integration/integration-progress.payload';

@Controller('contact')
export class ContactController {
  private readonly logger: Logger = new Logger(ContactController.name);

  @MessagePattern(RmqContactPattern.INTEGRATION_PROGRESS)
  getIntegrationProgress(@Payload() data: IntegrationProgressPayload) {
    this.logger.log({
      [RmqContactPattern.INTEGRATION_PROGRESS]: data,
    });
  }

  @MessagePattern(RmqContactPattern.INTEGRATION_FINISHED)
  getIntegrationConclusion(@Payload() data: IntegrationProgressPayload) {
    this.logger.log({
      [RmqContactPattern.INTEGRATION_FINISHED]: data,
    });
  }
}
