"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaymentInstallmentsModule = void 0;
const common_1 = require("@nestjs/common");
const payment_installments_service_1 = require("./payment-installments.service");
const payment_installments_controller_1 = require("./payment-installments.controller");
const database_module_1 = require("../database/database.module");
const payment_installments_providers_1 = require("./payment-installments.providers");
let PaymentInstallmentsModule = class PaymentInstallmentsModule {
};
exports.PaymentInstallmentsModule = PaymentInstallmentsModule;
exports.PaymentInstallmentsModule = PaymentInstallmentsModule = __decorate([
    (0, common_1.Module)({
        imports: [database_module_1.DatabaseModule],
        controllers: [payment_installments_controller_1.PaymentInstallmentsController],
        providers: [...payment_installments_providers_1.paymentInstallmentProviders, payment_installments_service_1.PaymentInstallmentsService],
        exports: [payment_installments_service_1.PaymentInstallmentsService],
    })
], PaymentInstallmentsModule);
//# sourceMappingURL=payment-installments.module.js.map