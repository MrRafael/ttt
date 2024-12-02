"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomFieldModule = void 0;
const common_1 = require("@nestjs/common");
const custom_field_service_1 = require("./custom-field.service");
const custom_field_controller_1 = require("./custom-field.controller");
let CustomFieldModule = class CustomFieldModule {
};
exports.CustomFieldModule = CustomFieldModule;
exports.CustomFieldModule = CustomFieldModule = __decorate([
    (0, common_1.Module)({
        controllers: [custom_field_controller_1.CustomFieldController],
        providers: [custom_field_service_1.CustomFieldService],
    })
], CustomFieldModule);
//# sourceMappingURL=custom-field.module.js.map