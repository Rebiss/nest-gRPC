"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const app_configuration_1 = require("./config/app.configuration");
const common_1 = require("@nestjs/common");
const logger = new common_1.Logger('Main');
async function bootstrap() {
    const app = await core_1.NestFactory.createMicroservice(app_module_1.AppModule, app_configuration_1.microserviceOptions);
    app.listen(() => {
        logger.log(`Microservice is running... port`);
    });
}
bootstrap();
//# sourceMappingURL=main.js.map