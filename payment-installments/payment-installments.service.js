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
exports.PaymentInstallmentsService = void 0;
const common_1 = require("@nestjs/common");
const constants_1 = require("./constants");
const typeorm_1 = require("typeorm");
const payment_installment_entity_1 = require("./entities/payment-installment.entity");
let PaymentInstallmentsService = class PaymentInstallmentsService {
    constructor(paymentRepository) {
        this.paymentRepository = paymentRepository;
    }
    create(createPaymentInstallmentDto) {
        return 'This action adds a new paymentInstallment';
    }
    findAll() {
        return `This action returns all paymentInstallments`;
    }
    findOne(id) {
        return `This action returns a #${id} paymentInstallment`;
    }
    update(id, updatePaymentInstallmentDto) {
        const payment = new payment_installment_entity_1.PaymentInstallment(updatePaymentInstallmentDto, id);
        return this.paymentRepository.save(payment);
    }
    remove(id) {
        return `This action removes a #${id} paymentInstallment`;
    }
};
exports.PaymentInstallmentsService = PaymentInstallmentsService;
exports.PaymentInstallmentsService = PaymentInstallmentsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)(constants_1.paymentInstallmentConstants.providerName)),
    __metadata("design:paramtypes", [typeorm_1.Repository])
], PaymentInstallmentsService);
//# sourceMappingURL=payment-installments.service.js.map