"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const swagger_1 = require("@nestjs/swagger");
const config = require("config");
const appOptions = { cors: true };
const PORT = config.PORT || 3000;
const API_PREFIX = config.API.PREFIX;
const API_TITLE = config.API.TITLE;
const API_DESC = config.API.DESC;
const API_VERSION = config.API.VERSION;
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule, appOptions);
    app.setGlobalPrefix(API_PREFIX);
    const options = new swagger_1.DocumentBuilder()
        .setTitle(API_TITLE)
        .setDescription(API_DESC)
        .setVersion(API_VERSION)
        .setBasePath(API_PREFIX)
        .addBearerAuth()
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, options);
    swagger_1.SwaggerModule.setup('/docs', app, document);
    await app.listen(PORT);
    console.log(`Application is running on: ${await app.getUrl()}`);
}
bootstrap();
//# sourceMappingURL=main.js.map