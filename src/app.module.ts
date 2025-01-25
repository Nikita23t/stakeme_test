import { Module } from "@nestjs/common";
import { EvmModule } from './evm/evm.module';
import { CosmosModule } from './cosmos/cosmos.module';
import { ConfigModule } from "@nestjs/config";


@Module({
    exports: [],
    providers: [],
    controllers: [],
    imports: [
        ConfigModule.forRoot({
            isGlobal: true,
            envFilePath: '.env',
        }),
        EvmModule, 
        CosmosModule
    ]
})
export class AppModule { }