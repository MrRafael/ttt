"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FileCategoryModule = void 0;
const common_1 = require("@nestjs/common");
const file_category_service_1 = require("./file-category.service");
const file_category_controller_1 = require("./file-category.controller");
const database_module_1 = require("../database/database.module");
const file_category_providers_1 = require("./file-category.providers");
let FileCategoryModule = class FileCategoryModule {
};
exports.FileCategoryModule = FileCategoryModule;
exports.FileCategoryModule = FileCategoryModule = __decorate([
    (0, common_1.Module)({
        imports: [database_module_1.DatabaseModule],
        controllers: [file_category_controller_1.FileCategoryController],
        providers: [...file_category_providers_1.fileCategoryProviders, file_category_service_1.FileCategoryService],
        exports: [file_category_service_1.FileCategoryService],
    })
], FileCategoryModule);
//# sourceMappingURL=file-category.module.js.map