"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProposalTemplateService = void 0;
const common_1 = require("@nestjs/common");
const proposal_template_entity_1 = require("./entities/proposal-template.entity");
const typeorm_1 = require("typeorm");
const constants_1 = require("./constants");
const pizzip_1 = require("pizzip");
const docxtemplater_1 = require("docxtemplater");
const fs_1 = require("fs");
const project_service_1 = require("../project/project.service");
let ProposalTemplateService = class ProposalTemplateService {
    constructor(proposalRepository, projectService) {
        this.proposalRepository = proposalRepository;
        this.projectService = projectService;
    }
    create(file) {
        const proposal = new proposal_template_entity_1.ProposalTemplate();
        proposal.fileName = file.filename;
        proposal.originalName = file.originalname;
        proposal.mimetype = file.mimetype;
        proposal.path = file.path;
        return this.proposalRepository.save(proposal);
    }
    findAll() {
        return this.proposalRepository.find();
    }
    async findOne(id) {
        const proposals = await this.proposalRepository.find({
            where: { id: (0, typeorm_1.Equal)(id) },
        });
        return proposals[0];
    }
    async download(proposalId, projectId) {
        const proposal = await this.findOne(proposalId);
        const content = (0, fs_1.readFileSync)(proposal.path, 'binary');
        if (!proposal.originalName.endsWith('.docx')) {
            throw new common_1.BadRequestException();
        }
        const project = await this.projectService.findOne(projectId);
        const zip = new pizzip_1.default(content);
        const doc = new docxtemplater_1.default(zip, {
            paragraphLoop: true,
            linebreaks: true,
        });
        const clientValues = {};
        Object.keys(project.client).forEach((key) => {
            clientValues[`client_${key}`] = project.client[key];
        });
        const customFields = {};
        project.customFields.forEach((cf) => {
            customFields[`custom_${cf.name}`] = cf.value;
        });
        doc.render({ ...project, ...clientValues, ...customFields });
        const buf = doc.getZip().generate({
            type: 'nodebuffer',
            compression: 'DEFLATE',
        });
        return new common_1.StreamableFile(buf);
    }
    async remove(id) {
        const template = await this.findOne(id);
        (0, fs_1.unlinkSync)(template.path);
        return this.proposalRepository.delete(id);
    }
};
exports.ProposalTemplateService = ProposalTemplateService;
exports.ProposalTemplateService = ProposalTemplateService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)(constants_1.proposalTemplateConstants.providerName)),
    __metadata("design:paramtypes", [typeorm_1.Repository,
        project_service_1.ProjectService])
], ProposalTemplateService);
//# sourceMappingURL=proposal-template.service.js.map