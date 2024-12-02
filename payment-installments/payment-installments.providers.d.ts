import { DataSource } from 'typeorm';
import { PaymentInstallment } from './entities/payment-installment.entity';
export declare const paymentInstallmentProviders: {
    provide: string;
    useFactory: (dataSource: DataSource) => import("typeorm").Repository<PaymentInstallment>;
    inject: string[];
}[];
