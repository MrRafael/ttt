"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.proposalTemplateProviders = void 0;
const constants_1 = require("../database/constants");
const constants_2 = require("./constants");
const proposal_template_entity_1 = require("./entities/proposal-template.entity");
exports.proposalTemplateProviders = [
    {
        provide: constants_2.proposalTemplateConstants.providerName,
        useFactory: (dataSource) => dataSource.getRepository(proposal_template_entity_1.ProposalTemplate),
        inject: [constants_1.databaseConstants.providerName],
    },
];
//# sourceMappingURL=proposal-template.providers.js.map