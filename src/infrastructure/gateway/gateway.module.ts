import { Module } from '@nestjs/common';
import { IntegrationGateway } from './integration.gateway';

@Module({
  providers: [IntegrationGateway],
  exports: [IntegrationGateway],
})
export class GatewayModule {}
