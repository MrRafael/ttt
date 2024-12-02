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
exports.ProjectFilesService = void 0;
const common_1 = require("@nestjs/common");
const constants_1 = require("./constants");
const project_file_entity_1 = require("./entities/project-file.entity");
const typeorm_1 = require("typeorm");
const project_entity_1 = require("../project/entities/project.entity");
const file_category_entity_1 = require("../file-category/entities/file-category.entity");
const fs_1 = require("fs");
let ProjectFilesService = class ProjectFilesService {
    constructor(projectFilesRepository) {
        this.projectFilesRepository = projectFilesRepository;
    }
    create(createProjectFileDto, file) {
        const projectFile = new project_file_entity_1.ProjectFile();
        projectFile.fileName = file.filename;
        projectFile.originalName = file.originalname;
        projectFile.mimetype = file.mimetype;
        projectFile.path = file.path;
        const project = new project_entity_1.Project();
        const category = new file_category_entity_1.FileCategory();
        project.id = createProjectFileDto.projectId;
        category.id = createProjectFileDto.categoryId;
        projectFile.project = project;
        projectFile.fileCategory = category;
        return this.projectFilesRepository.save(projectFile);
    }
    findAll(projectId) {
        const project = new project_entity_1.Project();
        project.id = projectId;
        return this.projectFilesRepository.find({ where: { project } });
    }
    async findOne(id) {
        const files = await this.projectFilesRepository.findBy({ id: (0, typeorm_1.Equal)(id) });
        return files[0];
    }
    async download(id) {
        const file = await this.findOne(id);
        const fileToDownload = (0, fs_1.createReadStream)(file.path);
        return new common_1.StreamableFile(fileToDownload, {
            type: file.mimetype,
            disposition: 'attachment; filename="' + file.originalName + '"',
        });
    }
    async remove(id) {
        const template = await this.findOne(id);
        (0, fs_1.unlinkSync)(template.path);
        return this.projectFilesRepository.delete(id);
    }
};
exports.ProjectFilesService = ProjectFilesService;
exports.ProjectFilesService = ProjectFilesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)(constants_1.projectFilesConstants.providerName)),
    __metadata("design:paramtypes", [typeorm_1.Repository])
], ProjectFilesService);
//# sourceMappingURL=project-files.service.js.map