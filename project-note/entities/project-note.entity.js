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
exports.ProjectNote = void 0;
const project_entity_1 = require("../../project/entities/project.entity");
const typeorm_1 = require("typeorm");
const create_project_note_dto_1 = require("../dto/create-project-note.dto");
const user_entity_1 = require("../../users/entities/user.entity");
let ProjectNote = class ProjectNote {
    constructor(createProjectNoteDto) {
        if (createProjectNoteDto) {
            this.note = createProjectNoteDto.note;
            this.createdAt = new Date();
            const project = new project_entity_1.Project();
            project.id = createProjectNoteDto.projectId;
            this.project = project;
        }
    }
};
exports.ProjectNote = ProjectNote;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], ProjectNote.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], ProjectNote.prototype, "note", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Date)
], ProjectNote.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.User, (user) => user.notes, {
        onDelete: 'CASCADE',
    }),
    __metadata("design:type", user_entity_1.User)
], ProjectNote.prototype, "user", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => project_entity_1.Project, (project) => project.files, {
        onDelete: 'CASCADE',
    }),
    __metadata("design:type", project_entity_1.Project)
], ProjectNote.prototype, "project", void 0);
exports.ProjectNote = ProjectNote = __decorate([
    (0, typeorm_1.Entity)(),
    __metadata("design:paramtypes", [create_project_note_dto_1.CreateProjectNoteDto])
], ProjectNote);
//# sourceMappingURL=project-note.entity.js.map