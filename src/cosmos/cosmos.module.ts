import { Module } from '@nestjs/common';
import { CosmosService } from './cosmos.service';
import { CosmosController } from './cosmos.controller';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [HttpModule],
  providers: [CosmosService],
  controllers: [CosmosController]
})
export class CosmosModule {}
