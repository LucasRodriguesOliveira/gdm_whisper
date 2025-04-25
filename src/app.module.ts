import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { envConfig } from './infrastructure/config/env/env.config';
import { ControllerModule } from './interfaces/controller/controller.module';
import { GatewayModule } from './infrastructure/gateway/gateway.module';

@Module({
  imports: [ConfigModule.forRoot(envConfig), ControllerModule, GatewayModule],
})
export class AppModule {}
