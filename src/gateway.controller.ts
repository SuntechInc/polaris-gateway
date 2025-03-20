import { Controller, Get, HttpStatus } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Gateway Health Check')
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
