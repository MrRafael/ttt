import { PaymentInstallmentsService } from './payment-installments.service';
import { CreatePaymentInstallmentDto } from './dto/create-payment-installment.dto';
import { UpdatePaymentInstallmentDto } from './dto/update-payment-installment.dto';
export declare class PaymentInstallmentsController {
    private readonly paymentInstallmentsService;
    constructor(paymentInstallmentsService: PaymentInstallmentsService);
    create(createPaymentInstallmentDto: CreatePaymentInstallmentDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updatePaymentInstallmentDto: UpdatePaymentInstallmentDto): Promise<import("./entities/payment-installment.entity").PaymentInstallment>;
    remove(id: string): string;
}
