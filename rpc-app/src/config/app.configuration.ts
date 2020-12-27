import { Transport } from '@nestjs/microservices';
import { join } from 'path';

export const microserviceOptions = {
    transport: Transport.GRPC,
    options: {
        // host: 'localhost',
        package: 'app',
        protoPath: join(__dirname, '../proto/app.proto'),
    },
};
