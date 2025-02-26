import { NestFactory } from '@nestjs/core';
import { FastifyAdapter, NestFastifyApplication } from '@nestjs/platform-fastify';
import { GatewayModule } from './gateway.module';

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(
    GatewayModule,
    new FastifyAdapter(),
  );

  app.setGlobalPrefix('/api');

  const PORT = process.env.PORT || 3000;
  await app.listen(PORT);
  console.log(`🚀 Polaris API Gateway is running on http://localhost:3000`);
}
bootstrap();
