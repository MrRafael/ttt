"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fileCategoryProviders = void 0;
const constants_1 = require("../database/constants");
const constants_2 = require("./constants");
const file_category_entity_1 = require("./entities/file-category.entity");
exports.fileCategoryProviders = [
    {
        provide: constants_2.fileCategoryConstants.providerName,
        useFactory: (dataSource) => dataSource.getRepository(file_category_entity_1.FileCategory),
        inject: [constants_1.databaseConstants.providerName],
    },
];
//# sourceMappingURL=file-category.providers.js.map