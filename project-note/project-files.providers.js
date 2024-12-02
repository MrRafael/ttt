"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.projectNotesProviders = void 0;
const constants_1 = require("../database/constants");
const constants_2 = require("./constants");
const project_note_entity_1 = require("./entities/project-note.entity");
exports.projectNotesProviders = [
    {
        provide: constants_2.projectNotesConstants.providerName,
        useFactory: (dataSource) => dataSource.getRepository(project_note_entity_1.ProjectNote),
        inject: [constants_1.databaseConstants.providerName],
    },
];
//# sourceMappingURL=project-files.providers.js.map