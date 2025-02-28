import { NestFactory } from '@nestjs/core';
import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify';
import { GatewayModule } from './gateway.module';
import { setupSwagger } from './config/swagger.config';

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(
    GatewayModule,
    new FastifyAdapter(),
  );

  app.setGlobalPrefix('/api');

  setupSwagger(app);

  const PORT = process.env.PORT || 3000;
  await app.listen(PORT);
  console.log(`🚀 Polaris API Gateway is running on http://localhost:3000`);
}
bootstrap();
