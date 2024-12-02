"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdatePaymentInstallmentDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_payment_installment_dto_1 = require("./create-payment-installment.dto");
class UpdatePaymentInstallmentDto extends (0, mapped_types_1.PartialType)(create_payment_installment_dto_1.CreatePaymentInstallmentDto) {
}
exports.UpdatePaymentInstallmentDto = UpdatePaymentInstallmentDto;
//# sourceMappingURL=update-payment-installment.dto.js.map