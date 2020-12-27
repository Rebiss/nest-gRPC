import { Transport, ClientOptions } from '@nestjs/microservices';
import { join } from 'path';

export const microserviceOptions: ClientOptions = {
    transport: Transport.GRPC,
    options: {
        package: 'app',
        protoPath: join(__dirname, '../../src/proto/app.proto'),
    },
};
