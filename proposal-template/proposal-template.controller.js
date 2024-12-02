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
exports.ProposalTemplateController = void 0;
const common_1 = require("@nestjs/common");
const proposal_template_service_1 = require("./proposal-template.service");
const platform_express_1 = require("@nestjs/platform-express");
const multer_1 = require("multer");
let ProposalTemplateController = class ProposalTemplateController {
    constructor(proposalTemplateService) {
        this.proposalTemplateService = proposalTemplateService;
    }
    create(file) {
        return this.proposalTemplateService.create(file);
    }
    findAll() {
        return this.proposalTemplateService.findAll();
    }
    download(proposalId, projectId) {
        return this.proposalTemplateService.download(proposalId, projectId);
    }
    findOne(id) {
        return this.proposalTemplateService.findOne(+id);
    }
    remove(id) {
        return this.proposalTemplateService.remove(+id);
    }
};
exports.ProposalTemplateController = ProposalTemplateController;
__decorate([
    (0, common_1.Post)(),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('file', {
        storage: (0, multer_1.diskStorage)({
            destination: function (req, file, cb) {
                cb(null, process.env.FILE_LOCATION);
            },
            filename: function (req, file, cb) {
                cb(null, Date.now() + '-' + file.originalname);
            },
        }),
    })),
    __param(0, (0, common_1.UploadedFile)(new common_1.ParseFilePipe())),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], ProposalTemplateController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ProposalTemplateController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)('/download'),
    __param(0, (0, common_1.Query)('proposalId')),
    __param(1, (0, common_1.Query)('projectId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, String]),
    __metadata("design:returntype", void 0)
], ProposalTemplateController.prototype, "download", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ProposalTemplateController.prototype, "findOne", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ProposalTemplateController.prototype, "remove", null);
exports.ProposalTemplateController = ProposalTemplateController = __decorate([
    (0, common_1.Controller)('proposal-template'),
    __metadata("design:paramtypes", [proposal_template_service_1.ProposalTemplateService])
], ProposalTemplateController);
//# sourceMappingURL=proposal-template.controller.js.map