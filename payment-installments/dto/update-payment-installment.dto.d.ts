import { CreatePaymentInstallmentDto } from './create-payment-installment.dto';
declare const UpdatePaymentInstallmentDto_base: import("@nestjs/mapped-types").MappedType<Partial<CreatePaymentInstallmentDto>>;
export declare class UpdatePaymentInstallmentDto extends UpdatePaymentInstallmentDto_base {
    readonly isPaid: boolean;
    readonly paymentDate: Date;
    readonly paymentValue: number;
    readonly projectId: string;
}
export {};
