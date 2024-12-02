import { Project } from 'src/project/entities/project.entity';
import { UpdatePaymentInstallmentDto } from '../dto/update-payment-installment.dto';
export declare class PaymentInstallment {
    constructor(updatePaymentInstallmentDto?: UpdatePaymentInstallmentDto, id?: number);
    id: number;
    isPaid: boolean;
    paymentDate: Date;
    paymentValue: number;
    project: Project;
}
