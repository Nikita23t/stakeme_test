import { IsString, Length } from 'class-validator';

export class BlockParamsDto {
    @IsString()
    @Length(0, 10)
    height: string;
}

export class TransactionParamsDto {
    @IsString()
    @Length(64, 64)
    hash: string;
}