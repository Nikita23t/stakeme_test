import { Controller, Get, Param } from '@nestjs/common';
import { EvmService } from './evm.service';
import { ApiParam, ApiTags } from '@nestjs/swagger';
import { EvmTransactionParamsDto } from './dto/evm.dto';
import { EvmBlockParamsDto } from './dto/evm.dto';

@ApiTags("evm-haqq")
@Controller('/evm')
export class EvmController {
  constructor(private readonly evmService: EvmService) {}

  @Get('/block/:height')
  @ApiParam({ name: 'height', required: true, description: 'Вернуть данные по высоте(номеру) блока', example: "15076483" })
  getBlock(@Param() params: EvmBlockParamsDto) {
    return this.evmService.getBlock(params.height);
  }

  @Get('/transactions/:hash')
  @ApiParam({ name: 'hash', required: true, description: 'Вернуть данные по хэшу транзакции', example: '0xf889051e4b97f1f33c3fd4f6ac596654b674fa4df7185913c71d01d90a764f1a' })
  getTransaction(@Param() params: EvmTransactionParamsDto) {
    return this.evmService.getTransaction(params.hash);
  }
}