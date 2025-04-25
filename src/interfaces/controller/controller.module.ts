import { Module } from '@nestjs/common';
import { ContactController } from './contact/contact.controller';
import { GatewayModule } from '../../infrastructure/gateway/gateway.module';

@Module({
  imports: [GatewayModule],
  controllers: [ContactController],
})
export class ControllerModule {}
