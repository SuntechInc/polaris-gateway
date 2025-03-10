// src/routes/bff/bff.module.ts
import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { CompanyController } from './aurora-bff/core-service/company.routes';

@Module({
  imports: [HttpModule],
  controllers: [CompanyController],
})
export class BffModule {}
