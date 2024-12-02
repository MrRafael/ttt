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
exports.ProjectNoteController = void 0;
const common_1 = require("@nestjs/common");
const project_note_service_1 = require("./project-note.service");
const create_project_note_dto_1 = require("./dto/create-project-note.dto");
let ProjectNoteController = class ProjectNoteController {
    constructor(projectNoteService) {
        this.projectNoteService = projectNoteService;
    }
    create(createProjectNoteDto, req) {
        return this.projectNoteService.create(createProjectNoteDto, req.headers);
    }
    findAll() {
        return this.projectNoteService.findAll();
    }
    remove(id, req) {
        return this.projectNoteService.remove(+id, req.headers);
    }
};
exports.ProjectNoteController = ProjectNoteController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_project_note_dto_1.CreateProjectNoteDto, Object]),
    __metadata("design:returntype", void 0)
], ProjectNoteController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ProjectNoteController.prototype, "findAll", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], ProjectNoteController.prototype, "remove", null);
exports.ProjectNoteController = ProjectNoteController = __decorate([
    (0, common_1.Controller)('project-note'),
    __metadata("design:paramtypes", [project_note_service_1.ProjectNoteService])
], ProjectNoteController);
//# sourceMappingURL=project-note.controller.js.map