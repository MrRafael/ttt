"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.projectProviders = void 0;
const constants_1 = require("../database/constants");
const constants_2 = require("./constants");
const project_entity_1 = require("./entities/project.entity");
exports.projectProviders = [
    {
        provide: constants_2.projectConstants.providerName,
        useFactory: (dataSource) => dataSource.getRepository(project_entity_1.Project),
        inject: [constants_1.databaseConstants.providerName],
    },
];
//# sourceMappingURL=project.providers.js.map