import { Logger } from '@nestjs/common';
import {
  OnGatewayConnection,
  OnGatewayDisconnect,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';

@WebSocketGateway(80, { cors: { origin: '*' } })
export class IntegrationGateway
  implements OnGatewayConnection, OnGatewayDisconnect
{
  @WebSocketServer()
  public readonly server: Server;
  private readonly logger: Logger = new Logger(IntegrationGateway.name);

  handleConnection(client: Socket) {
    this.logger.log(`Client connected: [${client.id}]`);
  }

  handleDisconnect(client: Socket) {
    this.logger.log(`Client disconnected: [${client.id}]`);
  }
}
