import { Controller, Get, HttpStatus } from '@nestjs/common';

@Controller('health')
export class GatewayController {
  @Get()
  healthCheck() {
    return {
      message: '🚀 Polaris Gateway (Fastify) is up and running!',
      status: HttpStatus.OK,
      date: new Date().toISOString(),
    };
  }
}
