import { Client } from 'src/clients/entities/client.entity';
import { PaymentInstallment } from 'src/payment-installments/entities/payment-installment.entity';
import { ProjectFile } from 'src/project-files/entities/project-file.entity';
import { CreateProjectDto } from '../dto/create-project.dto';
import { ProjectNote } from 'src/project-note/entities/project-note.entity';
import { CustomField } from 'src/custom-field/entities/custom-field.entity';
export declare class Project {
    constructor(createProjectDto?: CreateProjectDto);
    id: string;
    client: Client;
    value: number;
    title: string;
    employeeName: string;
    employeePhone: string;
    considerations: string;
    object: string;
    product: string;
    deliveryTime: string;
    paymentMethod: string;
    approvalDate: Date;
    status: 'waitingApproval' | 'approved' | 'inProgress' | 'finished' | 'paid';
    createdAt: Date;
    installments: number;
    paymentInstallments: PaymentInstallment[];
    files: ProjectFile[];
    notes: ProjectNote[];
    customFields: CustomField[];
}
