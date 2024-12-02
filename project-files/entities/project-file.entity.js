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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProjectFile = void 0;
const file_category_entity_1 = require("../../file-category/entities/file-category.entity");
const project_entity_1 = require("../../project/entities/project.entity");
const typeorm_1 = require("typeorm");
let ProjectFile = class ProjectFile {
};
exports.ProjectFile = ProjectFile;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], ProjectFile.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], ProjectFile.prototype, "fileName", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], ProjectFile.prototype, "originalName", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], ProjectFile.prototype, "mimetype", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], ProjectFile.prototype, "path", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => project_entity_1.Project, (project) => project.files, {
        onDelete: 'CASCADE',
    }),
    __metadata("design:type", project_entity_1.Project)
], ProjectFile.prototype, "project", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => file_category_entity_1.FileCategory, (fileCategory) => fileCategory.files, {
        onDelete: 'NO ACTION',
    }),
    __metadata("design:type", file_category_entity_1.FileCategory)
], ProjectFile.prototype, "fileCategory", void 0);
exports.ProjectFile = ProjectFile = __decorate([
    (0, typeorm_1.Entity)()
], ProjectFile);
//# sourceMappingURL=project-file.entity.js.map