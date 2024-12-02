"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.paymentInstallmentProviders = void 0;
const constants_1 = require("../database/constants");
const constants_2 = require("./constants");
const payment_installment_entity_1 = require("./entities/payment-installment.entity");
exports.paymentInstallmentProviders = [
    {
        provide: constants_2.paymentInstallmentConstants.providerName,
        useFactory: (dataSource) => dataSource.getRepository(payment_installment_entity_1.PaymentInstallment),
        inject: [constants_1.databaseConstants.providerName],
    },
];
//# sourceMappingURL=payment-installments.providers.js.map