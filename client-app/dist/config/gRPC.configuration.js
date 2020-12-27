"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.microserviceOptions = void 0;
const microservices_1 = require("@nestjs/microservices");
const path_1 = require("path");
exports.microserviceOptions = {
    transport: microservices_1.Transport.GRPC,
    options: {
        package: 'app',
        protoPath: path_1.join(__dirname, '../../src/proto/app.proto'),
    },
};
//# sourceMappingURL=gRPC.configuration.js.map