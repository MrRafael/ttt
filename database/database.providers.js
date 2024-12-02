"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.databaseProviders = void 0;
const typeorm_1 = require("typeorm");
const constants_1 = require("./constants");
const config_1 = require("@nestjs/config");
exports.databaseProviders = [
    {
        provide: constants_1.databaseConstants.providerName,
        inject: [config_1.ConfigService],
        useFactory: async (configService) => {
            const dataSource = new typeorm_1.DataSource({
                type: 'postgres',
                host: configService.get('database.host'),
                port: configService.get('database.port'),
                username: configService.get('database.username'),
                password: configService.get('database.password'),
                database: configService.get('database.name'),
                entities: [__dirname + '/../**/*.entity{.ts,.js}'],
                synchronize: true,
            });
            return dataSource.initialize();
        },
    },
];
//# sourceMappingURL=database.providers.js.map