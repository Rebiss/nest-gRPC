import { OnModuleInit } from '@nestjs/common';
export declare class AppController implements OnModuleInit {
    private logger;
    private client;
    private grpcService;
    onModuleInit(): void;
    helloNest(): string;
    accumulate(data: number[]): Promise<import("rxjs").Observable<any>>;
}
