"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.clientProviders = void 0;
const client_entity_1 = require("./entities/client.entity");
const constants_1 = require("../database/constants");
const constants_2 = require("./constants");
exports.clientProviders = [
    {
        provide: constants_2.clientsConstants.providerName,
        useFactory: (dataSource) => dataSource.getRepository(client_entity_1.Client),
        inject: [constants_1.databaseConstants.providerName],
    },
];
//# sourceMappingURL=clients.providers.js.map