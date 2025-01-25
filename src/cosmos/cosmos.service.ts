import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class CosmosService {
  private readonly RPC_URL = `${process.env.LINK_COSMOS}`;

  async getBlock(height: string) {
    try {
      const response = await axios.get(`${this.RPC_URL}/block?height=${height}`);

      const block = response.data.result.block;

      return {
        height: block.header.height,
        time: block.header.time,
        hash: response.data.result.block_id.hash,
        proposedAddress: block.header.proposer_address,
      };
    } catch (error) {
      throw new HttpException('Block not found', HttpStatus.NOT_FOUND);
    }
  }

  async getTransaction(hash: string) {
    try {
      const response = await axios.get(
        `${this.RPC_URL}/tx?hash=0x${hash}&prove=true`,
      );

      const tx = response.data.result;

      return {
        hash: tx.hash,
        height: tx.height,
        time: tx.tx_result.time,
        gasUsed: tx.tx_result.gas_used,
        gasWanted: tx.tx_result.gas_wanted,
        fee: tx.tx_result.events
          .find((e) => e.type === 'fee_pay')
          ?.attributes.find((a) => a.key === 'fee')?.value,
        sender: tx.tx_result.events
          .find((e) => e.type === 'transfer')
          ?.attributes.find((a) => a.key === 'sender')?.value,
      };
    } catch (error) {
      throw new HttpException(
        'Transaction not found or invalid hash',
        HttpStatus.NOT_FOUND,
      );
    }
  }
}