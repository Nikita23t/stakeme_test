import { IsString, Length } from 'class-validator';

export class EvmBlockParamsDto {
  @IsString()
  @Length(0, 12)
  height: string;
}

export class EvmTransactionParamsDto {
  @IsString()
  @Length(66, 66)
  hash: string;
}