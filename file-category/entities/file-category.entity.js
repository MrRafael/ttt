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
exports.FileCategory = void 0;
const project_file_entity_1 = require("../../project-files/entities/project-file.entity");
const typeorm_1 = require("typeorm");
let FileCategory = class FileCategory {
};
exports.FileCategory = FileCategory;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], FileCategory.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], FileCategory.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => project_file_entity_1.ProjectFile, (file) => file.project, {
        onDelete: 'NO ACTION',
    }),
    __metadata("design:type", Array)
], FileCategory.prototype, "files", void 0);
exports.FileCategory = FileCategory = __decorate([
    (0, typeorm_1.Entity)()
], FileCategory);
//# sourceMappingURL=file-category.entity.js.map