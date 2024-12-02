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
exports.Project = void 0;
const client_entity_1 = require("../../clients/entities/client.entity");
const payment_installment_entity_1 = require("../../payment-installments/entities/payment-installment.entity");
const project_file_entity_1 = require("../../project-files/entities/project-file.entity");
const typeorm_1 = require("typeorm");
const create_project_dto_1 = require("../dto/create-project.dto");
const project_note_entity_1 = require("../../project-note/entities/project-note.entity");
const custom_field_entity_1 = require("../../custom-field/entities/custom-field.entity");
let Project = class Project {
    constructor(createProjectDto) {
        if (createProjectDto) {
            const clientToSave = new client_entity_1.Client();
            clientToSave.id = createProjectDto.clientId;
            this.client = clientToSave;
            this.value = createProjectDto.value;
            this.title = createProjectDto.title;
            this.considerations = createProjectDto.considerations;
            this.product = createProjectDto.product;
            this.deliveryTime = createProjectDto.deliveryTime;
            this.paymentMethod = createProjectDto.paymentMethod;
            this.paymentInstallments = createProjectDto.paymentInstallments;
            const now = new Date();
            this.id = `${now.getFullYear()}${now.getMonth() + 1}${now.getDate()}-${now.getHours()}${now.getMinutes()}${now.getSeconds()}`;
            this.createdAt = now;
        }
    }
};
exports.Project = Project;
__decorate([
    (0, typeorm_1.PrimaryColumn)(),
    __metadata("design:type", String)
], Project.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => client_entity_1.Client, (client) => client.projects, {
        onDelete: 'NO ACTION',
    }),
    __metadata("design:type", client_entity_1.Client)
], Project.prototype, "client", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", Number)
], Project.prototype, "value", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Project.prototype, "title", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Project.prototype, "employeeName", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Project.prototype, "employeePhone", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Project.prototype, "considerations", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Project.prototype, "object", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Project.prototype, "product", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Project.prototype, "deliveryTime", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Project.prototype, "paymentMethod", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", Date)
], Project.prototype, "approvalDate", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: 'waitingApproval' }),
    __metadata("design:type", String)
], Project.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Date)
], Project.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: 1 }),
    __metadata("design:type", Number)
], Project.prototype, "installments", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => payment_installment_entity_1.PaymentInstallment, (paymentInstallment) => paymentInstallment.project, {
        onDelete: 'NO ACTION',
        cascade: true,
    }),
    __metadata("design:type", Array)
], Project.prototype, "paymentInstallments", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => project_file_entity_1.ProjectFile, (file) => file.project, {
        onDelete: 'NO ACTION',
    }),
    __metadata("design:type", Array)
], Project.prototype, "files", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => project_note_entity_1.ProjectNote, (note) => note.project, {
        onDelete: 'NO ACTION',
    }),
    __metadata("design:type", Array)
], Project.prototype, "notes", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => custom_field_entity_1.CustomField, (cf) => cf.project, {
        onDelete: 'NO ACTION',
        cascade: true,
    }),
    __metadata("design:type", Array)
], Project.prototype, "customFields", void 0);
exports.Project = Project = __decorate([
    (0, typeorm_1.Entity)(),
    __metadata("design:paramtypes", [create_project_dto_1.CreateProjectDto])
], Project);
//# sourceMappingURL=project.entity.js.map