import { Controller, Get, Param } from '@nestjs/common';
import { CosmosService } from './cosmos.service';
import { ApiParam, ApiTags } from '@nestjs/swagger';
import { TransactionParamsDto, BlockParamsDto } from './dto/cosmos.dto';

@ApiTags("cosmos")
@Controller('/cosmos')
export class CosmosController {
  constructor(private readonly cosmosService: CosmosService) {}

  @Get('/block/:height')
  @ApiParam({ name: 'height', required: true, description: 'Вернуть данные по высоте(номеру) блока', example: 24112468 })
  async getBlock(@Param() params: BlockParamsDto) {
    return this.cosmosService.getBlock(params.height);
  }

  @Get('/transactions/:hash')
  @ApiParam({ name: 'hash', required: true, description: 'Вернуть данные по хэшу транзакции', example: '5977C1E197EBA23592768A17EDC1EC1B680F0102B5BCB180A265F10FFAA864EC' })
  async getTransaction(@Param() params: TransactionParamsDto) {
    return this.cosmosService.getTransaction(params.hash);
  }
}