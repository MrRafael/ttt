"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userProviders = void 0;
const user_entity_1 = require("./entities/user.entity");
const constants_1 = require("../database/constants");
const constants_2 = require("./constants");
exports.userProviders = [
    {
        provide: constants_2.usersConstants.providerName,
        useFactory: (dataSource) => dataSource.getRepository(user_entity_1.User),
        inject: [constants_1.databaseConstants.providerName],
    },
];
//# sourceMappingURL=users.providers.js.map