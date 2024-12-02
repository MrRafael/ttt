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
exports.PaymentInstallmentsController = void 0;
const common_1 = require("@nestjs/common");
const payment_installments_service_1 = require("./payment-installments.service");
const create_payment_installment_dto_1 = require("./dto/create-payment-installment.dto");
const update_payment_installment_dto_1 = require("./dto/update-payment-installment.dto");
let PaymentInstallmentsController = class PaymentInstallmentsController {
    constructor(paymentInstallmentsService) {
        this.paymentInstallmentsService = paymentInstallmentsService;
    }
    create(createPaymentInstallmentDto) {
        return this.paymentInstallmentsService.create(createPaymentInstallmentDto);
    }
    findAll() {
        return this.paymentInstallmentsService.findAll();
    }
    findOne(id) {
        return this.paymentInstallmentsService.findOne(+id);
    }
    update(id, updatePaymentInstallmentDto) {
        return this.paymentInstallmentsService.update(+id, updatePaymentInstallmentDto);
    }
    remove(id) {
        return this.paymentInstallmentsService.remove(+id);
    }
};
exports.PaymentInstallmentsController = PaymentInstallmentsController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_payment_installment_dto_1.CreatePaymentInstallmentDto]),
    __metadata("design:returntype", void 0)
], PaymentInstallmentsController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], PaymentInstallmentsController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], PaymentInstallmentsController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_payment_installment_dto_1.UpdatePaymentInstallmentDto]),
    __metadata("design:returntype", void 0)
], PaymentInstallmentsController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], PaymentInstallmentsController.prototype, "remove", null);
exports.PaymentInstallmentsController = PaymentInstallmentsController = __decorate([
    (0, common_1.Controller)('payment-installments'),
    __metadata("design:paramtypes", [payment_installments_service_1.PaymentInstallmentsService])
], PaymentInstallmentsController);
//# sourceMappingURL=payment-installments.controller.js.map