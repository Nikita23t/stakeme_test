import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class EvmService {
  private readonly RPC_URL = `${process.env.LINK_EVM_HAQQ}`;

  constructor(private readonly httpService: HttpService) { }

  async getBlock(height: string) {
    try {
      const response = await firstValueFrom(
        this.httpService.post(this.RPC_URL, {
          jsonrpc: '2.0',
          method: 'eth_getBlockByNumber',
          params: [height, false],
          id: 1,
        }),
      );

      const block = response.data.result;

      return {
        height: block.number,
        hash: block.hash,
        parentHash: block.parentHash,
        gasLimit: block.gasLimit,
        gasUsed: block.gasUsed,
        size: block.size,
      };
    } catch (error) {
      throw new HttpException('Block not found', HttpStatus.NOT_FOUND);
    }
  }

  async getTransaction(hash: string) {
    try {
      const response = await firstValueFrom(
        this.httpService.post(this.RPC_URL, {
          jsonrpc: '2.0',
          method: 'eth_getTransactionByHash',
          params: [hash],
          id: 1,
        }),
      );

      const tx = response.data.result;

      return {
        hash: tx.hash,
        to: tx.to,
        from: tx.from,
        value: tx.value,
        input: tx.input,
        maxFeePerGas: tx.maxFeePerGas,
        maxPriorityFeePerGas: tx.maxPriorityFeePerGas,
        gasPrice: tx.gasPrice,
      };
    } catch (e) {
      throw new HttpException('Transaction not found', HttpStatus.NOT_FOUND);
    }
  }
}