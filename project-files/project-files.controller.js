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
exports.ProjectFilesController = void 0;
const common_1 = require("@nestjs/common");
const project_files_service_1 = require("./project-files.service");
const create_project_file_dto_1 = require("./dto/create-project-file.dto");
const platform_express_1 = require("@nestjs/platform-express");
const multer_1 = require("multer");
let ProjectFilesController = class ProjectFilesController {
    constructor(projectFilesService) {
        this.projectFilesService = projectFilesService;
    }
    create(createProjectFileDto, file) {
        return this.projectFilesService.create(createProjectFileDto, file);
    }
    findAll(projectId) {
        return this.projectFilesService.findAll(projectId);
    }
    download(id) {
        return this.projectFilesService.download(+id);
    }
    remove(id) {
        return this.projectFilesService.remove(+id);
    }
};
exports.ProjectFilesController = ProjectFilesController;
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
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.UploadedFile)(new common_1.ParseFilePipe())),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_project_file_dto_1.CreateProjectFileDto, Object]),
    __metadata("design:returntype", void 0)
], ProjectFilesController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(':projectId'),
    __param(0, (0, common_1.Param)('projectId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ProjectFilesController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)('/download/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ProjectFilesController.prototype, "download", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ProjectFilesController.prototype, "remove", null);
exports.ProjectFilesController = ProjectFilesController = __decorate([
    (0, common_1.Controller)('project-files'),
    __metadata("design:paramtypes", [project_files_service_1.ProjectFilesService])
], ProjectFilesController);
//# sourceMappingURL=project-files.controller.js.map