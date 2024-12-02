"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProjectNoteModule = void 0;
const common_1 = require("@nestjs/common");
const project_note_service_1 = require("./project-note.service");
const project_note_controller_1 = require("./project-note.controller");
const database_module_1 = require("../database/database.module");
const project_files_providers_1 = require("./project-files.providers");
const users_module_1 = require("../users/users.module");
let ProjectNoteModule = class ProjectNoteModule {
};
exports.ProjectNoteModule = ProjectNoteModule;
exports.ProjectNoteModule = ProjectNoteModule = __decorate([
    (0, common_1.Module)({
        imports: [database_module_1.DatabaseModule, users_module_1.UsersModule],
        controllers: [project_note_controller_1.ProjectNoteController],
        providers: [...project_files_providers_1.projectNotesProviders, project_note_service_1.ProjectNoteService],
        exports: [project_note_service_1.ProjectNoteService],
    })
], ProjectNoteModule);
//# sourceMappingURL=project-note.module.js.map