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
exports.PaymentInstallment = void 0;
const project_entity_1 = require("../../project/entities/project.entity");
const typeorm_1 = require("typeorm");
const update_payment_installment_dto_1 = require("../dto/update-payment-installment.dto");
let PaymentInstallment = class PaymentInstallment {
    constructor(updatePaymentInstallmentDto, id) {
        if (updatePaymentInstallmentDto && id) {
            this.id = id;
            this.isPaid = updatePaymentInstallmentDto.isPaid;
            this.paymentDate = new Date(updatePaymentInstallmentDto.paymentDate);
            this.paymentValue = updatePaymentInstallmentDto.paymentValue;
            const project = new project_entity_1.Project();
            project.id = updatePaymentInstallmentDto.projectId;
            this.project = project;
        }
    }
};
exports.PaymentInstallment = PaymentInstallment;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], PaymentInstallment.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: false }),
    __metadata("design:type", Boolean)
], PaymentInstallment.prototype, "isPaid", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", Date)
], PaymentInstallment.prototype, "paymentDate", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", Number)
], PaymentInstallment.prototype, "paymentValue", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => project_entity_1.Project, (project) => project.paymentInstallments, {
        onDelete: 'CASCADE',
        orphanedRowAction: 'delete',
    }),
    __metadata("design:type", project_entity_1.Project)
], PaymentInstallment.prototype, "project", void 0);
exports.PaymentInstallment = PaymentInstallment = __decorate([
    (0, typeorm_1.Entity)(),
    __metadata("design:paramtypes", [update_payment_installment_dto_1.UpdatePaymentInstallmentDto, Number])
], PaymentInstallment);
//# sourceMappingURL=payment-installment.entity.js.map