import { CustomField } from 'src/custom-field/entities/custom-field.entity';
import { PaymentInstallment } from 'src/payment-installments/entities/payment-installment.entity';
export declare class CreateProjectDto {
    readonly clientId: number;
    readonly value: number;
    readonly title: string;
    readonly considerations: string;
    readonly object: string;
    readonly product: string;
    readonly employeeName: string;
    readonly employeePhone: string;
    readonly deliveryTime: string;
    readonly paymentMethod: string;
    readonly paymentInstallments: PaymentInstallment[];
    readonly customFields: CustomField[];
}
