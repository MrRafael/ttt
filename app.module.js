"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const users_module_1 = require("./users/users.module");
const auth_module_1 = require("./auth/auth.module");
const config_1 = require("@nestjs/config");
const configuration_1 = require("./config/configuration");
const core_1 = require("@nestjs/core");
const roles_guard_1 = require("./auth/roles.guard");
const jwt_1 = require("@nestjs/jwt");
const jwt_auth_guard_1 = require("./auth/jwt-auth.guard");
const clients_module_1 = require("./clients/clients.module");
const file_category_module_1 = require("./file-category/file-category.module");
const proposal_template_module_1 = require("./proposal-template/proposal-template.module");
const project_module_1 = require("./project/project.module");
const payment_installments_module_1 = require("./payment-installments/payment-installments.module");
const project_files_module_1 = require("./project-files/project-files.module");
const project_note_module_1 = require("./project-note/project-note.module");
const custom_field_module_1 = require("./custom-field/custom-field.module");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            auth_module_1.AuthModule,
            users_module_1.UsersModule,
            config_1.ConfigModule.forRoot({
                load: [configuration_1.default],
                isGlobal: true,
            }),
            jwt_1.JwtModule.registerAsync({
                imports: [config_1.ConfigModule],
                useFactory: async (configService) => ({
                    secret: configService.get('jwt.secret'),
                    signOptions: { expiresIn: configService.get('jwt.duration') },
                }),
                inject: [config_1.ConfigService],
                global: true,
            }),
            clients_module_1.ClientsModule,
            file_category_module_1.FileCategoryModule,
            proposal_template_module_1.ProposalTemplateModule,
            project_module_1.ProjectModule,
            payment_installments_module_1.PaymentInstallmentsModule,
            project_files_module_1.ProjectFilesModule,
            project_note_module_1.ProjectNoteModule,
            custom_field_module_1.CustomFieldModule,
        ],
        controllers: [app_controller_1.AppController],
        providers: [
            app_service_1.AppService,
            {
                provide: core_1.APP_GUARD,
                useClass: jwt_auth_guard_1.JwtAuthGuard,
            },
            {
                provide: core_1.APP_GUARD,
                useClass: roles_guard_1.RolesGuard,
            },
        ],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map