import { CreatePaymentInstallmentDto } from './dto/create-payment-installment.dto';
import { UpdatePaymentInstallmentDto } from './dto/update-payment-installment.dto';
import { Repository } from 'typeorm';
import { PaymentInstallment } from './entities/payment-installment.entity';
export declare class PaymentInstallmentsService {
    private paymentRepository;
    constructor(paymentRepository: Repository<PaymentInstallment>);
    create(createPaymentInstallmentDto: CreatePaymentInstallmentDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updatePaymentInstallmentDto: UpdatePaymentInstallmentDto): Promise<PaymentInstallment>;
    remove(id: number): string;
}
