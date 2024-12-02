"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProjectFilesModule = void 0;
const common_1 = require("@nestjs/common");
const project_files_service_1 = require("./project-files.service");
const project_files_controller_1 = require("./project-files.controller");
const database_module_1 = require("../database/database.module");
const project_files_providers_1 = require("./project-files.providers");
let ProjectFilesModule = class ProjectFilesModule {
};
exports.ProjectFilesModule = ProjectFilesModule;
exports.ProjectFilesModule = ProjectFilesModule = __decorate([
    (0, common_1.Module)({
        imports: [database_module_1.DatabaseModule],
        controllers: [project_files_controller_1.ProjectFilesController],
        providers: [...project_files_providers_1.projectFilesProviders, project_files_service_1.ProjectFilesService],
        exports: [project_files_service_1.ProjectFilesService],
    })
], ProjectFilesModule);
//# sourceMappingURL=project-files.module.js.map