"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.projectFilesProviders = void 0;
const constants_1 = require("../database/constants");
const constants_2 = require("./constants");
const project_file_entity_1 = require("./entities/project-file.entity");
exports.projectFilesProviders = [
    {
        provide: constants_2.projectFilesConstants.providerName,
        useFactory: (dataSource) => dataSource.getRepository(project_file_entity_1.ProjectFile),
        inject: [constants_1.databaseConstants.providerName],
    },
];
//# sourceMappingURL=project-files.providers.js.map