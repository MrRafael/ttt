import { CreateProjectDto } from './dto/create-project.dto';
import { UpdateProjectDto } from './dto/update-project.dto';
import { Repository } from 'typeorm';
import { Project } from './entities/project.entity';
export declare class ProjectService {
    private projectRepository;
    constructor(projectRepository: Repository<Project>);
    create(createProjectDto: CreateProjectDto): Promise<Project>;
    findAll(take: number, skip: number, keyword: string, filter: {
        status: string[];
    }): Promise<{
        result: number;
        data: Project[];
        calc: {
            total: number;
            approved: number;
        };
    }>;
    selecCalc(onlyApproved?: boolean): Promise<number>;
    findOne(id: string): Promise<Project>;
    update(id: string, updateProjectDto: UpdateProjectDto): Promise<{
        id: string;
        status: "waitingApproval" | "approved" | "inProgress" | "finished" | "paid";
        clientId?: number;
        value?: number;
        title?: string;
        considerations?: string;
        object?: string;
        product?: string;
        employeeName?: string;
        employeePhone?: string;
        deliveryTime?: string;
        paymentMethod?: string;
        paymentInstallments?: import("../payment-installments/entities/payment-installment.entity").PaymentInstallment[];
        customFields?: import("../custom-field/entities/custom-field.entity").CustomField[];
    } & Project>;
    remove(id: string): Promise<import("typeorm").DeleteResult>;
}
