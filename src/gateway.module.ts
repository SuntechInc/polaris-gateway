import { Module } from '@nestjs/common';
import { GatewayController } from './gateway.controller';
import { BffModule } from './routes/bff.module';

@Module({
  imports: [ BffModule],
  controllers: [GatewayController, ],
  providers: [],
})
export class GatewayModule {}
