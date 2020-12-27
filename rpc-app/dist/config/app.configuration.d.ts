import { Transport } from '@nestjs/microservices';
export declare const microserviceOptions: {
    transport: Transport;
    options: {
        package: string;
        protoPath: string;
    };
};
